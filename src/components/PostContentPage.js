import React, { useState, useEffect } from 'react';
//import { fetchTemplates, saveContent } from '../api'; // define these API calls

const PostContentPage = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});

//  useEffect(() => {
////    const getTemplates = async () => {
////      const templatesFromDb = await fetchTemplates();
////      setTemplates(templatesFromDb);
//    };
//
//    //getTemplates();
//  }, []);

  const handleTemplateSelect = (templateId) => {
    // logic to handle template selection
  };

  const handleFieldChange = (fieldName, value) => {
    // logic to handle form field changes
  };

//  const handleSubmit = async () => {
//    try {
//      await saveContent(selectedTemplate, formData);
//      // handle success
//    } catch (error) {
//      console.error(error);
//      // handle error
//    }
//  };

  return (
    <div>
      {/* dropdown to select a template */}
      {/* form to fill out selected template */}
    </div>
  );
};

export default PostContentPage;
