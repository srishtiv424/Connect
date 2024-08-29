import React, { useContext, useEffect, useState } from "react";
import style from "./profileUpdate.module.css";
import avatar from "../../assets/avatar_icon.png";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import upload from "../../lib/upload";
import { AppContext } from "../../context/AppContext";

function ProfileUpdate() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [prevImg, setPrevImg] = useState("");
  const { setUserData } = useContext(AppContext);

  const profileUpdate = async (e) => {
    e.preventDefault();
    try {
      const getRef = doc(db, "users", uid);
      const docSnap = await getDoc(getRef);

      if (prevImg === "" && profile === "") {
        toast.error("Upload profile picture.");
        return;
      }

      if (profile) {
        const imgUrl = await upload(profile);
        setPrevImg(imgUrl);
        await updateDoc(getRef, {
          avatar: imgUrl,
          name: name,
          bio: bio,
        });
      } else {
        await updateDoc(getRef, {
          name: name,
          bio: bio,
        });
      }
      toast.success("Profile Updated Succesfully.");
      setUserData(docSnap.data());
      navigate("/chat");
    } catch (error) {
      toast.error(error.code);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setUid(user.uid);
        if (data.name) setName(data.name);
        if (data.bio) setBio(data.bio);
        if (data.avatar) {
          setPrevImg(data.avatar);
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className={style.profile}>
      <div className={style.profileContainer}>
        <form onSubmit={(e) => profileUpdate(e)}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              type="file"
              id="avatar"
              onChange={(e) => setProfile(e.target.files[0])}
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={
                profile
                  ? URL.createObjectURL(profile)
                  : prevImg
                  ? prevImg
                  : avatar
              }
              alt="Profile"
            />
            upload profile image
          </label>
          <input
            type="text"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <textarea
            placeholder="Write profile bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            required
          ></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          src={
            profile ? URL.createObjectURL(profile) : prevImg ? prevImg : avatar
          }
          className={style.logo}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default ProfileUpdate;
