import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { photos } from "./../../utils/photos"; // import your photos
import { useGetCar } from "./../../hooks/useGetCar";

const CarView = () => {
  const { cars } = useGetCar();

  return (
    <section
      style={{ height: "100%", marginTop: "30px", marginBottom: "30px" }}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        {cars
          ?.filter((_, index) => index % 3 === 0)
          .map((_, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              key={index}
            >
              {cars.slice(index * 3, index * 3 + 3).map((car, i) => (
                <Card
                  key={i}
                  sx={{
                    width: "30%",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={photos[i].url} alt={`car-${i}`} />
                  <CardContent>
                    <Typography variant="h5">{car.brand}</Typography>
                    <Typography variant="subtitle1">{car.model}</Typography>
                    <Typography variant="subtitle2">100</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    <Button size="small" color="primary">
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default CarView;
