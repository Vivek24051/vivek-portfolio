import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Vivek24051" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/vivek-limbachiya-a33a26242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "https://x.com/VivekL24?t=fM-ZNTXk-BKPIljP6AJc6A&s=09" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      )
    })}
  </div>;
};

export default Social;
