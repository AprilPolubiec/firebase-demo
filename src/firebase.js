import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiBjRcFn4kfUOvnu4TJwTktLefhhRJi7Y",
    authDomain: "aprilpdev-fb-demo.firebaseapp.com",
    projectId: "aprilpdev-fb-demo",
    storageBucket: "aprilpdev-fb-demo.appspot.com",
    messagingSenderId: "385835000670",
    appId: "1:385835000670:web:6e142113cd2815674fa5cf",
    measurementId: "G-GM1SJGF0EJ"
};

firebase.initializeApp(firebaseConfig)

var google_provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const signInWithGoogleProvider = () => {
    return auth.signInWithPopup(google_provider)
}

export default firebase