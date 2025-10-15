import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social-icons">
                <a href="mailto:v.georgakopoulos.dev@outlook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://github.com/v-georgakopoulos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/vasilisgeorgakopoulos/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <p>© 2025 Desinged by Vasilis Georgakopoulos</p>
        </div>
    )
}

export default Footer
