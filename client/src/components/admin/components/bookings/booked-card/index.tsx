import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import photo from "./../../../../../images/car-1.jpg";
import { useGetRentals } from "@/hooks/useGetRental";
import { useState } from "react";
import { RentalDto } from "@/dtos/rental/RentalDto";

interface HeaderFilterProps {
  modelCar?: string;
}

export default function BookedCard({ modelCar }: HeaderFilterProps) {
  const { rentals, fetchFilteredData } = useGetRentals();
  const [carModel, setCarModel] = useState("");
  const [filteredRentals, setFilteredRentals] = useState<RentalDto[]>([]);

  const handleCarModelChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setCarModel(value);
    fetchFilteredData(modelCar);

    const filtered = rentals?.filter((rental) => rental.Car.model === value);
    setFilteredRentals(filtered || []);
  };

  const carModelsFilter = [
    ...new Set(rentals?.map((rental) => rental?.Car?.model)),
    ...new Set(rentals?.map((rental) => rental?.Car?.make)),
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        Sort by:
        <FormControl sx={{ width: "250px", borderColor: "black" }}>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carModel}
            onChange={handleCarModelChange}
          >
            {carModelsFilter.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Typography>
      {filteredRentals.map((rental, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "15px",
            gap: 2,
            borderRadius: "15px",
          }}
        >
          <Stack>
            <img style={{ height: "150px" }} src={photo} />
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Stack flexDirection="row">
              <Typography variant="h6">
                {rental.Car.model || "Select a model"}
              </Typography>
              <Typography sx={{ marginLeft: "10px" }} variant="h6">
                {rental.Car.make}
              </Typography>
            </Stack>
            <Typography variant="h6">
              Booked by:{rental.User.firstName}
            </Typography>
            <Stack>
              <Typography>Icons of how many have booked</Typography>
            </Stack>
          </Box>
          <Stack sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              sx={{
                border: "1px solid grey",
                background: "lightgrey",
                padding: "15px 20px",
                borderRadius: "10px",
              }}
            >
              Total Costs: {rental.totalCost || 0} $
            </Typography>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Stack>
        </Card>
      ))}
    </Box>
  );
}
