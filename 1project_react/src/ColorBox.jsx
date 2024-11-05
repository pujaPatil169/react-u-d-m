import { useState } from "react";
import "./ColorBox.css";
export default function ColorBox({ colors }) {
  const randomColor = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return colors[rand];
  };
  const [color, setColor] = useState(randomColor(colors));

  const colorChange = () => {
    setColor(randomColor(colors));
  };
  return (
    <div
      className="ColorBox"
      onClick={colorChange}
      style={{ backgroundColor: color }}
    >
      hmjk
    </div>
  );
}
