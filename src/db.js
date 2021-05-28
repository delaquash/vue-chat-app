import firebase from 'firebase/app';
import "firebase/database";

const config = {
    apiKey: "AIzaSyBg_MYePgHlIqlNzXxwrpJcwCkK2tNwUog",
    authDomain: "vue-chat-app-9cd00.firebaseapp.com",
    projectId: "vue-chat-app-9cd00",
    storageBucket: "vue-chat-app-9cd00.appspot.com",
    messagingSenderId: "547695629149",
    appId: "1:547695629149:web:4fe3287132377e432f0eb4"
}

const db = firebase.initializeApp(config)
export default firebase;