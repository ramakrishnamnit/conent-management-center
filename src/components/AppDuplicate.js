import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './components/firebase/firebase-config';
import LoginPage from './components/LoginPage'; // Assuming you have this component
import HomePage from './components/HomePage';
import CreateTemplatePage from './components/CreateTemplatePage';
import PostContentPage from './components/PostContentPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("logged in user "+ user);
    });

    // Unsubscribe from the listener when unmounting
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to home if user is logged in, otherwise show login page */}
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <LoginPage />} />
        {/* Protect these routes for authenticated users only */}
        <Route path="/" element={currentUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/create-template" element={currentUser ? <CreateTemplatePage /> : <Navigate to="/login" />} />
        <Route path="/post-content" element={currentUser ? <PostContentPage /> : <Navigate to="/login" />} />
        {/* ...other routes */}


      </Routes>
    </BrowserRouter>
  );
};

export default App;
