import React, { useState } from "react";
import Cat from "./Cat";

function Mouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <Cat x={position.x} y={position.y} />
    </div>
  );
}

export default Mouse;
