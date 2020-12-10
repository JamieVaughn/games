import React from "react";

export default function AbilityMenu(props) {
  const { abilities, callback } = props;

  return (
    <div style={{ display: "none" }}>
      {abilities.map((a) => (
        <div onMouseUp={() => callback(a)}>{a}</div>
      ))}
    </div>
  );
}
