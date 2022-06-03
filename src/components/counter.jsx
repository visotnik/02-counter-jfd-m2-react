import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const tags = ["tag1", "tag2", "tag3"];

  // const x = <h1>Zero</h1>;

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";

    return classes;
  };

  // bg-primary bg-danger

  return (
    <>
      {/* Each child in a list should have a unique "key" prop. */}
      {/* запись через return */}
      {/* {tags.map((tag) => {
        return <li>{tag}</li>;
      })} */}
      {/* запись упрощенная без return */}
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
      <span className={getBageClasses()}>{formCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </>
  );
};

export default Counter;
