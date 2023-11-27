import React, { useEffect } from 'react';
import { auth, uiConfig, ui } from './firebase-config';
import './firebaseui-override.css';

const FirebaseLogin = () => {
  useEffect(() => {
    // Initialize the FirebaseUI Widget using Firebase.
    ui.start('#firebaseui-auth-container', uiConfig);

    // Cleanup the UI widget on unmount
    return () => {
      ui.reset();
    };
  }, []);

  return (
    <div id="firebaseui-auth-container"></div>
  );
};

export default FirebaseLogin;
