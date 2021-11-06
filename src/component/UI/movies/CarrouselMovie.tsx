import { Carousel } from "react-responsive-carousel";
import { Image } from "../image/image";

export const Carrousel = (props: { data: Array<any> }) => {

  return (
    <Carousel showThumbs={false} autoPlay>
      {
        props.data.map((e, index) => <Image url={e.poster_path} key={index} title={e.title} overview={e.overview} />)
      }
    </Carousel>
  );
};
