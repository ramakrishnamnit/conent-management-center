import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';


// Replace the following with your own Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKewvDFHQJrtC6i6_cKmbCmub7HgUhTLU",
  authDomain: "content-management-center.firebaseapp.com",
  databaseURL: "https://content-management-center-default-rtdb.firebaseio.com",
  projectId: "content-management-center",
  storageBucket: "content-management-center.appspot.com",
  messagingSenderId: "216174385238",
  appId: "1:216174385238:web:65402539c11bbf4699c3f7",
  measurementId: "G-TKYG26RKSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// FirebaseUI config
const uiConfig = {
  callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        console.log("auth result: " + authResult);
        console.log("redirect url: " + redirectUrl);
        return true;
      },
      signInFailure: function(error) {
      console.log("error: " + error);
            // For merge conflicts, the error.code will be
            // 'firebaseui/anonymous-upgrade-merge-conflict'.
            if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
              return Promise.resolve();
            }
            // The credential the user tried to sign in with.
            var cred = error.credential;
            // Copy data from anonymous user to permanent user and delete anonymous
            // user.
            // ...
            // Finish sign-in after data is copied.
            return true
          }

    },
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
    // Add other providers you want to support
  ],
  signInSuccessUrl: '/', // URL to redirect to after sign-in is successful.
  // Other config options...
};

// Initialize FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(auth);

export { app, auth, database, storage, ui, uiConfig };


