import { Carousel } from "react-bootstrap";
import webImg from "../../assets/web-cert.png";
import reactImg from "../../assets/react-cert.png";
import cssImg from "../../assets/css-cert.png";

import "./Slider.scss"

const certificates = [
  { id: 1, title: "Web Developer", image: webImg },
  { id: 2, title: "React Developer", image: reactImg },
  { id: 3, title: "CSS", image: cssImg },
];

const Slider = () => {
  return (
    <Carousel className="carousel" fade interval={3000} pause="hover">
      {certificates.map((certificate) => (
        <Carousel.Item className="carousel-item" key={certificate.id}>
          <img
            src={certificate.image}
            alt={certificate.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
