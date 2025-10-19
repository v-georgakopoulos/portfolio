import img from "../../assets/profile-photo.jpg";
import "./Portfolio.scss";

const projectsData = [
  {
    id: 1,
    image: img,
    title: "Portfolio Website",
    shortDesc: "A modern portfolio built with React and SCSS.",
    githubLink: "https://github.com/v-georgakopoulos",
    liveLink: "https://github.com/v-georgakopoulos",
  },
  {
    id: 2,
    image: img,
    title: "E-Commerce App",
    shortDesc: "A React + Firebase e-commerce application.",
    githubLink: "https://github.com/v-georgakopoulos",
    liveLink: "https://github.com/v-georgakopoulos",
  },
  {
    id: 3,
    image: img,
    title: "Weather App",
    shortDesc: "A weather forecast app using OpenWeather API.",
    githubLink: "https://github.com/v-georgakopoulos",
    liveLink: "https://github.com/v-georgakopoulos",
  },
  // {
  //   id: 4,
  //   image: img,
  //   title: "Weather App",
  //   shortDesc: "A weather forecast app using OpenWeather API.",
  //   githubLink: "https://github.com/v-georgakopoulos",
  //   liveLink: "https://github.com/v-georgakopoulos",
  // },
  // {
  //   id: 5,
  //   image: img,
  //   title: "Weather App",
  //   shortDesc: "A weather forecast app using OpenWeather API.",
  //   githubLink: "https://github.com/v-georgakopoulos",
  //   liveLink: "https://github.com/v-georgakopoulos",
  // },
  // {
  //   id: 6,
  //   image: img,
  //   title: "Weather App",
  //   shortDesc: "A weather forecast app using OpenWeather API.",
  //   githubLink: "https://github.com/v-georgakopoulos",
  //   liveLink: "https://github.com/v-georgakopoulos",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>

      <div className="portfolio-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="portfolio-item">
            <div className="portfolio-card">
              <img src={project.image} alt={project.title} className="card-image" />
              <div className="card-overlay">
                <h3>{project.title}</h3>
                <p>{project.shortDesc}</p>
              </div>
            </div>

            <div className="card-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                See Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
