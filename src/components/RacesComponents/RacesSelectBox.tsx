import "../SelectBox.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp);
library.add(faAngleDown);

export interface Option {
  label: string;
  value: React.ReactNode;
}

interface RacesSelectBoxProps {
  options: Option[];
  character: string;
}

export default function RacesSelectBox({
  options,
  character
}: RacesSelectBoxProps) {
  const [select, setSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);

  const handleSelect = () => {
    setSelect((prevSelect) => !prevSelect);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setSelect(false);
  };

  const renderOption = (option: Option, index: number) => (
    <div
      key={index}
      className={`option ${selectedOption === option ? "selected" : ""}`}
    >
      <p onClick={() => handleOptionClick(option)}>{option.label}</p>
    </div>
  );
  

  const getSelectedOptionText = () => {
    let words = selectedOption?.label.split(' ');
    words?.shift(); 

    if (selectedOption) {
      return "(" + words?.join(' ') + ")";
    }
    return "";
  };

  return (
    <>
      <div className="select-box races">
        <div onClick={handleSelect} className="select-current">
          <p>
            <span>Різновидності {character}</span>
            <span id="races-placeholder"><span style={{fontWeight: "600"}}>{getSelectedOptionText()}</span></span>
          </p>
          <FontAwesomeIcon
            icon={["fas", `${select ? "angle-down" : "angle-up"}`]}
            rotation={180}
            size="sm"
          />
        </div>
        <div style={{ display: select ? "flex" : "none" }} className="select-options">
          {options.map(renderOption)}
        </div>
      </div>
      {selectedOption?.value}
    </>
  );
}
