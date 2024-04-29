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

interface HeaderFilterProps {
  modelCar?: string;
}
export default function BookedCard({ modelCar }: HeaderFilterProps) {
  const { rentals, fetchFilteredData } = useGetRentals();
  const [carModel, setCarModel] = useState("");

  const handleCarModelChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setCarModel(value);
    fetchFilteredData(modelCar);
  };
  const carModelsFilter = [
    ...new Set(rentals?.map((rental) => rental?.Car?.model)),
  ];

  const selectedRental = rentals?.find(
    (rental) => rental.Car.model === carModel
  );

  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        Sort by:
        <FormControl sx={{ width: "250px" }}>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carModel}
            label="Age"
            onChange={handleCarModelChange}
          >
            {carModelsFilter.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>{" "}
      </Typography>
      <Card
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
          <Typography variant="h6">{carModel || "Select a model"}</Typography>
          <Typography variant="h6">Booked by:</Typography>
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
            Total Costs: {selectedRental?.totalCost || 0} $
          </Typography>
          <Button
            variant="outlined"
            sx={{
              background: "lightgrey",
              color: "black",
              border: "1px solid grey",
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
