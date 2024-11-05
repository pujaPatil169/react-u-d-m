import { useState } from "react";

const rand = () => Math.floor(Math.random() * 1000);
const log = console.log;

/** Component to demo rendering/effects */

function RenderDemo() {
  const [a, setA] = useState(rand());
  const [b, setB] = useState(rand());
  log("rendering a=", a, "b=", b);

  function change1() {
    log("change1 a=", a);
    setA(rand());
    log("  change1 end a=", a);
  }

  function change2() {
    log("change2 b=", b);
    setB(rand());
    log("  change2 end b=", b);
  }

  return (
    <div>
      <button onClick={change1}>{a}</button>
      <button onClick={change2}>{b}</button>
    </div>
  );
}

export default RenderDemo;
