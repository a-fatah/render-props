import React, { useState } from "react";

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      style={{
        height: "100vh",
      }}
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

export default MouseTracker;
