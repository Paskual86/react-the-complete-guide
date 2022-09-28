import React, { useState } from "react";

function RefreshJoke(props) {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
    props.onRequestJoke();
  };
  return (
    <div>
      <p>Joke Request {count} times</p>
      <button onClick={onClickHandler} className="btn">
        Click Me
      </button>
    </div>
  );
}

export default RefreshJoke;
