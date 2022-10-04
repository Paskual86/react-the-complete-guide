import { useState, useEffect } from "react";

function useCounter(initialValue, forward = true) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (forward ? ++prevCounter : --prevCounter));
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return {
    counter,
  };
}

export default useCounter;
