import { render } from "@testing-library/react";
import React, { useState } from "react";
import Dog from "./Dog";

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
      {render(position)}
    </div>
  );
}

export default Mouse;
