import bgVideo from '../../assets/city-background.mp4'
import "./Home.scss"

const Home = () => {
  return (
    <section id="home">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="overlay">
        <h2>Hi, I'm Vasilis <br />a Junior Web Developer</h2>
        <p>I love coding, experimenting, and building cool things on the web.</p>
        <div className="hero-buttons">
          <a href="/Vasilis-Georgakopoulos-CV.pdf" download>
            Download CV
          </a>
          <a href="#portfolio">View My Work</a>
        </div>
      </div>
    </section>
  )
}

export default Home
