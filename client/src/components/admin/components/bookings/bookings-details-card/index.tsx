import { useGetRentals } from "@/hooks/useGetRental";
import {
  Card,
  Box,
  Typography,
  Divider,
  Stack,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

type Locations = {
  pickUp: string[];
  dropOff: string[];
};

export default function BookingsDetailsCard() {
  const { rentals, fetchFilteredData } = useGetRentals();
  const [date, setDate] = useState("");
  const [totalDuration, setTotalDuration] = useState(0);
  const [locations, setLocations] = useState<Locations>({
    pickUp: [],
    dropOff: [],
  });

  const handleDateChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setDate(value);
    fetchFilteredData(value);
  };

  useEffect(() => {
    const filteredRentalsDuration = rentals?.filter(
      (rental) => new Date(rental.startDate).toISOString() === date
    );

    const totalDuration = filteredRentalsDuration?.reduce((total, rental) => {
      const startDate = new Date(rental.startDate);
      const endDate = new Date(rental.endDate);
      const duration = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      return total + duration;
    }, 0);

    setTotalDuration(totalDuration || 0);
    const filteredRentals = rentals?.filter(
      (rental) => new Date(rental.startDate).toISOString() === date
    );

    const locationsPickUp = [
      ...new Set(filteredRentals?.map((rental) => rental.pickUpLocation)),
    ];

    const locationsDropOff = [
      ...new Set(filteredRentals?.map((rental) => rental.dropOffLocation)),
    ];

    setLocations({
      pickUp: locationsPickUp,
      dropOff: locationsDropOff,
    });
  }, [date, rentals]);

  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        Filter by:
        <FormControl sx={{ width: "250px" }}>
          <InputLabel id="demo-simple-select-label">Start Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={date}
            onChange={handleDateChange}
          >
            {rentals?.map(
              (rental) =>
                rental.startDate && (
                  <MenuItem
                    key={rental.id}
                    value={new Date(rental.startDate).toISOString()}
                  >
                    {new Date(rental.startDate).toLocaleDateString()}
                  </MenuItem>
                )
            )}
          </Select>
        </FormControl>
      </Typography>
      <Card sx={{ width: "450px", borderRadius: "15px" }}>
        <Box sx={{ padding: "0 30px" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              padding: "10px 0",
            }}
          >
            Booking Details
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
            <Stack flexDirection="row" justifyContent="space-between">
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Time and Date
              </Typography>
              <Button>Change</Button>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between">
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Pick up location
              </Typography>
              <Typography>{locations.pickUp.join(", ")}</Typography>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between">
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Drop off location
              </Typography>
              <Typography>{locations.dropOff.join(", ")}</Typography>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom="10px"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Rental Duration
              </Typography>
              <Typography> {totalDuration} days</Typography>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between">
              <Typography>Pick up time</Typography>
              <Typography>
                {date ? new Date(date).toLocaleDateString("en-GB") : ""}
              </Typography>
            </Stack>
            <Stack flexDirection="row" justifyContent="space-between">
              <Typography>Drop off time</Typography>
              <Typography>
                {date ? new Date(date).toLocaleDateString("en-GB") : ""}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
