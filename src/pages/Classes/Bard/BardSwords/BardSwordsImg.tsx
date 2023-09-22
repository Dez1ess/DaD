import ClassesBottomNavBar from "../../../../components/Navigation/ClassesBottomNavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bard from "../Bard-img-1.svg";

import "../../../../components/Slider.scss";

export default function BardSwordsImg({ render }: { render: boolean }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return render ? (
    <>
      <ClassesBottomNavBar
        path1="/BardAbilities?option=4"
        path2="/BardDescriptions?option=4"
        path3="/BardSpells?option=4"
        path4="/BardImgs?option=4"
      />
      <div className="overall-slider-wrapper">
        <div className="img-wrapper">
          <div className="slider-wrapper">
            <div className="slider">
              <Slider {...settings}>
                <div>
                  <img src={bard} alt="Slide 1" />
                </div>
                <div>
                  <img src={bard} alt="Slide 2" />
                </div>
                <div>
                  <img src={bard} alt="Slide 3" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
