import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAecUJGYdQVmQg7kt6K1awEBFUToseILF4",
    authDomain: "myrume-d26d4.firebaseapp.com",
    projectId: "myrume-d26d4",
    storageBucket: "myrume-d26d4.appspot.com",
    messagingSenderId: "136537654997",
    appId: "1:136537654997:web:0904eeab4d0e2e7de8c45c"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();



  export {auth, provider};
  export default db;