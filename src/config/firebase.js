// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdPuOvUO2p6-V9df6475bmG7ssUqinLuI",
  authDomain: "lms-clone-squad-d.firebaseapp.com",
  projectId: "lms-clone-squad-d",
  storageBucket: "lms-clone-squad-d.appspot.com",
  messagingSenderId: "102600843856",
  appId: "1:102600843856:web:206cc0f964af6d716aa755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;