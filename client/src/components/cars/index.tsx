import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Footer from "../footer";
import Navbar from "../navbar";
import About from "../../images/about.jpg";
import { carPhotos } from "../../utils/carPhotos";
import { useGetCar } from "./../../hooks/useGetCar";
import { Carousel } from "react-responsive-carousel";
import { Breadcrumbs, PageTitle, WidgetProps } from "@/utils/utils";

interface Car {
  make: string;
  model: string;
}

interface CarCardProps {
  car: Car;
  index: number;
}
const CarCard = ({ car, index }: CarCardProps) => (
  <Card
    sx={{
      marginTop: "70px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "none",
    }}
  >
    <img
      src={carPhotos[index].url}
      alt={`car-${index}`}
      style={{
        height: "250px",
        objectFit: "cover",

        borderRadius: "10px",
      }}
    />
    <CardContent>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
        <Box sx={{ alignSelf: "flex-start" }}>
          <Typography
            sx={{
              fontFamily: '"Poppins", Arial, sans-serif',
              background: "#fff",
              fontSize: "22px",
              lineHeight: "1.8",
              fontWeight: "400",
            }}
            variant="h2"
          >
            {car.make}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#CCCCCC" variant="subtitle1">
            {car.model}
          </Typography>
          <Typography variant="subtitle2">
            <span style={{ color: "#0E89FF" }}>100$</span>
            <span style={{ color: "#CCCCCC" }}> / day</span>
          </Typography>
        </Box>
      </Box>
    </CardContent>
    <CardActions
      sx={{
        padding: "0 20px 0 20px",
      }}
    >
      <Button
        sx={{ width: "50%" }}
        variant="contained"
        size="large"
        color="primary"
      >
        Book Now
      </Button>
      <Button
        sx={{
          width: "50%",
          background: "#00D28D",
          "&:hover": {
            background: "#00D28D",
          },
        }}
        size="large"
      >
        Details
      </Button>
    </CardActions>
  </Card>
);
const Cars = ({ pageTitle = "Default Page" }: WidgetProps) => {
  const { cars } = useGetCar();
  console.log(cars, "cars");

  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pb: 3,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            ml: 25,
            mb: 3,
          }}
        >
          <Breadcrumbs currentPage={pageTitle} />
          <PageTitle title={pageTitle ? pageTitle.toUpperCase() : ""} />
        </Container>
      </Box>
      <Box
        sx={{
          height: "100%",
          margin: "100px 150px 100px 150px",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            showArrows={false}
          >
            {Array.from(
              { length: Math.ceil((cars?.length || 0) / 9) },
              (_, i) => i
            ).map((slideIndex) => {
              const slideCars = cars?.slice(slideIndex * 9, slideIndex * 9 + 9);
              return (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: slideCars?.length ? "2rem" : "0",
                  }}
                  key={slideIndex}
                >
                  {slideCars?.map((car, index) => (
                    <CarCard key={index} car={car} index={index} />
                  ))}
                </div>
              );
            })}
          </Carousel>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Cars;
