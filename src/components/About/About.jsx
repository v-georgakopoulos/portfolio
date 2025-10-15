import { useIntersectionObserver } from "../../utils/intersectionObserver"

import Slider from "../Slider/Slider"
import profileImage from "../../assets/about-image.jpg"

import "./About.scss"

const About = () => {
    const isMobile = window.innerWidth <= 1025;
    useIntersectionObserver('#about .phrase', { threshold: isMobile ? 0.5 : 1 }, 'active');
  return (
    <section id="about">
      <div className="about-title">
        <h2>About</h2>
      </div>
      <div className="about-container">
        <div className="about-left">
          <div className="image-box">
            <img src={profileImage} alt="profile-image" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-container">
            <div className="about-box">
              <p>
                <span className="phrase">/I'm starting a new journey as a web developer,</span>
                <span className="phrase">and I already love what I do.</span>
                <span className="phrase">I approach every project with passion and dedication.</span>
                <span className="phrase">I enjoy growth and self-improvement,</span>
                <span className="phrase">and my years in sports</span>
                <span className="phrase">have taught me how to be a great team player</span>
                <span className="phrase">while also standing out through hard work and commitment.</span>
              </p>
            </div>
            <div className="about-box">
              <Slider />
            </div>
            <div className="about-box">
              <p>
                <span className="phrase">My goals are to keep growing as a developer.</span>
                <span className="phrase">I already work with React, CSS, and TypeScript,</span>
                <span className="phrase">but my main goal is</span> 
                <span className="phrase">to become a full-stack developer.</span>
                <span className="phrase">I want to join a creative team</span>
                <span className="phrase">where I can contribute,</span>
                <span className="phrase">learn, and evolve together with others.</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
