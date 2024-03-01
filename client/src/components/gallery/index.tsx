import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { photos } from "./../../utils/photos"; // import your photos
import { useGetCar } from "./../../hooks/useGetCar";
import { data } from "./../../utils/data";

const CarView = () => {
  const { cars } = useGetCar();

  return (
    <section
      style={{
        height: "100%",
        marginBottom: "30px",
        marginTop: "100px",
      }}
    >
      <Stack alignItems="center">
        <Typography
          sx={{ fontWeight: "600", marginBottom: "30px" }}
          variant="h5"
          color="#1089ff"
        >
          {data.featured.whatWeOffer}
        </Typography>
        <Typography sx={{ marginBottom: "50px" }} variant="h3">
          {data.featured.featuredVehicles}
        </Typography>
      </Stack>
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
                minHeight: "550px",
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
                    <Typography variant="subtitle1">
                      {car.model}
                    </Typography>{" "}
                    {/* Access model property here */}
                    <Typography variant="subtitle2">100</Typography>
                  </CardContent>
                  <CardActions sx={{ marginBottom: "20px" }}>
                    <Button
                      sx={{
                        background: "#00D28D",
                        "&:hover": {
                          background: "#00D28D",
                        },
                      }}
                      size="large"
                    >
                      Details
                    </Button>
                    <Button variant="contained" size="large" color="primary">
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
