import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDPHARk1c4XUH_qGzswc_8cyJevD4SZ3kY",
    authDomain: "dropbox-clone-31d9e.firebaseapp.com",
    projectId: "dropbox-clone-31d9e",
    storageBucket: "dropbox-clone-31d9e.appspot.com",
    messagingSenderId: "143549847687",
    appId: "1:143549847687:web:00d9c4cfb70a3b8ad24022"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};