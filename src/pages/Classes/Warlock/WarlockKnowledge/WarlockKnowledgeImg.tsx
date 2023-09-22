import ClassesBottomNavBar from "../../../../components/Navigation/ClassesBottomNavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Warlock from "../../Bard/Bard-img-1.svg";

import "../../../../components/Slider.scss";

export default function WarlockKnowledgeImg({ render }: { render: boolean }) {
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
        path1="/WarlockAbilities?option=3"
        path2="/WarlockDescriptions?option=3"
        path3="/WarlockSpells?option=3"
        path4="/WarlockImgs?option=3"
      />
      <div className="overall-slider-wrapper">
        <div className="img-wrapper">
          <div className="slider-wrapper">
            <div className="slider">
              <Slider {...settings}>
                <div>
                  <img src={Warlock} alt="Slide 1" />
                </div>
                <div>
                  <img src={Warlock} alt="Slide 2" />
                </div>
                <div>
                  <img src={Warlock} alt="Slide 3" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
