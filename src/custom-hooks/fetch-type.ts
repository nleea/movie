import { useCallback, useState } from "react";
import Axios from "axios";

export const FetchType = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const httpType = useCallback(async (url: string, dispatch: any) => {
    try {
      setLoading(true);
      const response = await Axios.get(url);
      const { results, certifications } = response.data as any;
      if (results) {
        dispatch(results);
      } else {
        dispatch(certifications);
      }
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }, []);

  return { httpType, loading, error };
};
