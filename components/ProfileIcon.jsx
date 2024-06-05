import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import PopupContent from "./PopupContent";
import ProfileContent from "./ProfileContent";
import Profile from "../assets/IMG_20240124_200816.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null); // State to store the selected profile
  const [selectedProfileImage, setSelectedProfileImage] = useState(null); // State to store the selected profile image

  const handleIconClick = () => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile); // Set the selected profile
    setIsProfileOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
    setSelectedProfile(null); // Clear the selected profile when closing
  };

  return (
    <div className="flex gap-2  ">
    
      <span
        className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/10"
        onClick={handleIconClick}
      >
        <TbGridDots size={22} color="#5f6368" />
      </span>
      <span className="h-9 w-9 relative flex justify-center items-center cursor-pointer" onClick={handleProfileClick}>
        <img className="absolute" src={ProfileRing} alt="Profile Ring" />
        <span className="h-8 w-8 rounded-full overflow-hidden ">
          <img 
            className="h-full w-full object-cover "
            src={selectedProfileImage || Profile} // Display selected profile image if available, otherwise default image
            alt="Profile"
          />
        </span>
      </span>
      {isPopupOpen && <PopupContent onClose={handleClose} />}
      {isProfileOpen && <ProfileContent onClose={handleProfileClose} onSelectProfileImage={setSelectedProfileImage} />} {/* Pass setSelectedProfileImage as prop */}
    </div>
  );
};

export default ProfileIcon;
