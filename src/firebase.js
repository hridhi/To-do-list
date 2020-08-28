// const  firebaseConfig = {
    // apiKey: "AIzaSyBlO_6MEnVD-AoHJtEd1VDtCKxfWc26_Rc",
    // authDomain: "todo-list-6b113.firebaseapp.com",
    // databaseURL: "https://todo-list-6b113.firebaseio.com",
    // projectId: "todo-list-6b113",
    // storageBucket: "todo-list-6b113.appspot.com",
    // messagingSenderId: "1020708744319",
    // appId: "1:1020708744319:web:cf9d071fd09c660712a34a",
    // measurementId: "G-F7N54VS6XC"
//   };

import firebase from "firebase";
const firebaseApp =firebase.initializeApp({
        apiKey: "AIzaSyBlO_6MEnVD-AoHJtEd1VDtCKxfWc26_Rc",
        authDomain: "todo-list-6b113.firebaseapp.com",
        databaseURL: "https://todo-list-6b113.firebaseio.com",
        projectId: "todo-list-6b113",
        storageBucket: "todo-list-6b113.appspot.com",
        messagingSenderId: "1020708744319",
        appId: "1:1020708744319:web:cf9d071fd09c660712a34a",
        measurementId: "G-F7N54VS6XC"
});
const db=firebaseApp.firestore();
 
export default db;