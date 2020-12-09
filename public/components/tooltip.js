import React, { useState } from "react";
import "./tooltip.css";

export default function Tooltip(props) {
  let timeout;
  const [active, setActive] = useState(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={`Tooltip-Wrapper ${props.class}`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "bottom"}`}>
          {props.content.map(i => (
              <div className='tip-list'>{i}</div>
          ))}
        </div>
      )}
    </div>
  );
};
