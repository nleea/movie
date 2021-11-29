import { useCallback, useState } from "react";
import Axios from "axios";

export const Fetch = () => {
  const [loading, setLoading] = useState(true);
  const http = useCallback(async (url: string, dispatch: any) => {
    setLoading(true);
    const response = await Axios.get(url);
    const { results, certifications } = response.data;
    if (results) {
      dispatch(results);
    } else {
      dispatch(certifications);
    }
    setLoading(false);
  }, []);
  return { http, loading };
};
