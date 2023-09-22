import TopNavBar from "../../../../components/Navigation/TopNavBar";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RacesBottomNavBar from "../../../../components/Navigation/RacesBottomNavBar";

import "../../../../components/Slider.scss";

import aarakokr from "../../../../assets/RaceImages/RaceCardImages/aarakokr_photo.svg";

export default function AasimarImg() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: "#000", opacity: "0.4" }}>
        Осно...
      </Link>
      <span className="vertical-split">|</span>
      <Link to="/Races" style={{ color: "#000", opacity: "0.4" }}>
        Раси
      </Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: "#000", pointerEvents: "none" }}>
        Ааракокра
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
      <RacesBottomNavBar
        path1_1="/Aasimar_EV"
        path1_2="/Aasimar_MPMM"
        path2="/Aasimar_descr"
        path3="/AasimarrImg"
      />
      <div>
        <div className="overall-slider-wrapper">
          <div className="img-wrapper">
            <div className="slider-wrapper">
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <img src={aarakokr} alt="Slide 1" />
                  </div>
                  <div>
                    <img src={aarakokr} alt="Slide 2" />
                  </div>
                  <div>
                    <img src={aarakokr} alt="Slide 3" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
