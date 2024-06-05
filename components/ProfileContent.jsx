import React, { useState } from 'react';
import { profiles as initialProfiles } from '../utils/Constants'; // Assuming profiles are stored in an array named 'profiles'
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileContent = ({ onClose, onSelectProfileImage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isNewAccountOpen, setIsNewAccountOpen] = useState(false);
  const [newAccountDetails, setNewAccountDetails] = useState({
    name: '',
    email: '',
    image: '' // Add default image URL here if needed
  });

  const [profiles, setProfiles] = useState([...initialProfiles]); // Use state to manage profiles

  // Function to handle sign-in
  const handleSignIn = () => {
    // Implement your sign-in logic here
    // For demonstration purposes, let's assume a user is logged in successfully
    setIsLoggedIn(true);
    setUserProfile(profiles[0]); // Set the first profile as the user's profile
  };

  // Function to handle sign-out
  const handleSignOut = () => {
    // Implement your sign-out logic here
    setIsLoggedIn(false);
    setUserProfile(null);
  };

  // Function to handle profile click
  const handleProfileClick = (profile) => {
    setUserProfile(profile); // Set the clicked profile as the user's profile
    onSelectProfileImage(profile.image); // Pass selected profile image URL back to ProfileIcon component
  };

  // Function to handle adding a new account
  const handleAddNewAccount = () => {
    setIsNewAccountOpen(true);
  };

  // Function to handle form submission for adding a new account
  const handleNewAccountSubmit = (event) => {
    event.preventDefault();
    // Add validation if needed
    const newProfile = { ...newAccountDetails };
    setProfiles([...profiles, newProfile]); // Update profiles state with new account
    setIsNewAccountOpen(false);
  };

  // Function to handle file upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewAccountDetails({ ...newAccountDetails, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Settings for the Slider component
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white p-4 border rounded-2xl shadow-md absolute top-24 right-20 w-[300px]">
      <div className="flex justify-between items-center mb-2">
        {/* Conditional rendering based on authentication status */}
        {isLoggedIn ? (
          <>
            <div className="items-center relative">
              {/* Display user's profile image if available */}
              {userProfile && (
                <div>
                  <img src={ProfileRing} alt="Profile Ring" className="rounded-full w-20 h-22 ml-24 absolute" />
                  <img src={userProfile.image} alt="Profile" className="rounded-full w-20 h-20 ml-24" />
                </div>
              )}
              {/* Display user's name if available */}
              {userProfile && <h2 className="text-lg ml-[105px] mt-2">Hi, {userProfile.name}!</h2>}
            </div>
            <button onClick={handleSignOut} className="text-gray-500 hover:text-gray-700 ml-2 absolute top-4">
              Sign Out
            </button>
          </>
        ) : (
          <button onClick={handleSignIn} className="text-gray-500 hover:text-gray-700">
            Sign In
          </button>
        )}
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 absolute top-4 left-[270px]">
          <AiOutlineClose size={18} />
        </button>
      </div>
      <Slider {...settings}>
        {/* Display profiles */}
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col items-center p-2 ml-16">
            <div className="mb-4">
              <img
                src={profile.image} 
                alt="Profile"
                className="rounded-full w-11 h-11 cursor-pointer ml-9"
                onClick={() => handleProfileClick(profile)}
              />
            </div>
            <div >
              <h1 className="font-bold ml-8 text-black" >{profile.name}</h1>
              <p className='text-black'>{profile.email}</p>
            </div>
          </div>
        ))}
      </Slider>
      <br></br>
      <button
        onClick={handleAddNewAccount}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full"
      >
        Add New Account
      </button>
      {/* New account form */}
      {isNewAccountOpen && (
        <form onSubmit={handleNewAccountSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Name"
            value={newAccountDetails.name}
            onChange={(e) => setNewAccountDetails({ ...newAccountDetails, name: e.target.value })}
            required
            className="block w-full border rounded-md py-2 px-3 mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newAccountDetails.email}
            onChange={(e) => setNewAccountDetails({ ...newAccountDetails, email: e.target.value })}
            required
            className="block w-full border rounded-md py-2 px-3 mb-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="block w-full border rounded-md py-2 px-3 mb-2"
          />
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md w-full">
            Add Account
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfileContent;
