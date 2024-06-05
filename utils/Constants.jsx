import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";
import p1 from '../assets/IMG_20240124_200816.jpg'
import p2 from '../assets/IMG-20220428-WA0000.jpg'
import p3 from '../assets/New Project 15 [1F3B4EC].png'
export const menu = [
    { name: "All", icon: <GoSearch /> },
    { name: "Images", icon: <BsImage size={14} /> },
    { name: "News", icon: <BiNews /> },
    { name: "Videos", icon: <RiVideoLine /> },
    { name: "Shopping", icon: <SlTag size={14} /> },
];
export const profiles = [
    { 
        name: 'Akash', 
        email: 'akash@gmail.com', 
        image: p1
    },
    { 
        name: 'John', 
        email: 'john@gmail.com', 
        image: p2// Placeholder image URL
    },
    { 
        name: 'Emily', 
        email: 'emily@gmail.com', 
        image: p3 // Placeholder image URL
    }
];

export const quickLinks = [
    "About",
    "Advertising",
    "Business",
    "How Search works",
];
export const settingMenu = ["Privacy", "Terms", "Settings"];

export const pagination = [
    { page: 1, startIndex: 1 },
    { page: 2, startIndex: 11 },
    { page: 3, startIndex: 21 },
    { page: 4, startIndex: 31 },
    { page: 5, startIndex: 41 },
    { page: 6, startIndex: 51 },
    { page: 7, startIndex: 61 },
    { page: 8, startIndex: 71 },
    { page: 9, startIndex: 81 },
    { page: 10, startIndex: 91 },
];
