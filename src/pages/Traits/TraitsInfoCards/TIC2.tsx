import TraitsCardInfo from "../../../components/TraitsComponents/TraitsCardInfo";
import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link } from "react-router-dom";

export default function TraitsCardInfo2() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: '#000', opacity: '0.4' }}>Основна</Link>
      <span className="vertical-split">|</span>
      <Link to="/Traits" style={{ color: '#000', opacity: '0.4' }}>Риси</Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: '#000', pointerEvents: 'none' }}>Агресія орків</Link>
    </>
  );

  return (
    <>
      <TopNavBar folder={linkFolders} />
      <TraitsCardInfo
        requirementsHeader="Вимоги"
        requirements='Орк'
        description="Ви можете спрямовувати магічні сили хаосу, які пов'язують
    мультивсесвіт у закономірності. Ваші дії залежать від вас, але ці сили
    дають вам такі переваги:"
        specsList={['Some content could be here 22222', 'Another list item here 2222']} />
    </>
  )
}