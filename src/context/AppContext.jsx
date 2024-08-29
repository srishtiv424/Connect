import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [messagesId, setMessagesId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatUser, setChatUser] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const navigate = useNavigate();

  const loadUserData = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      setUserData(userData);

      if (userData.avatar && userData.name) {
        navigate("/chat");
      } else {
        navigate("/profile");
      }

      await updateDoc(userRef, {
        lastSeen: Date.now(),
      });

      const intervalId = setInterval(async () => {
        if (auth.currentUser) {
          await updateDoc(userRef, {
            lastSeen: Date.now(),
          });
        }
      }, 60000);

      return () => clearInterval(intervalId);
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  useEffect(() => {
    let unSub;
    if (userData) {
      const chatRef = doc(db, "chats", userData.id);
      unSub = onSnapshot(chatRef, async (res) => {
        const chatItems = res.data()?.chatsData || [];
        const tempData = [];

        for (const item of chatItems) {
          const userRef = doc(db, "users", item.rId);
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data();
          tempData.push({ ...item, userData });
        }
        setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt));
      });
    }

    return () => {
      if (unSub) unSub();
    };
  }, [userData]);

  let value = {
    userData,
    setUserData,
    chatData,
    setChatData,
    loadUserData,
    messages,
    setMessages,
    setMessagesId,
    messagesId,
    chatUser,
    setChatUser,
    chatVisible,
    setChatVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
