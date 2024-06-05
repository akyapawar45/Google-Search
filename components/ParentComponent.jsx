import React, { useState } from "react";
import ProfileContent from "./ProfileContent";
import PopupContent from "./PopupContent";

const ParentComponent = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleProfileClick = () => {
    setActiveComponent("Profile");
  };

  const handlePopupClick = () => {
    setActiveComponent("Popup");
  };

  const handleClose = () => {
    setActiveComponent(null);
  };

  return (
    <div>
      <button onClick={handleProfileClick}>Open Profile</button>
      <button onClick={handlePopupClick}>Open Popup</button>

      {activeComponent === "Profile" && (
        <ProfileContent onClose={handleClose} />
      )}
      {activeComponent === "Popup" && (
        <PopupContent onClose={handleClose} />
      )}
    </div>
  );
};

export default ParentComponent;
