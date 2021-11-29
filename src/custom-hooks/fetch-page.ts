import { useCallback, useState } from "react";
import Axios from "axios";

export const FetchPage = () => {
  const [loading, setLoading] = useState(true);
  const httpPage = useCallback(async (url: string, dispatch: any) => {
    setLoading(true);
    const response = await Axios.get(url);
    const data = (response.data as any).results;
    dispatch(data);
    setLoading(false);
  }, []);

  return { httpPage, loading };
};
