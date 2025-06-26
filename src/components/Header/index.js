import {Component} from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'

class Header extends Component {
  render() {
    const {toggleTheme, navigateTo, isDarkMode} = this.props

    return (
      <header className="header">
        <h1>
          <span role="img" aria-label="star">
            ⭐
          </span>
          ANISH KUMAR SINHA
        </h1>
        <nav>
          <button  type = "button"onClick={() => navigateTo('home')}>Home</button>
          <button type = "button" onClick={() => navigateTo('about')}>About</button>
          <span>Resume</span>
          <span>Skills</span>
          <span>Projects</span>
          <span>Contact</span>
          <button type = "button" className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>
    )
  }
}

export default Header
