import React, { useState } from 'react';
//import { saveTemplate } from '../api'; // define this API call

const CreateTemplatePage = () => {
  const [templateFields, setTemplateFields] = useState([]);

  const handleAddField = () => {
    // logic to add a new question
  };

//  const handleSubmit = async () => {
//    try {
//      //await saveTemplate(templateFields);
//      // handle success
//    } catch (error) {
//      console.error(error);
//      // handle error
//    }
//  };

  return (
    <div>
      {/* form to add questions and submit */}
    </div>
  );
};

export default CreateTemplatePage;
