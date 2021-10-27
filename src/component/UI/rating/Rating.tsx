import Rating from "@mui/material/Rating";

export const RatingSIze = (props: { average: number }) => {
  return (
    <Rating
      name="size-small"
      defaultValue={props.average !== null ? props.average : 0}
      size="small"
      max={10}
      className="rating"
    />
  );
};
