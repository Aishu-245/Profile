import React from 'react'
import {FaSmile} from 'react-icons/fa'

class Home extends React.Component {
  render() {
    return (
      <div className="hero">
        <span className="badge">Hello!</span>
        <h2>
          I'm <span className="name">Anish</span> <FaSmile />
        </h2>
        <p>UX/UI Designer & Front End Developer & Thinker</p>
        <p className="location">Based in India</p>
        <div className="buttons">
          <button className="btn download">Download CV</button>
          <button className="btn contact">Get In Touch</button>
        </div>
        <div className="profile-image-container">
          <div className="yellow-blob" />
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            className="profile-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
