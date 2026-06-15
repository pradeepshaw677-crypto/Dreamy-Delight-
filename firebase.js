// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyDBhpcwAtd8gKVNtagusJ4FmFXK-7PiLQ",
  authDomain: "dreamy-delight-27e16.firebaseapp.com",
  databaseURL: "https://dreamy-delight-27e16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dreamy-delight-27e16",
  storageBucket: "dreamy-delight-27e16.appspot.com",
  messagingSenderId: "77481876440",
  appId: "1:77481876440:web:7cf11156ee67b1e47ab0ad"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// export database globally
const db = firebase.database();
