import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const x = <h1>Zero</h1>;

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };
  return (
    <>
      <span>{formCount()}</span>
      <button>Increment</button>
    </>
  );
};

export default Counter;
