import React from "react";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
function Count() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn"
      >
        Click Me
      </button>
    </div>
  );
}

export default Count;
