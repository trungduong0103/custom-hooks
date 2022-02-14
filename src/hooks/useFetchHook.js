import axios from "axios";
import { useState, useEffect } from "react";

// Idea: When component is unmounted -> stop HTTP request

export function useFetchFromUrl(url, method, extraParams) {
  const [result, setResult] = useState({
    data: undefined,
    loading: false,
    error: undefined,
  });

  function updateResult(updateObject) {
    return setResult((prevState) => ({ ...prevState, ...updateObject }));
  }

  useEffect(() => {
    let didCancel = false;

    (async () => {
      try {
        updateResult({ loading: true });
        const { data = "gang gang" } = await axios.request({
          url,
          method,
          ...extraParams,
        });

        // the juice
        if (!didCancel) {
          console.log("Component is still mounted, setState called!");
          updateResult({ data, loading: false });
        }
      } catch (error) {
        updateResult({ error: error.message, loading: false });
        throw new Error(error);
      }
    })();

    return () => {
      console.log("Component has unmounted, no setState called!");
      didCancel = true;
    };
  }, [extraParams, method, url]);

  return [result.data, result.loading, result.error];
}
