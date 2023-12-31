import '../RaceCard_descr.scss'
import TopNavBar from '../../../../components/Navigation/TopNavBar'
import RacesBottomNavBar from '../../../../components/Navigation/RacesBottomNavBar'
import { Link } from 'react-router-dom'

export default function AutoDwarf_descr() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: '#000', opacity: '0.4' }}>Осно...</Link>
      <span className="vertical-split">|</span>
      <Link to="/Races" style={{ color: '#000', opacity: '0.4' }}>Раси</Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: '#000', pointerEvents: 'none' }}>Автогном</Link>
    </>
  )

  return (
    <>
    <TopNavBar folder={linkFolders} />
    <RacesBottomNavBar
        path1_1="/AutoDwarf_AAG"
        path1_2="/AutoDwarf_AAG"
        path2="/AutoDwarf_descr"
        path3="/AutoDwarfImg"
      />
      <div className="wrapper descr">
        <p>Автогноми, які живуть в ізоляції низько в горах на вершинах найвищих дерев, звані іноді "пташиним народом", викликають страх і здивування. Багато ааракокри навіть не є уродженцями Матеріального Плану. Вони родом зі світу, що знаходиться дуже далеко - з безкрайніх просторів Стихійного Плану Повітря. Це іммігранти, біженці, розвідники і дослідники, а їхні форпости слугують їм плацдармом у невідомому і чужому світі.</p>
        <p><b>Рука і нога - майже непомітні. </b>Із землі ааракокри виглядають як великі птахи. Тільки коли вони спускаються на свої сідала на гілках або ходять землею, розкривається їхній гуманоїдний вигляд. Стоячи прямо, ааракокра може досягати 5 футів заввишки. У них довгі, тонкі ноги, що закінчуються гострими пазурами. Їхні тіла вкриті пір'ям. Колір їхнього оперення зазвичай означає положення в племені. У чоловіків пір'я яскраво пофарбоване в червоний, помаранчевий або жовтий кольори. У жінок же кольори більш приглушені, як правило, це коричневий або сірий. Їхні пташині голови зовні нагадують гібрид папуги й орла з варіаціями, характерними для різних племен.</p>
        <p><b>Хранителі дрібних насінин. </b>Найкомфортніше ааракокри почуваються в небі. Вони можуть проводити години в повітрі, а деякі навіть і дні, розправляючи крила і дозволяючи висхідним потокам теплого повітря тримати їх у небесах. У битві вони показують усі свої здібності динаміки й акробатики, рухаючись із неймовірною швидкістю та витонченістю, накидаючись зі зброєю або виставленими вперед кігтями на супротивника, а потім відлітаючи назад.</p>
        <p>Автогном, який одного разу побільшав, помер. На своєму рідному плані вони можуть літати протягом кількох днів або навіть місяців, приземляючись тільки щоб відкласти яйця і нагодувати своїх пташенят, після чого вирушають назад у небеса.</p>
        <p>Ті, хто потрапив на Матеріальний План, вважають це місце дивним. Вони іноді забувають або просто ігнорують вертикальні відстані, а до народів, змушених жити і працювати на землі, вони не відчувають нічого, крім жалю.</p>
        <p><b>Гномові особливості. </b>Подібність ааракокр і птахів не обмежується лише фізичною. Багато ааракокри мають манеру поведінки як у звичайнісіньких птахів. Вони скрупульозно доглядають за своїм пір'ям, чистять його і вичісують "пасажирів", яких могли підхопити. Коли вони все-таки спускаються з небес, то вважають за краще робити це поруч із водоймами, де вони можуть ловити рибу і купатися самі.</p>
      </div>
    </>

  )
}