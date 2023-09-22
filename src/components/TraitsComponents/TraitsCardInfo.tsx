import "./TraitsCardInfo.scss";
import Requirements from "../Requirements";

interface TraitsCardInfo {
  description: string;
  specsList: string[];
  requirementsHeader: string;
  requirements: string;
}

export default function TraitsCardInfo({
  description,
  specsList,
  requirementsHeader,
  requirements,
}: TraitsCardInfo) {
  const listItems = specsList.map((spec, index) => (
    <li key={index} dangerouslySetInnerHTML={{ __html: spec }} />
  ));

  return (
    <div className="wrapper">
      <div className="traits-card-info">
        <Requirements
          requirementsHeader={requirementsHeader}
          requirements={requirements}
        />
        <p className="description">{description}</p>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
