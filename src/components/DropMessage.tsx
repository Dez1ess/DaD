import "./DropMessage.scss";
import { ReactNode, useState, useRef } from "react";

interface DropMessage {
  name: string;
  description: ReactNode;
}

export default function DropMessage({ name, description }: DropMessage) {
  const [drop, setDrop] = useState(false);

  const dropRef = useRef<HTMLDivElement>(null);

  const handleDrop = () => {
    setDrop(() => !drop);
  };

  return (
    <div  className="drop-message">
      <div onClick={handleDrop} className="drop-message-flex">
        <p>{name}</p>
        <img
          style={{ transform: `${drop ? "rotate(180deg)" : ""}` }}
          src="drop.png"
          alt="drop"
        />
      </div>
      <div
        className={`accordion-collapse ${drop ? "active" : ""}`}
        style={
          drop ? { height: dropRef.current?.scrollHeight } : { height: "0px" }
        }
      >
        <div ref={dropRef} className="message-description">
          {description}
        </div>
      </div>
    </div>
  );
}
