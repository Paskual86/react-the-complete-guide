import { useCallback, useEffect, useState } from "react";

const useHttpGet = ({ url, callback, loadInMount = true }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      callback(await response.json());
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [url, callback]);

  useEffect(() => {
    if (loadInMount) fetchData();
  }, [fetchData, loadInMount]);

  return {
    isLoading,
    error,
    refresh: fetchData,
  };
};

export default useHttpGet;
