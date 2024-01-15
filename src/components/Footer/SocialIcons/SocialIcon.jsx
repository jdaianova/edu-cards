import "./SocialIcons.css";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <a href="mailto:jdaianova@gmail.com">
        <FaEnvelope size={30} color="white" />
      </a>
      <a
        href="https://www.instagram.com/julia_daianova?igsh=N3d0ODV1bXdpcGw0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={28} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/julia-daianova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={28} color="white" />
      </a>
      <a
        href="https://t.me/IuliiaDaianova"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane size={29} color="white" />
      </a>
    </div>
  );
};

export default SocialIcons;
