import React, { useContext, useEffect, useState } from "react";
import style from "./Chatbox.module.css";
import profile from "../../assets/profile_marco.png";
import { MdInsertPhoto } from "react-icons/md";
import pic2 from "../../assets/pic2.png";
import { GoDotFill } from "react-icons/go";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";

import { IoMdSend } from "react-icons/io";
import { AppContext } from "../../context/AppContext";
import logo from "../../assets/logo_icon.png";
import {
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
} from "firebase/firestore"; // Ensure all imports
import { db } from "../../config/firebase";
import { toast } from "react-toastify";
import upload from "../../lib/upload";

function Chatbox() {
  const {
    userData,
    messagesId,
    chatUser,
    messages,
    setMessages,
    chatVisible,
    setChatVisible,
  } = useContext(AppContext);

  const [input, setInput] = useState("");

  useEffect(() => {
    if (messagesId) {
      const unSub = onSnapshot(doc(db, "messages", messagesId), (res) => {
        setMessages(res.data().messages.reverse());
      });
      return () => {
        unSub();
      };
    }
  }, [messagesId]);

  function convertTimeStamp(timestamp) {
    let date = timestamp.toDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm =
      hours >= 12
        ? hours - 12 + ":" + minutes + "PM"
        : hours + ":" + minutes + "AM";
    return ampm;
  }
  const sendImg = async (e) => {
    try {
      const fileUrl = await upload(e.target.files[0]);
      if (!fileUrl) {
        toast.error("Error uploading image");
        return;
      }
      if (fileUrl && messagesId) {
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            image: fileUrl,
            createdAt: new Date(),
          }),
        });
        const userIds = [chatUser.rId, userData.id];
        userIds.forEach(async (id) => {
          const userChatsRef = doc(db, "chats", id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatData = userChatsSnapshot.data();
            const chatIndex = userChatData.chatsData.findIndex(
              (c) => c.messageId === messagesId
            );

            userChatData.chatsData[chatIndex].lastMessage = "Image";
            userChatData.chatsData[chatIndex].updatedAt = Date.now();

            if (userChatData.chatsData[chatIndex].rId === userData.id) {
              userChatData.chatsData[chatIndex].messageSeen = false;
            }

            await updateDoc(userChatsRef, {
              chatsData: userChatData.chatsData,
            });
          }
        });
      }
    } catch (error) {
      toast.error(error.code);
    }
  };
  const sendMessage = async () => {
    try {
      if (input && messagesId) {
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            text: input,
            createdAt: new Date(),
          }),
        });

        const userIds = [chatUser.rId, userData.id];
        userIds.forEach(async (id) => {
          const userChatsRef = doc(db, "chats", id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatData = userChatsSnapshot.data();
            const chatIndex = userChatData.chatsData.findIndex(
              (c) => c.messageId === messagesId
            );

            userChatData.chatsData[chatIndex].lastMessage = input.slice(0, 30);
            userChatData.chatsData[chatIndex].updatedAt = Date.now();

            if (userChatData.chatsData[chatIndex].rId === userData.id) {
              userChatData.chatsData[chatIndex].messageSeen = false;
            }

            await updateDoc(userChatsRef, {
              chatsData: userChatData.chatsData,
            });
          }
        });
      }
    } catch (error) {
      toast.error(error.code);
    }

    setInput("");
  };
  return (
    <div className={`${style.chatBox} ${chatVisible ? "" : style.hidden}`}>
      {chatUser ? (
        <>
          <div className={style.chatUser}>
            <img src={chatUser.userData.avatar} alt="" />
            <p>
              {chatUser.userData.name}{" "}
              {Date.now() - chatUser.userData.lastSeen <= 70000 ? (
                <GoDotFill style={{ color: "green", fontSize: "15px" }} />
              ) : null}
            </p>
            <IoHelpCircleOutline className={style.help} />
            <IoMdArrowBack onClick={()=>setChatVisible(false)} className={style.back}/>

          </div>
          <div className={style.chatMsg}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sId === userData.id ? style.sMsg : style.rMsg}
              >
                {msg["image"] ? (
                  <img src={msg.image} className={style.msgImg} />
                ) : (
                  <p className={style.msg}>{msg.text}</p>
                )}

                <div>
                  <img
                    src={
                      msg.sId === userData.id
                        ? userData.avatar
                        : chatUser.userData.avatar
                    }
                  />
                  <p>{convertTimeStamp(msg.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={style.chatInput}>
            <input
              type="text"
              placeholder="Send a message"
              style={{ outline: "none", border: "none" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <input
                onChange={(e) => sendImg(e)}
                type="file"
                id="image"
                accept="image/png,image/jpeg,image/jpg"
                hidden
              />
              <label htmlFor="image">
                <MdInsertPhoto
                  style={{
                    fontSize: "22px",
                    paddingRight: "2px",
                    cursor: "pointer",
                  }}
                />
              </label>
              <IoMdSend
                style={{ fontSize: "22px", cursor: "pointer" }}
                onClick={sendMessage}
              />
            </div>
          </div>
        </>
      ) : (
        <div
          className={`${style.chatWelcome} ${chatVisible ? "" : style.hidden}`}
        >
          <img src={logo} alt="Logo" />
          <p>Chat anytime, anywhere</p>
        </div>
      )}
    </div>
  );
}

export default Chatbox;
