import "../SelectBox.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp);
library.add(faAngleDown);

export default function ClassSelectBox({
  first: FirstComponent,
  second: SecondComponent,
  third: ThirdComponent,
  fourth: FourthComponent,
  fifth: FifthComponent,
  sixth: SixthComponent,
  seventh: SeventhComponent,
  eighth: EighthComponent,
  character,
  initialSelectedOption, 
}: {
  first: React.ComponentType<any>;
  second: React.ComponentType<any>;
  third: React.ComponentType<any>;
  fourth: React.ComponentType<any>;
  fifth: React.ComponentType<any>;
  sixth: React.ComponentType<any>;
  seventh: React.ComponentType<any>;
  eighth: React.ComponentType<any>;
  character: string;
  initialSelectedOption: number; 
}) {
  const [select, setSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(
    initialSelectedOption 
  );

  const handleSelect = () => {
    setSelect((prevState) => !prevState);
  };

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    setSelect(false);
  };

  const renderOption = (optionComponent: string, optionNumber: number) => (
    <div
      key={optionNumber}
      className={`option option-${optionNumber} ${
        selectedOption === optionNumber ? "selected" : ""
      }`}
    >
      <p onClick={() => handleOptionClick(optionNumber)}>{optionComponent}</p>
    </div>
  );

  const getSelectedOptionText = () => {
    switch (selectedOption) {
      case 1:
        return "(Базова)";
      case 2:
        return "(Доблесті)";
      case 3:
        return "(Знань)";
      case 4:
        return "(Мечів)";
      case 5:
        return "(Чарівності)";
      case 6:
        return "(Шепотів)";
      case 7:
        return "(Творення)";
      case 8:
        return "(Красномовства)";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="classes-wrapper">
        <div className="select-box">
          <div onClick={handleSelect} className="select-current">
            <p>
              <span>Колегії {character}</span>
              <span>{getSelectedOptionText()}</span>
            </p>
            <FontAwesomeIcon
              icon={["fas", `${select ? "angle-down" : "angle-up"}`]}
              rotation={180}
              size="sm"
            />
          </div>
          <div
            style={{ display: select ? "flex" : "none" }}
            className="select-options"
          >
            {renderOption("Базова колегія", 1)}
            {renderOption("Колегія Доблесті", 2)}
            {renderOption("Колегія Знань", 3)}
            {renderOption("Колегія Мечів", 4)}
            {renderOption("Колегія Чарівності", 5)}
            {renderOption("Колегія Шепотів", 6)}
            {renderOption("Колегія Творення", 7)}
            {renderOption("Колегія Красномовства", 8)}
          </div>
        </div>
      </div>

      <FirstComponent render={selectedOption === 1} />
      <SecondComponent render={selectedOption === 2} />
      <ThirdComponent render={selectedOption === 3} />
      <FourthComponent render={selectedOption === 4} />
      <FifthComponent render={selectedOption === 5} />
      <SixthComponent render={selectedOption === 6} />
      <SeventhComponent render={selectedOption === 7} />
      <EighthComponent render={selectedOption === 8} />
    </>
  );
}
