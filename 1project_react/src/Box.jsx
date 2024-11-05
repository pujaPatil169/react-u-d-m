import "./Box.css";
// import { useState } from "react";
export default function Box({ toggle, isActive }) {
  //   const [isActive, setIsActive] = useState(false);
  //   const toggle = () => {
  //     return setIsActive(!isActive);
  //   };
  return (
    <div
      className="Box"
      onClick={toggle}
      style={{
        backgroundColor: isActive ? "red" : "pink",
        // height: "800px",
        // width: "800px",
      }}
    >
      sdf
    </div>
  );
}
