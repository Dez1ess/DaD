import TopNavBar from "../../../../components/Navigation/TopNavBar";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestiaryBottomNavBar from "../../../../components/Navigation/BestiaryBottomNavBar";

import drakeImg from "../../../../assets/BestiaryCardImages/drakeImg1.svg";

import "../../../../components/Slider.scss";

export default function DrakeCompanionImg() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: "#000", opacity: "0.4" }}>
        Осно...
      </Link>
      <span className="vertical-split">|</span>
      <Link to="/Bestiary" style={{ color: "#000", opacity: "0.4" }}>
        Бесті...
      </Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: "#000", pointerEvents: "none" }}>
        Дрей...
      </Link>
    </>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <TopNavBar folder={linkFolders} />
      <BestiaryBottomNavBar
        path1="/DrakeCompanion"
        path2="/DrakeCompanionImg"
      />
      <div className="overall-slider-wrapper">
        <div className="img-wrapper">
          <div className="slider-wrapper">
            <div className="slider">
              <Slider {...settings}>
                <div>
                  <img src={drakeImg} alt="Slide 1" />
                </div>
                <div>
                  <img src={drakeImg} alt="Slide 2" />
                </div>
                <div>
                  <img src={drakeImg} alt="Slide 3" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
