import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const x = <h1>Zero</h1>;

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const styles = {
    fontSize: "50px",
    fontWeight: "bold",
  };

  return (
    <>
      <span style={styles} className="badge bg-primary m-2">
        {formCount()}
      </span>
      <span
        style={{ fontSize: "50px", fontWeight: "bold" }}
        className="badge bg-primary m-2"
      >
        Inline
      </span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </>
  );
};

export default Counter;
