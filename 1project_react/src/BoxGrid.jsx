import { useState } from "react";
import Box from "./Box";
export default function BoxGrid({ num }) {
  const [boxes, setBoxes] = useState(() => new Array(num).fill(false));
  console.log(boxes);
  const toggleIsActive = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((s, i) => {
        if (i == idx) return !s;
        return s;
      });
    });
  };
  const reset = () => {
    setBoxes(() => new Array(num).fill(false));
  };
  return (
    <div>
      {boxes.map((value, i) => {
        return (
          <Box key={i} isActive={value} toggle={() => toggleIsActive(i)} />
        );
      })}
      <button onClick={reset}>reset</button>
    </div>
  );
}
