import React from "react";

function Cat({ mouse }) {
  return (
    <img
      style={{
        position: "absolute",
        left: mouse.x,
        top: mouse.y,
      }}
      src="https://images.pexels.com/photos/1120049/pexels-photo-1120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
    ></img>
  );
}

export default Cat;
