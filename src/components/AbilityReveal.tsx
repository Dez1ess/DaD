import React from 'react'

interface AbilitityReveal {
  abName: string;
  children: React.ReactNode;
  trigger: boolean;
  setTrigger: (stan: boolean) => void;
}

export default function AbilitityReveal({abName, children, trigger, setTrigger}: AbilitityReveal) {
  return trigger ? (
    <div className='ability-reveal-container'>
      <div className="ab-descr-name">
        <div onClick={() => setTrigger(!trigger)} className="return"><img src="return.svg" alt="return" /></div>
        <p>{abName}</p>
      </div>
      {children}
    </div>
  ) : null;
}