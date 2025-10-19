import { Fragment } from "react"
import imageWeb from "../../assets/web-cert.png"
import imageReact from "../../assets/react-cert.png"
import imageCss from "../../assets/css-cert.png"
import "./CardsSlider.scss"

const certificates = [
    {
        id: 1,
        image: imageWeb,
    },
    {
        id: 2,
        image: imageReact,
    },
    {
        id: 3,
        image: imageCss,
    },
];

const CardsSlider = () => {
    return (
        <div className="wrapper">
            <div className="container">
                {certificates.map((item, index) => (
                    <Fragment key={item.id}>
                        <input
                            type="radio"
                            name="slide"
                            id={`c${item.id}`}
                            defaultChecked={index === 0}
                        />
                        <label
                            htmlFor={`c${item.id}`}
                            className="card"
                            style={{ backgroundImage: `url(${item.image})`, filter: "grayscale(100%)" }}
                        >
                            <div className="row">
                                <div className="icon">{item.id}</div>
                            </div>
                        </label>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default CardsSlider
