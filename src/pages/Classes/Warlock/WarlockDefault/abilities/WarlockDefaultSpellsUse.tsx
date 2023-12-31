import "../../../AbilityDescription.scss";
import Requirements from "../../../../../components/Requirements";

export default function WarlockDefaultSpellsUse() {
  return (
    <>
      <div className="ab-wrapper">
        <Requirements
          requirementsHeader="Уміння Варвара"
          requirements="1-й рівень"
        />
        <p>
          Ви навчилися змінювати тканину реальності відповідно до вашої волі та
          музики. Ваші заклинання є частиною вашого великого репертуару; це
          магія, якій ви знайдете застосування в будь-якій ситуації.
        </p>
        <p className="subhead">Змови</p>
        <p>
          Ви знаєте дві змови зі списку доступних для Варвара на ваш вибір. При
          досягненні більш високих рівнів ви вивчите нові, відповідно до колонки
          "відомі змови".
        </p>
        <p className="subhead">Осередки заклинань</p>
        <p>
          Таблиця показує, скільки осередків заклинань у вас є для заклинань 1
          та інших рівнів. Для використання заклинань Варвара ви повинні
          витратити осередок відповідного рівня або рівня, що перевищує його. Ви
          відновлюєте всі витрачені комірки наприкінці тривалого відпочинку.
        </p>
        <p>
          Наприклад, якщо ви знаєте заклинання 1 рівня лікування ран, і у вас є
          комірки 1 і 2 рівнів, ви можете використовувати його за допомогою
          будь-якої з цих комірок.
        </p>
        <p className="subhead">Відомі заклинання першого і вищих рівнів</p>
        <p>
          Ви знаєте чотири заклинання 1 рівня на свій вибір зі списку доступних
          барду.
        </p>
        <p>
          Колонка "відомі заклинання" показує, коли ви зможете вивчити нові
          заклинання. Рівень заклинань не повинен перевищувати рівень найвищої
          наявної у вас комірки заклинань.
        </p>
        <p>
          Наприклад, коли ви досягнете 3 рівня в цьому класі, ви можете вивчити
          одне нове заклинання 1 або 2 рівня. Крім того, коли ви отримуєте новий
          рівень у цьому класі, ви можете одне з відомих вам заклинань Варвара
          замінити на інше зі списку Варвара, рівень якого теж повинен
          відповідати наявним осередкам заклинань.
        </p>
        <p className="subhead">Базова характеристика заклинань</p>
        <p>
          При накладанні заклинань бард використовує свою <b>Харизму</b>. Ваша
          магія походить від сердечності та душевності, яку ви вкладаєте у
          виконання музики та виголошення промов.
        </p>
        <p>
          Ви використовуєте <b>Харизму</b> у випадках, коли заклинання
          посилається на базову характеристику.
        </p>
        <p>
          Крім того, ви використовуєте <b>Харизму</b> при визначенні Сл
          спасбросков від ваших заклинань, і при кидку атаки заклинаннями.
        </p>
        <p>
          <b>Сл спасброска</b> = 8 + бонус майстерності + модифікатор{" "}
          <b>Харизми</b>
        </p>
        <p>
          <b>Модифікатор кидка атаки</b> = бонус майстерності + модифікатор{" "}
          <b>Харизми</b>
        </p>
        <p className="subhead">Виконання ритуалів</p>
        <p>
          Ви можете виконати будь-яке відоме вам заклинання Варвара як ритуал,
          якщо заклинання дозволяє це.
        </p>
        <p className="subhead">Фокусування заклинання</p>
        <p>
          Ви можете використовувати ваш музичний інструмент як фокусування для
          ваших заклинань Варвара.
        </p>
      </div>
    </>
  );
}
