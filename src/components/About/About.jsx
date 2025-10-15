import Slider from "../Slider/Slider"
import profileImage from "../../assets/about-image.jpg"
import "./About.scss"

const About = () => {
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
          <div className="about-box">
            <p>I'm starting a new journey as a web developer,
                and I already love what I do.
                I approach every project with passion and dedication.
                I enjoy growth and self-improvement, 
                and my years in sports
                have taught me how to be a great team player 
                while also standing out through hard work and commitment.</p>
          </div>
          <div className="about-box">
            <Slider/>
          </div>
          <div className="about-box">
            <p>My goals are to keep growing as a developer. 
              I already work with React, CSS, and TypeScript, 
              but my main goal is to become a full-stack developer. 
              I want to join a creative team where I can contribute,
              learn, and evolve together with others.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
