import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyB5zdcc4dBy1iiUL4p_u-uc5ZJ7X-msFuc",
    authDomain: "historio-project.firebaseapp.com",
    databaseURL: "https://historio-project.firebaseio.com",
    projectId: "historio-project",
    storageBucket: "historio-project.appspot.com",
    messagingSenderId: "693739184547",
    appId: "1:693739184547:web:fe18de7046ee0f5e817a16"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

export default function login(props) {
    return (
        <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}