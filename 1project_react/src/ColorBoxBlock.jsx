import ColorBox from "./ColorBox";
import "./ColorBoxBlock.css";
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A6",
  "#FFBD33",
  "#8D33FF",
  "#33FFF6",
  "#FFC300",
  "#DAF7A6",
  "#900C3F",
  "#581845",
  "#1ABC9C",
];

export default function ColorBoxBlock() {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox key={i} colors={colors} />);
  }
  return (
    <>
      <div className="ColorBoxBlock">{boxes}</div>
    </>
  );
}
