import { useEffect, useState } from "react";

const useFetch = (asyncFunc, deps = []) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await asyncFunc();

        if (response) setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, deps);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
