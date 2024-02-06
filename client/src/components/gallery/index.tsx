import { photos } from "./../../utils/photos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Gallery = () => {
  return (
    <Carousel axis="horizontal" autoPlay>
      {photos.map((photo, index) => (
        <div style={{ width: "100%", height: "100%" }} key={index}>
          <img src={photo.url} alt={`photo-${photo.id}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
