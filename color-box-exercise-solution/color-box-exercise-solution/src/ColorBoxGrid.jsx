import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";
function ColorBoxGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return <div className="ColorBoxGrid">{boxes}</div>;
}

export default ColorBoxGrid;
