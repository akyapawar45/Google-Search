import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query || "");
    const [isListening, setIsListening] = useState(false);
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    };

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) {
            console.warn("Web Speech API is not supported by this browser.");
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSearchQuery(transcript);
            setIsListening(false);
            navigate(`/${transcript}/${1}`);
        };
        recognition.onerror = (event) => {
            console.error("Speech recognition error", event);
            setIsListening(false);
        };
        recognition.onend = () => setIsListening(false);

        if (isListening) {
            recognition.start();
        }

        return () => {
            recognition.stop();
        };
    }, [isListening, navigate]);

    const handleMicClick = () => {
        setIsListening(true);
    };

    const handleImageClick = () => {
        window.open('https://www.google.com/imghp?hl=en', '_blank');
    };

    return (
        <div>
            <div className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1es] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
                <AiOutlineSearch size={18} color="#9aa0a6" />
                <input
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                    value={searchQuery}
                    autoFocus
                    className="grow outline-0 text-black/[0.87] border-none"
                />

                <div className="flex items-center gap-3">
                    {searchQuery && (
                        <IoMdClose
                            size={24}
                            color="#70757a"
                            className="cursor-pointer"
                            onClick={() => setSearchQuery("")}
                        />
                    )}
                    <img
                        className={`h-6 w-6 cursor-pointer ${isListening ? 'animate-pulse' : ''}`}
                        src={MicIcon}
                        onClick={handleMicClick}
                    />
                    <img
                        className="h-6 w-6 cursor-pointer"
                        src={ImageIcon}
                        onClick={handleImageClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
