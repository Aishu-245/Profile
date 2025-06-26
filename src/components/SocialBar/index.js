import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa'
import './index.css'

const SocialBar = () => (
  <div className="social-bar">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
      <FaDribbble />
    </a>
  </div>
)

export default SocialBar
