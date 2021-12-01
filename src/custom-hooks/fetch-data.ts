import { useCallback, useState } from "react";
import Axios from "axios";

export const Fetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const http = useCallback(
    async (url: string, dispatch: any, leak: boolean) => {
      try {
        setLoading(true);
        const response = await Axios.get(url);
        const { results, certifications } = response.data;
        if (leak) {
          if (results) {
            dispatch(results);
          } else {
            dispatch(certifications);
          }
        }
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
      }
    },
    []
  );
  return { http, loading, error };
};
