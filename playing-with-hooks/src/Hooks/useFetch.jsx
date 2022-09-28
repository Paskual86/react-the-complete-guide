import { useState, useEffect } from "react";

import axios from "axios";
import { useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("Use Fetch Own execute");
  const getNewJoke = useCallback(() => {
    console.log("Get New Joke, Call Back");
    axios(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  useEffect(() => {
    console.log("Use Fetch Own execute");
    getNewJoke();
    return () => {
      console.log("Return UseEffect from useFetch");
    };
  }, [getNewJoke, url]);

  return {
    data,
    loading,
    error,
    getNew: getNewJoke,
  };
}

export default useFetch;
