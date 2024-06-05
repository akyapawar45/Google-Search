import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp'; // Import the SignUp component

const SignUpPage = () => {
  const navigate = useNavigate();

  // Function to handle adding a new profile
  const handleAddProfile = (newProfile) => {
    // Implement your logic to add the new profile here
    console.log('New Profile:', newProfile);
    // For example, you can store the new profile in your state or database
  };

  return (
    <div>
      <SignUp onAddProfile={handleAddProfile} /> {/* Render the SignUp component */}
    </div>
  );
};

export default SignUpPage;
