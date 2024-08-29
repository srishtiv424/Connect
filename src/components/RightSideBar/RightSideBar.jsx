import React, { useContext, useEffect, useState } from "react";
import style from "./RightSideBar.module.css";
import profile from "../../assets/profile_marco.png";
import pic2 from "../../assets/pic2.png";
import { logout } from "../../config/firebase.js";
import { GoDotFill } from "react-icons/go";
import { AppContext } from "../../context/AppContext.jsx";
function RightSideBar() {
  const { chatUser, messages } = useContext(AppContext);
  const [msgImages, setMsgImages] = useState([]);
  useEffect(() => {
    let tempVar = [];
    messages.map((msg) => {
      if (msg.image) {
        tempVar.push(msg.image);
      }
    });
    setMsgImages(tempVar);
    console.log(msgImages);
  }, [messages]);
  return chatUser ? (
    <div className={style.rs}>
      <div className={style.rsProfile}>
        <img src={chatUser.userData.avatar} />
        <h3>
          {Date.now() - chatUser.userData.lastSeen <= 70000 ? (
            <GoDotFill style={{ color: "green", fontSize: "15px" }} />
          ) : null}{" "}
          {chatUser.userData.name}
        </h3>

        <p>{chatUser.userData.bio}</p>
      </div>
      <hr />
      <div className={style.rsMedia}>
        <p>Media</p>
        <div>
          {msgImages.map((url, key) => (
            <img onClick={() => window.open(url)} src={url} key={key} alt="" />
          ))}
        </div>
      </div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  ) : (
    <div className={style.rs}>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default RightSideBar;
