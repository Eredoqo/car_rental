import { Button, Stack, Typography } from "@mui/material";
import TimePicker from "./time-picker";
import LocationPicker from "./location";
import PickUpDate from "./date-picker";

const Title = () => (
  <Typography
    sx={{
      color: "#fff",
      fontSize: "22px",
      fontWeight: "600",
      paddingBottom: "10px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    Make your Trip
  </Typography>
);

const RentButton = () => (
  <Stack
    width="100%"
    marginTop="20px"
    sx={{ background: "#01d28e", borderRadius: "10px" }}
  >
    <Button sx={{ padding: "15px" }} variant="outlined">
      Rent Now
    </Button>
  </Stack>
);

const FormFill = () => {
  return (
    <Stack
      sx={{
        background: "#0F89FF",
        padding: "30px",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        width: "400px",
      }}
      spacing={2}
    >
      <Title />
      <LocationPicker />
      <PickUpDate />
      <TimePicker />
      <RentButton />
    </Stack>
  );
};

export default FormFill;
