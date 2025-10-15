import { useEffect, useState } from "react"
import "./Navigation.scss"

const Navigation = () => {

  const [active,setActive] = useState('home')
  const [isScrolled,setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
            <span>v</span>
            <span>&ndash;</span>
            <span className="last-name">georgakopoulos</span>
        </div>
      <div className="nav-right">
        <ul>
          <li className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}><a href="#home">home</a></li>
          <li className={active === 'about' ? 'active' : ''} onClick={() =>setActive('about')}><a href="#about">about</a></li>
          <li className={active === 'portfolio' ? 'active' : ''} onClick={() =>setActive('portfolio')}><a href="#portfolio">portfolio</a></li>
          <li className={active === 'contact' ? 'active' : ''} onClick={() =>setActive('contact')}><a href="#contact">contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation