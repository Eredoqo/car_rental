import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import ReserveCar from "./reserve-car";
import FormFIll from "./form-fill";

const LocationForm = () => {
  return (
    <Box
      sx={{
        height: "60%",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "100px",
        marginLeft: "150px",
      }}
    >
      <Stack>
        <FormFIll />
      </Stack>
      <Stack>
        <ReserveCar />
      </Stack>
    </Box>
  );
};

export default LocationForm;
