import React from 'react';
import FirebaseLogin from  './firebase/FirebaseLogin'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {

  return (
    <div>
      <h1>Login Page</h1>
      <FirebaseLogin /> {/* Use the FirebaseLogin component */}
    </div>
  );
};

export default LoginPage;