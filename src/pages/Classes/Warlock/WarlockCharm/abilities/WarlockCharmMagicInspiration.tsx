import "../../../AbilityDescription.scss";
import Requirements from "../../../../../components/Requirements";

export default function WarlockCharmMagicInspiration() {
  return (
    <>
      <div className="ab-wrapper">
        <Requirements
          requirementsHeader="Уміння Варвара"
          requirements="1-й рівень"
        />
        <p>
          Якщо у істоти є кістка Натхнення Варвара від вас і вона накладає
          заклинання, що відновлює хіти або завдає шкоди, істота може кинути цей
          кубик і вибрати ціль, на яку діє заклинання.
        </p>
        <p>
          Додайте число, що випало на кістці Натхнення Варвара, як бонус до
          відновлених хітів або завданої шкоди. Після цього кістка Бардське
          натхнення втрачається.
        </p>
      </div>
    </>
  );
}
