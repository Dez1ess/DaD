import "../../../AbilityDescription.scss";
import Requirements from "../../../../../components/Requirements";

export default function BardWhispersMaster() {
  return (
    <>
      <div className="ab-wrapper">
        <Requirements
          requirementsHeader="Уміння Барда"
          requirements="1-й рівень"
        />
        <p>
          Починаючи з 2 рівня ви можете додавати половину бонусу майстерності,
          округлену в менший бік, до всіх перевірок характеристик, куди цей
          бонус ще не включений.
        </p>
      </div>
    </>
  );
}
