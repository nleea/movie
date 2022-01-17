import { useState, useCallback } from "react";

interface props {
  url: string;
}

export const FetchImage = () => {
  const [error, setError] = useState<unknown>();
  const fetchImage = useCallback(async (props: props) => {
    let url = "https://image.tmdb.org/t/p/w500";
    let callbackurl =
      "https://res.cloudinary.com/ddzkz3ijj/image/upload/v1642016306/not-found-image.jpg";

    try {
      if (props.url) {
        return url.concat(props.url);
      } else {
        return callbackurl;
      }
    } catch (error) {
      setError(error);
      return callbackurl;
    }
  }, []);

  return {
    fetchImage,
    error,
  };
};
