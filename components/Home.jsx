import React, { useState, useEffect } from 'react';
import Logo from "../assets/nowruz-2024-6753651837110448-l.webp";
import HomeHeader from "./HomeHeader";
import SearchInput from './SearchInput';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from local storage or set default to false
    return localStorage.getItem('darkMode') === 'true';
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Apply or remove the dark class based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleAddNewAccount = () => {
    window.location.href = 'https://doodles.google/';
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex h-[100vh] flex-col bg-white dark:bg-[#202124] text-[#202124] dark:text-[#e8eaed]">
      <HomeHeader />
      <div className="absolute top-4 right-64">
        <button
          onClick={toggleDarkMode}
          className="flex items-center px-2 py-1 bg-[#f8f9fa] dark:bg-[#3c4043] text-[12px] font-bold rounded-full border-[#f8f9fa] dark:border-[#3c4043] hover:shadow-c2 transition duration-300"
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 000 16 8 8 0 100-16zM9 12V8h2v4H9z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 000 16 8 8 0 100-16zM9 12V8h2v4H9z" />
            </svg>
          )}
          <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="Nowruz 2024" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] dark:text-[#e8eaed] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] dark:bg-[#3c4043] text-sm rounded-md border-[#f8f9fa] dark:border-[#3c4043] hover:shadow-c2">Google Search</button>
            <button onClick={handleAddNewAccount} className="h-9 px-4 bg-[#f8f9fa] dark:bg-[#3c4043] text-sm rounded-md border-[#f8f9fa] dark:border-[#3c4043] hover:shadow-c2">I'm Feeling Lucky</button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#3c4043] dark:text-[#e8eaed] text-sm">Google offered in:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2 text-[#1a0dab] dark:text-[#8ab4f8] text-sm">
              <a href="https://www.google.co.in/" className="hover:underline">हिन्दी</a>
              <a href="https://www.google.co.in/" className="hover:underline">বাংলা</a>
              <a href="https://www.google.co.in/" className="hover:underline">తెలుగు</a>
              <a href="https://www.google.co.in/" className="hover:underline">मराठी</a>
              <a href="https://www.google.co.in/" className="hover:underline">தமிழ்</a>
              <a href="https://www.google.co.in/" className="hover:underline">ગુજરાતી</a>
              <a href="https://www.google.co.in/" className="hover:underline">ಕನ್ನಡ</a>
              <a href="https://www.google.co.in/" className="hover:underline">മലയാളം</a>
              <a href="https://www.google.co.in/" className="hover:underline">ਪੰਜਾਬੀ</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
