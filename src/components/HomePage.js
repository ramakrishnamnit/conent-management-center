import React, { useState, useEffect } from 'react';
//import { fetchAllContent } from '../api'; // you would define this API call

const HomePage = () => {
  const [content, setContent] = useState([]);

//  useEffect(() => {
////    const getContent = async () => {
////      const contentFromDb = await fetchAllContent();
////      setContent(contentFromDb);
//    };
//
//    //getContent();
//  }, []);

  return (
    <div>
      {/* map through content and display it */}
      {/* include an edit button */}
    </div>
  );
};

export default HomePage;
