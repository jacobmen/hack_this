import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB5zdcc4dBy1iiUL4p_u-uc5ZJ7X-msFuc",
    authDomain: "historio-project.firebaseapp.com",
    databaseURL: "https://historio-project.firebaseio.com",
    projectId: "historio-project",
    storageBucket: "historio-project.appspot.com",
    messagingSenderId: "693739184547",
    appId: process.env.FIREBASE_APP_ID
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
    auth,
    firebase
}