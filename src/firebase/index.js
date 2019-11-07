import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyBUhohU6cubu7XhkXDGA_GnPjCUdj-J8Zo",
    authDomain: "planer-91a24.firebaseapp.com",
    databaseURL: "https://planer-91a24.firebaseio.com",
    projectId: "planer-91a24",
    storageBucket: "planer-91a24.appspot.com",
    messagingSenderId: "178104385513",
    appId: "1:178104385513:web:bc825679ee318a6c7a1578",
    measurementId: "G-99BEJ0MC9E"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
 export default firebase;