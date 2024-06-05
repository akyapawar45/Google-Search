import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex gap-3">
        {/* Gmail link */}
        <Link to="https://mail.google.com/" className="text-[13px] text-whi line-height hover:underline cursor-pointer">Gmail</Link>
        {/* Images link */}
        <Link to="https://www.google.com/imghp" className=" text-[13px] line-height hover:underline cursor-pointer">Images</Link>
      </div>
      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
