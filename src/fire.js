import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDShrggxruvGjpgV1oaYod36qAt627EwMI",
    authDomain: "artgallery-9e29f.firebaseapp.com",
    projectId: "artgallery-9e29f",
    storageBucket: "artgallery-9e29f.appspot.com",
    messagingSenderId: "110124650652",
    appId: "1:110124650652:web:8aa00b259825b595af1d59",
    measurementId: "G-4BT54ZFDN4"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;