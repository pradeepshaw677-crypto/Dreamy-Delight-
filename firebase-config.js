

// ===== FIREBASE CONFIGURATION (v8 Compatible) =====
const firebaseConfig = {
    apiKey: "AIzaSyDBhpcwAtd8gKVNtagusJ4FmFXK-7PiLzQ",
    authDomain: "dreamy-delight-27e16.firebaseapp.com",
    databaseURL: "https://dreamy-delight-27e16-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dreamy-delight-27e16",
    storageBucket: "dreamy-delight-27e16.firebasestorage.app",
    messagingSenderId: "77481876440",
    appId: "1:77481876440:web:7cf11156ee67b1e47ab0ad",
    measurementId: "G-VT8JDL8QGW"
};

// ===== INITIALIZE FIREBASE =====
firebase.initializeApp(firebaseConfig);

// ===== DATABASE REFERENCE =====
const db = firebase.database();

console.log("✅ Firebase Connected!");
