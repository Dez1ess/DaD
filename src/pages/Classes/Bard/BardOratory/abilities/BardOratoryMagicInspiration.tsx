import "../../../AbilityDescription.scss";
import Requirements from "../../../../../components/Requirements";

export default function BardOratoryMagicInspiration() {
  return (
    <>
      <div className="ab-wrapper">
        <Requirements
          requirementsHeader="Уміння Барда"
          requirements="1-й рівень"
        />
        <p>
          Якщо у істоти є кістка Натхнення барда від вас і вона накладає
          заклинання, що відновлює хіти або завдає шкоди, істота може кинути цей
          кубик і вибрати ціль, на яку діє заклинання.
        </p>
        <p>
          Додайте число, що випало на кістці Натхнення барда, як бонус до
          відновлених хітів або завданої шкоди. Після цього кістка Бардське
          натхнення втрачається.
        </p>
      </div>
    </>
  );
}
