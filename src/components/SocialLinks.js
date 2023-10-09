import React from "react";
import { Graphics } from "../assets";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <>
      <div className="flex gap-5 order-1 sm:order-2">
        <Link to={"https://linkedin.com/"} target="_blank">
          <img src={Graphics.Linkedin} alt="Linkedin" />
        </Link>

        <Link to={"https://www.facebook.com/"} target="_blank">
          <img src={Graphics.Facebook} alt="Facebook" />
        </Link>

        <Link to={"https://twitter.com/"} target="_blank">
          <img src={Graphics.Twitter} alt="Twitter" />
        </Link>

        <Link to={"https://www.instagram.com/"} target="_blank">
          <img src={Graphics.Instagram} alt="Instagram" />
        </Link>
      </div>
    </>
  );
};

export default SocialLinks;
