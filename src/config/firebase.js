import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  where,
  query,
  getDocs,
  collection,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBQGDVK9tDTBxmQ_vmJK8LW9wbPqMnDrg8",
  authDomain: "connect-78a5f.firebaseapp.com",
  projectId: "connect-78a5f",
  storageBucket: "connect-78a5f.appspot.com",
  messagingSenderId: "425980497588",
  appId: "1:425980497588:web:b5a9de38778bc252a7d1e1",
  measurementId: "G-4Y3GY49Q31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Consider removing if not needed
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, there! I am using Connect.",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
    toast.success("Account Created!!");
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
    console.error(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful.");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const resetPass = async (email) => {
  if (!email) {
    toast.error("Enter your email");
    return;
  }
  try {
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));
    const querySnap = await getDocs(q);

    if (!querySnap.empty) {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset Email Sent");
    } else {
      toast.error("Email not found");
    }
  } catch (error) {
    toast.error(error.message);
    console.error("Reset password error:", error);
  }
};

export { signup, login, logout, db, auth, resetPass };
