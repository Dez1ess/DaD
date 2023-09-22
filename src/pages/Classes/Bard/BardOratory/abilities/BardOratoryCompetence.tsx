import "../../../AbilityDescription.scss";
import Requirements from "../../../../../components/Requirements";

export default function BardOratoryCompetence() {
  return (
    <>
      <div className="ab-wrapper">
        <Requirements
          requirementsHeader="Уміння Барда"
          requirements="1-й рівень"
        />
        <p>
          На третьому рівні виберіть 2 навички з тих, якими ви володієте. Ваш
          бонус майстерності для цих навичок подвоюється. На 10 рівні ви можете
          вибрати ще 2 навички й отримати для них цю перевагу.
        </p>
      </div>
    </>
  );
}
