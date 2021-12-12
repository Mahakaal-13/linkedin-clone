import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBulInvQwnJai1_tQZIgS3oHZ4P0xZJOCc",
    authDomain: "linkedin-clone-debangshu.firebaseapp.com",
    projectId: "linkedin-clone-debangshu",
    storageBucket: "linkedin-clone-debangshu.appspot.com",
    messagingSenderId: "145112789978",
    appId: "1:145112789978:web:a17ecf01a1bc10b441c6e3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};

  export const timeStamp = () => firebase.firestore.FieldValue.serverTimestamp()

export const saveToDatabase = (collection, post) => {
    db.collection(collection).add(post)
}



