import { Slide } from "@mui/material";
import { photos } from "./../../utils/photos";

const Gallery = () => {
  return (
    <div>
      {photos.map((photo, index) => (
        <Slide key={index} direction="down" in={true} timeout={500}>
          <img src={photo.url} alt={`photo-${photo.id}`} />
        </Slide>
      ))}
    </div>
  );
};

export default Gallery;
