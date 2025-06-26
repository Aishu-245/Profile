import {Component} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import SocialBar from './components/SocialBar'
import './App.css'

class App extends Component {
  state = {
    darkMode: true,
    activePage: 'home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  navigateTo = page => {
    this.setState({activePage: page})
  }

  render() {
    const {darkMode, activePage} = this.state
    return (
      <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
        <SocialBar />.
        <Header
          toggleTheme={this.toggleTheme}
          navigateTo={this.navigateTo}
          isDarkMode={darkMode}
        />
        {activePage === 'home' && <Home />}
        {activePage === 'about' && <About />}
      </div>
    )
  }
}

export default App
