import "../../ClassDescription.scss";
import ClassesBottomNavBar from "../../../../components/Navigation/ClassesBottomNavBar";

export default function WarlockDefaultDescription({
  render,
}: {
  render: boolean;
}) {
  return render ? (
    <>
      <ClassesBottomNavBar
        path1="/WarlockAbilities?option=1"
        path2="/WarlockDescriptions?option=1"
        path3="/WarlockSpells?option=1"
        path4="/WarlockImgs?option=1"
      />
      <div
        className="wrapper classes-wrapper-margin"
        style={{ marginBottom: "65px" }}
      >
        <div className="class-description">
          <div className="description-promo">
            <p>
              Наспівуючи, і перебираючи пальцями по старовинному монументу,
              знайденому в занедбаних руїнах, напівельфійка в застарілій
              шкіряній обладунку перебирає знання, які миготять у її голові,
              викликаючи силою магії, укладеної в пісні, людей, які побудували
              цей монумент, і загадковий переказ, що його він зображає.
            </p>
            <p>
              Суворий людський воїн ритмічно вдаряє своїм мечем плазом об
              обладунок, задаючи темп свого воєнного виспіву, надихаючи
              супутників на відвагу та героїзм. Магія його пісні зміцнює і
              підбадьорює їх.
            </p>
            <p>
              Сміючись, і налаштовуючи свою цитру, дівчина гном накладає тонку
              магію на присутніх дворян, гарантуючи, що слова її супутників
              будуть добре сприйняті.
            </p>
          </div>
          <p>
            Неважливо <b>(default)</b>, ким є бард: вченим, скальдом чи
            пройдисвітом; він плете магію зі слів і музики, надихаючи союзників,
            деморалізуючи супротивників, маніпулюючи свідомістю, створюючи
            ілюзії, і навіть зцілюючи рани.
          </p>
          <p>
            <b>Музика і магія.</b> У світах D&D слова і музика це не просто
            коливання повітря, тут вони містять у собі силу. І бард є майстром
            промов, пісень, і чарівництва, закладеного в них. Барди кажуть, що
            весь мультивсесвіт був викликаний до існування і сформований
            словами, які виголосили боги. І віддзеркалення цих первородних Слів
            Творіння досі звучать у космосі. Музика бардів це спроба вловити ці
            відгомони і тонко вплести їх у свої заклинання.
          </p>
          <p>
            Найсильнішою рисою бардів є їхня виняткова різнобічність. Багато
            бардів воліють триматися не на передовій у бою, використовуючи свою
            магію для натхнення союзників і перешкоджання противникам на
            відстані. Але барди здатні захищати себе і в ближньому бою, за
            необхідності використовуючи магію для зміцнення своїх клинків і
            обладунків. Їхні заклинання частіше призначені для зачарування і
            створення ілюзій, а не для створення явних руйнувань. Вони володіють
            великими знаннями в безлічі тематик і природними здібностями, які
            дозволяють їм робити добре практично все. Барди стають майстрами в
            тих талантах, до яких прагнуть їхні уми, відточуючи їх до
            досконалості, від музичних виступів до езотеричних знань.
          </p>
          <p>
            <b>Навчання на досвіді.</b> Справжні барди не є буденною річчю у
            світі. Не кожен менестрель, що співає в таверні, або блазень, що
            скаче при королівському дворі, є бардом. Щоб виявити приховану в
            музиці магію, потрібне важке навчання і деякий ступінь природного
            таланту, чого більшості трубадурів і жонглерів бракує. Однак,
            визначити різницю між цими виконавцями може бути важко. Життя
            варвара минає в мандрах по землях і присвячене збору знань,
            оповіданню історій та існуванню за рахунок вдячності публіки, як і в
            будь-якого іншого артиста. Але глибина знань, рівень музичної
            майстерності та зв'язок із магією ставить бардів на інший щабель від
            їхніх побратимів.
          </p>
          <p>
            Барди рідко селяться надовго в одному місці, і їхній природний потяг
            до мандрівок пов'язаний з пошуком нових оповідей, навчанням новим
            навичкам і відкриттям нових горизонтів, що робить кар'єру шукача
            пригод для них природним покликанням. Кожна пригода - це можливість
            чогось навчитися, попрактикувати різні навички, проникнути в давно
            занедбані гробниці, виявити втрачені витвори магії, розшифрувати
            старі фоліанти, пройтися незнайомими місцями, або зіткнутися з
            екзотичними істотами. Барди люблять супроводжувати героїв, щоб
            засвідчити їхні звершення з перших рук.
          </p>
          <p>
            Бард, який може розповісти вражаючу історію з особистого досвіду,
            заробляє популярність серед інших бардів. Ба більше, після розповіді
            такої великої кількості історій про великі звершення героїв, багато
            бардів сприймають їх близько до серця і хочуть прийняти роль героя
            самі.
          </p>
          <p>
            <b>Створення варвара.</b> Барди процвітають за рахунок історій, не
            важливо, правдиві вони чи ні. Ваша передісторія і мотиви не так
            важливі, як історії, що ваш персонаж розповідає про себе. Можливо, у
            вас було безпечне і нічим не примітне дитинство. У ньому немає
            хороших історій, щоб розповісти про них, але ви можете зобразити
            себе сиротою, вихованим відьмою на зловісному болоті. Або ваше
            дитинство справді може бути гідним історії. Деякі барди здобувають
            свою чарівну музику надзвичайними способами, зокрема під впливом фей
            або інших надприродних істот.
          </p>
          <p>
            Чи були ви учнем у майстра, слідуючи за більш досвідченим бардом,
            поки не почали слідувати своїм власним шляхом? Або відвідували
            колегію, де ви навчалися знань бардів і практикували свою музичну
            магію? Можливо, ви в молодості втекли з дому, або ставши сиротою
            подружилися з бродячим бардом, який став вашим наставником. Або ви
            могли бути розпещеною знатною дитиною, навченою майстром.
          </p>
          <p>
            Можливо, ви потрапили до лап відьми, здійснивши угоду, що пообіцяла
            вам музичний дар на додачу до вашого життя і свободи, але якою
            ціною?
          </p>
          <p>
            <b>Швидке створення.</b> Ви можете швидко створити варвара,
            дотримуючись цих рекомендацій.
          </p>
          <p>
            По-перше, у вашої Харизми має бути найвище значення. Наступною за
            величиною характеристикою має бути Спритність.
          </p>
          <p>По-друге, виберіть передісторію "Артист".</p>
          <p>
            По-третє, отримайте змови злий глум і танцюючі вогники разом із
            такими заклинаннями 1 рівня: <span>хвиля грому</span>,{" "}
            <span>лікувальне слово</span>, <span>виявлення магії</span> і{" "}
            <span>зачарування особистості</span>.
          </p>
          <table>
            <tr>
              <td>кб</td>
              <td>Я став бардом, тому що...</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Я пробудив мої приховані таланти варвара методом проб і помилок.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Я був талановитим виконавцем і привернув увагу наставника
                бардів, який навчив мене древніх технік.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Я приєднався до вільного товариства дослідників і ораторів, щоб
                вивчити нові техніки виступу та магії.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Я відчув покликання розповідати про діяння чемпіонів і героїв,
                ожививши їх у піснях та історіях
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Я приєднався до однієї з великих колегій, щоб вивчати стародавні
                знання, таємниці магії та мистецтво виступу.
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                Одного разу я взяв до рук музичний інструмент і одразу ж
                зрозумів, що вмію на ньому грати.
              </td>
            </tr>
          </table>
          <p>
            Барди приносять полегшення в темні часи, діляться мудрістю, щоб
            усунути невігластво і змушують кумедне здаватися піднесеним. Барди є
            хранителями стародавньої історії, їхні пісні та історії увічнюють
            пам'ять про великі події в часі - знання настільки важливе, що його
            запам'ятовують і передають з вуст у вуста, щоб воно збереглося,
            навіть коли не залишиться письмових джерел.
          </p>
          <p>
            Бард також веде і хроніки сучасних подій - історії про сьогоднішніх
            героїв, включно з їхніми доблесними подвигами і трохи менш
            вражаючими провалами.
          </p>
          <p></p>
          <p>
            Звісно, у світі багато хто може виконати пісеньку або розповісти
            гарну історію, але будь - який бард, що шукає пригод, має щось
            більше, ніж балакучий язик і мелодійний голос.І все ж по -
            справжньому відрізняє бардів від усіх інших і один від одного -
            їхній стиль і суть їхніх виступів.
          </p>
          <p>
            Барди зазвичай колоритні й чудові під час виступів - це потрібно,
            щоб захопити й утримати увагу аудиторії.Найзнаменитіші з них по суті
            є еквівалентом світових поп - зірок у D & D.Якщо ви граєте бардом,
            подумайте над тим, щоб використовувати одного з ваших улюблених
            музикантів як модель для вашого персонажа.
          </p>
          <p>
            Ви можете додати кілька унікальних аспектів своєму персонажу барду,
            розглянувши наведені нижче пропозиції.
          </p>
          <p className="subhead">Головний твір</p>
          <p>
            Кожен успішний бард відомий принаймні одним витвором мистецтва,
            зазвичай піснею чи віршем, популярним серед усіх хто його чув.Про
            такі вистави очевидці говорять роками потому, а життя деяких
            глядачів назавжди змінилося завдяки цим творам.
          </p>
          <p>
            Якщо ваш персонаж тільки початківець, то ваш найкращий твір,
            найімовірніше, ще попереду.Але щоб заробляти своєю професією, у вас
            у репертуарі вже має бути один або два твори, які показали себе
            приємними публіці.
          </p>
          <p className="centered-big">Головний твір</p>
          <table>
            <tr>
              <td>кб</td>
              <td>Твір</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                "Три фламбіні", непристойна пісня про неприборкані бажання і
                помилкові впізнання.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Вальс Миконідів", життєрадісна мелодія, яка особливо
                подобається дітям.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                "Золота Задниця Асмодея", драматична поема, яка, за вашими
                запевненнями, натхненна вашим особистим візитом до Авернуса.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                "Пірати Лускана", ваша розповідь із перших рук про викрадення
                морськими розбійниками в дитинстві.
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                "Обод, Два Голуби і Пекельна Гонча", тонка пародія над
                неписьменним дворянином.
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                "Блазень у Безодні", комедійний вірш про пригоди блазня серед
                демонів.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  ) : null;
}
