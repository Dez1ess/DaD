import "../../../AbilityDescription.scss";
import Requirements from "../../../../../components/Requirements";

export default function WarlockWhisperstBuff() {
  return (
    <>
      <div className="ab-wrapper">
        <Requirements
          requirementsHeader="Уміння Варвара"
          requirements="1-й рівень"
        />
        <p>
          При досягненні 4, 8, 12, 16 і 19 рівнів ви можете підвищити значення
          однієї з ваших характеристик на 2, або двох характеристик на 1, або
          вибрати рису. Як зазвичай, значення характеристики при цьому не
          повинно перевищувати 20.
        </p>
      </div>
    </>
  );
}
