import React, { useEffect } from "react";
import style from "./chat.module.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Chatbox from "../../components/ChatBox/Chatbox";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function Chat() {
  const { chatData, userData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (userData && chatData) setLoading(false);
  }, [chatData, userData]);
  return (
    <div className={style.chat}>
      {loading ? (
        <p className={style.loader}></p>
      ) : (
        <div className={style.chatContainer}>
          <LeftSideBar />
          <Chatbox />
          <RightSideBar />
        </div>
      )}
    </div>
  );
}

export default Chat;
