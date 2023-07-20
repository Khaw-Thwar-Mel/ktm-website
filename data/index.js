import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100091575511271",
  },
  {
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/khaw_thwar_mel/",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/khaw-thwar-mel/",
  },
];

export const contactChannel = [
  {
    data: "09442469774",
    icon: <FaPhoneAlt />,
    link: "tel:+959442469774",
  },
  {
    data: "khawthwarmel@gmail.com",
    icon: <MdEmail />,
    link: "mailto:khawthwarmel@gmail.com",
  },
];

export const navigationLinks = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/aboutus",
    text: "About Us",
  },
  {
    link: "/blogs",
    text: "Blogs",
  },
];
