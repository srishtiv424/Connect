import React, { useContext, useEffect, useState } from "react";
import style from "./LeftSideBar.module.css";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { logout } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  setDoc,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

function LeftSideBar() {
  const {
    userData,
    chatData,
    chatUser,
    setChatUser,
    setMessagesId,
    messagesId,
    chatVisible,
    setChatVisible,
  } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const inputHandler = async (e) => {
    const input = e.target.value.toLowerCase();
    if (input) {
      setShowSearch(true);
      const useRef = collection(db, "users");
      const q = query(useRef, where("username", "==", input));
      const querySnap = await getDocs(q);
      if (!querySnap.empty && querySnap.docs[0].data().id !== userData.id) {
        let userExist = false;
        chatData.forEach((user) => {
          if (user.rId === querySnap.docs[0].data().id) {
            userExist = true;
          }
        });
        if (!userExist) setUser(querySnap.docs[0].data());
      } else {
        setUser(null);
      }
    } else {
      setShowSearch(false);
    }
  };

  const addChat = async () => {
    const messagesRef = collection(db, "messages");
    const chatsRef = collection(db, "chats");
    try {
      const newMessageRef = doc(messagesRef);
      await setDoc(newMessageRef, {
        createAt: serverTimestamp(),
        messages: [],
      });
      await updateDoc(doc(chatsRef, user.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: userData.id,
          updatedAt: Date.now(),
          messageSeen: false,
        }),
      });
      await updateDoc(doc(chatsRef, userData.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: user.id,
          updatedAt: Date.now(),
          messageSeen: false,
        }),
      });
      const uSnap = await getDoc(doc(db, "users", user.id));
      const uData = uSnap.data();
      setChat({
        messagesId: newMessageRef.id,
        lastMessage: "",
        updatedAt: Date.now(),
        messageSeen: true,
        userData: uData,
      });
      setShowSearch(false);
      setChatVisible(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const setChat = async (item) => {
    try {
      setMessagesId(item.messageId);
      setChatUser(item);

      const userChatsRef = doc(db, "chats", userData.id);
      const userChatsSnapshot = await getDoc(userChatsRef);
      const userChatsData = userChatsSnapshot.data();

      if (userChatsData && userChatsData.chatsData) {
        const chatIndex = userChatsData.chatsData.findIndex(
          (c) => c.messageId === item.messageId
        );
        if (chatIndex !== -1) {
          userChatsData.chatsData[chatIndex].messageSeen = true;
          await updateDoc(userChatsRef, {
            chatsData: userChatsData.chatsData,
          });
        }
      }
      setChatVisible(true);
    } catch (error) {
      toast.error(error.code);
    }
  };
  useEffect(() => {
    const updateChatUserData = async () => {
      if (chatUser) {
        const userRef = doc(db, "users", chatUser.userData.id);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        setChatUser((prev) => ({ ...prev, userData: userData }));
      }
    };
    updateChatUserData();
  }, [chatData]);
  return (
    <div className={`${style.ls} ${chatVisible ? style.hidden : ""}`}>
      <div className={style.lsTop}>
        <div className={style.lsNav}>
          <img src={logo} className={style.logo} alt="Logo" />
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle && (
            <div className={style.subMenu}>
              <p onClick={() => navigate("/profile")}>Edit Profile</p>
              <hr />
              <p onClick={() => logout()}>Logout</p>
            </div>
          )}
        </div>
        <div className={style.lsSearch}>
          <CiSearch />
          <input
            type="text"
            placeholder="Search here..."
            onChange={inputHandler}
          />
        </div>
        <div className={style.lsList}>
          {showSearch && user ? (
            <div
              onClick={addChat}
              className={`${style.friends} ${style.addUser}`}
            >
              <img src={user.avatar} className={style.avatar} alt="Avatar" />
              <p>{user.name}</p>
            </div>
          ) : (
            chatData &&
            chatData.map((item, idx) => (
              
              <div
                onClick={() => {setChat(item);
                console.log(item)}}
                className={`${style.friends} ${
                  item.messageSeen || item.messageId === messagesId
                    ? ""
                    : style.border
                }`}
                key={idx}
              >
                <img src={item.userData.avatar} alt="Profile of user" />
                <div>
                  <p>{item.userData.name}</p>
                  <span>{item.lastMessage}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
