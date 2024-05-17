import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { carPhotos } from "../../../utils/carPhotos";
import { useGetCar } from "../../../hooks/useGetCar";
import { data } from "../../../utils/data";
import { ReactNode, useState } from "react";
import { TypographyProps } from "@mui/material/Typography";
import LoginModal from "../login/login-modal";

interface TypographyComponentProps extends TypographyProps {
  children: ReactNode;
}

interface Car {
  brand: string;
  model: string;
}

interface CarCardProps {
  car: Car;
  index: number;
}
const TypographyComponent = ({
  variant,
  children,
  ...props
}: TypographyComponentProps) => (
  <Typography variant={variant} {...props}>
    {children}
  </Typography>
);

const CarCard = ({ car, index }: CarCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        width: "27%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={carPhotos[index].url}
        alt={`car-${index}`}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5">{car.brand}</Typography>
        <Typography variant="subtitle1">{car.model}</Typography>
        <Typography variant="subtitle2">100</Typography>
      </CardContent>
      <CardActions sx={{ marginBottom: "20px" }}>
        <Button
          onClick={handleOpen}
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
        <Button
          onClick={handleOpen}
          variant="contained"
          size="large"
          color="primary"
        >
          Book Now
        </Button>
        <LoginModal isOpen={open} onClose={handleClose} />
      </CardActions>
    </Card>
  );
};

const CarView = () => {
  const { cars } = useGetCar();

  return (
    <section
      style={{
        height: "100%",
        marginBottom: "30px",
        marginTop: "400px",
      }}
    >
      <Stack alignItems="center">
        <TypographyComponent
          sx={{ fontWeight: "600", marginBottom: "30px" }}
          variant="h5"
          color="#1089ff"
        >
          {data.featured.whatWeOffer}
        </TypographyComponent>
        <TypographyComponent sx={{ marginBottom: "50px" }} variant="h3">
          {data.featured.featuredVehicles}
        </TypographyComponent>
      </Stack>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
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
                <CarCard
                  key={i}
                  car={{ brand: car.make, model: car.model }}
                  index={i}
                />
              ))}
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default CarView;
