
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWGSJOxZQm8K-4s_pgOSFSpZJsIsHAK0I",
  authDomain: "volvocars-broadcast.firebaseapp.com",
  projectId: "volvocars-broadcast",
  storageBucket: "volvocars-broadcast.appspot.com",
  messagingSenderId: "529488820177",
  appId: "1:529488820177:web:bd767d5ad7e529a27892f0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

export {db}