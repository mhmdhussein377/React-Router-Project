import React from 'react'
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillFacebook, AiFillTwitterSquare} from "react-icons/ai";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsInstagram />
        <AiFillFacebook />
        <AiFillTwitterSquare />
        <BsLinkedin />
      </div>
      <p>&copy; pedrotechpizza.com</p>
    </div>
  );
}

export default Footer