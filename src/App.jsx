import React, { useContext, useEffect } from "react";
import Login from "./pages/login/Login.jsx";
import Chat from "./pages/chat/Chat.jsx";
import ProfileUpdate from "./pages/profileUpdate/ProfileUpdate.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.js";
import { AppContext } from "./context/AppContext.jsx";

function App() {
  const navigate = useNavigate();
  const { loadUserData } = useContext(AppContext);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        loadUserData(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
