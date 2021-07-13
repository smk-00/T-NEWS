import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [ispending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //console.log("Runs when rendering");

    const abortCont = new AbortController();

    fetch(endpoint, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Coludn't fetch data.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortCont.abort();
  }, [endpoint]);

  return { data, ispending, error };
};

export default useFetch;
