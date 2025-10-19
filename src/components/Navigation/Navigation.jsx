import { useEffect, useState } from "react"
import "./Navigation.scss"

const Navigation = () => {

  const [active, setActive] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <span>v</span>
        <span>&ndash;</span>
        <span className="last-name">georgakopoulos</span>
      </div>
      <div className="nav-right">

        <div className="mobile-nav">
          <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

        {
          menuOpen && (
            <ul className="mobile-menu">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          )
        }

        <ul>
          <li className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}><a href="#home">home</a></li>
          <li className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')}><a href="#about">about</a></li>
          <li className={active === 'portfolio' ? 'active' : ''} onClick={() => setActive('portfolio')}><a href="#portfolio">portfolio</a></li>
          <li className={active === 'contact' ? 'active' : ''} onClick={() => setActive('contact')}><a href="#contact">contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation