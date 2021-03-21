import React from "react"
import {
  FaFacebook,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaInstagram
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.facebook.com/MGstudioFinland">
          <FaFacebook className="social-icon facebook-icon"></FaFacebook>
        </a>
      </li>
      {/* <li>
        <a href="https://twitter.com">
          <FaDribbbleSquare className="social-icon dribble-icon"></FaDribbbleSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li> */}
        <li>
          <a 
          style={{color: '#fcdede'}}
          href="https://www.instagram.com/mgstudiofinland">
            <FaInstagram className="social-icon instagram-icon"></FaInstagram>
          </a>
        </li>
    </ul>
  )
}
export default SocialLinks