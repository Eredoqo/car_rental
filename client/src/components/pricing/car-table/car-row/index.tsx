import { carPhotos } from "./../../../../utils/carPhotos";
import { data } from "./../../../../utils/data";
import { Box, TableCell, TableRow, Typography } from "@mui/material";
import RateCell from "../rate-cell";
import StarRating from "../start-rating";

type Car = {
  brand: string;
  model: string;
  rated?: number;
};

type CarRate = {
  dailyRate?: number;
  weeklyRate?: number;
};

type CarRowProps = {
  car: Car;
  carRate: CarRate;
  i: number;
};

const CarRow = ({ car, carRate, i }: CarRowProps) => (
  <TableRow key={car.brand}>
    <TableCell
      sx={{
        display: "flex",
        width: "400px",
      }}
    >
      <img
        style={{ height: "100px", borderRadius: "10px" }}
        src={carPhotos[i].url}
        alt={`car-${i}`}
      />
      <Box marginLeft={4}>
        <Typography variant="h6">{car.model}</Typography>
        <Typography variant="h6">
          <StarRating rating={car.rated || 0} />
        </Typography>
      </Box>
    </TableCell>
    <RateCell rate={10} label={data.pricing.perHour} />
    <RateCell rate={carRate?.dailyRate || 0} label={data.pricing.perDay} />
    <RateCell rate={carRate?.weeklyRate || 0} label={data.pricing.perWeek} />
  </TableRow>
);

export default CarRow;
