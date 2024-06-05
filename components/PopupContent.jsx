import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import g1 from "../assets/meet.png";
import g2 from "../assets/docs.png";
import g3 from "../assets/chrome.png";
import g4 from "../assets/google-drive.png";
import g10 from "../assets/google-pay.png";
import g11 from "../assets/google-drive.png";
import g13 from "../assets/spotify.png";
import g5 from "../assets/google-play.png";
import g6 from "../assets/google-maps.png";
import g7 from "../assets/search.png";
import g8 from "../assets/communication.png";
import g9 from "../assets/google-calendar.png";

const PopupContent = ({ onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    { src: g1, alt: "Meet", link: "https://meet.google.com" },
    { src: g2, alt: "Docs", link: "https://docs.google.com" },
    { src: g3, alt: "Chrome", link: "https://www.google.com/chrome/" },
    { src: g4, alt: "Google Drive", link: "https://drive.google.com" },
    { src: g5, alt: "Google Play", link: "https://play.google.com" },
    { src: g6, alt: "Google Maps", link: "https://maps.google.com" },
    { src: g7, alt: "Search", link: "https://www.google.com" },
    { src: g8, alt: "Communication", link: "https://workspace.google.com/products/communication/" },
    { src: g9, alt: "Google Calendar", link: "https://calendar.google.com" },
    { src: g10, alt: "Google Pay", link: "https://pay.google.com" },
    { src: g11, alt: "Google Drive Duplicate", link: "https://drive.google.com" },
    { src: g13, alt: "Spotify", link: "https://open.spotify.com/" },
  ];

  return (
    <div className="bg-white p-4 border rounded-2xl shadow-md absolute top-24 right-20 w-[90vw] max-w-[400px] h-36">
      <div className="flex justify-between items-center mb-2">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <AiOutlineClose size={20} />
        </button>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <Link to={image.link}>
              <img src={image.src} alt={image.alt} className="h-[40px] w-[40px] object-cover mx-auto cursor-pointer" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopupContent;
