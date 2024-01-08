import "./SocialIcons.css";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="SocialIcons"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <FaEnvelope size={30} color="white" />
      <FaInstagram size={28} color="white" />
      <FaLinkedin size={28} color="white" />
      <FaTelegramPlane size={29} color="white" />
    </div>
  );
};

export default SocialIcons;
