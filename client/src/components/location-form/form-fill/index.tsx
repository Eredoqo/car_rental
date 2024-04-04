import { Button, Stack, Typography } from "@mui/material";
import TimePicker from "./time-picker";
import LocationPicker from "./location";
import PickUpDate from "./date-picker";

const FormFill = () => {
  return (
    <Stack
      sx={{
        background: "#0F89FF",
        height: "550px",
        padding: "30px",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        width: "400px",
      }}
      spacing={2}
    >
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
      <LocationPicker />
      <Stack direction="row" spacing={2}>
        <PickUpDate />
      </Stack>
      <TimePicker />
      <Stack
        width="100%"
        marginTop="20px"
        sx={{ background: "#01d28e", borderRadius: "10px" }}
      >
        <Button sx={{ padding: "15px" }} variant="outlined">
          Rent Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default FormFill;
