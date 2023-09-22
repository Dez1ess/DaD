import "../../../AbilityDescription.scss";

export default function WarlockValorEquipment() {
  return (
    <>
      <div className="ab-wrapper">
        <p>
          Ви починаєте з таким спорядженням на додаток до спорядження,
          отриманого за вашу передісторію:
        </p>
        <ul>
          <li>
            <span>рапіра</span> , <span>довгий меч</span> або будь-яка проста
            зброя
          </li>
          <li>
            <span>набір дипломата</span> або <span>набір артиста</span>{" "}
          </li>
          <li>
            <span>лютня</span> або будь-який інший музичний інструмент
          </li>
          <li>інструмент</li>
          <li>
            <span>шкіряний обладунок</span> і <span>кинджал</span>
          </li>
        </ul>
        <p>
          Як альтернативу базовому спорядженню, ви можете отримати 5к4 × 10 зм.
          монети і вибрати собі спорядження самостійно.
        </p>
      </div>
    </>
  );
}
