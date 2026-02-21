import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr-NSbEkzTtGB_J0kMG11mkT7N8oFLzs4",
  authDomain: "email-pass-auth-3f690.firebaseapp.com",
  projectId: "email-pass-auth-3f690",
  storageBucket: "email-pass-auth-3f690.firebasestorage.app",
  messagingSenderId: "1045222003353",
  appId: "1:1045222003353:web:3a12456d44329aad151e08"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
