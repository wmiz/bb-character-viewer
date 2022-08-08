import React from "react";

const Scroll = (props) => {
  return (
    <div
      className="custom-scroll"
      style={{
        overflow: "scroll",
        border: "1px solid black",
        height: "80vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
