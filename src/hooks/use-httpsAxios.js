import { useState, useCallback } from "react";
import axios from "axios";

const useHttpsAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    setStatusCode(null);

    try {
      const response = await axios({
        method: requestConfig.method ? requestConfig.method : "GET",
        url: requestConfig.url,
        headers: requestConfig.headers ? requestConfig.headers : {},
        data: requestConfig.body || null,
      });

      setStatusCode(response.status);

      if (!response.status.toString().startsWith("2")) {
        setError(`Request failed with status ${response.status}`);
        // throw new Error(`Request failed with status ${response.status}`);
      }

      console.log(response);
      applyData(response.data);
    } catch (err) {
      console.error(err);
      setError(err);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    sendRequest,
    error,
    statusCode,
  };
};

export default useHttpsAxios;
