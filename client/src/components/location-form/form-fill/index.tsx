import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const FormFIll = () => {
  return (
    <Stack
      sx={{
        background: "#1089ff",
        height: "550px",
        width: "370px",
        padding: "30px",
        borderRadius: "10px",
      }}
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
      <Stack sx={{ gap: 2 }}>
        <Stack>
          <InputLabel
            sx={{ color: "white", padding: "7px" }}
            htmlFor="pickup-location"
          >
            PICK-UP LOCATION
          </InputLabel>
          <TextField
            InputProps={{
              style: { color: "white" },
            }}
            id="pickup-location"
            placeholder="City, Airport, ecc"
          />
        </Stack>{" "}
        <Stack>
          <InputLabel
            sx={{ color: "white", padding: "7px" }}
            htmlFor="DROP-OFF LOCATION"
          >
            DROP-OFF LOCATION
          </InputLabel>
          <TextField
            InputProps={{
              style: { color: "white" },
            }}
            id="DROP-OFF LOCATION"
            placeholder="City, Airport, ecc"
          />
        </Stack>{" "}
        <Stack direction="row" justifyContent="space-between">
          <Stack marginRight="20px">
            <InputLabel
              sx={{ fontSize: "12px", color: "white", padding: "7px" }}
              htmlFor="PICK-UP DATE"
            >
              PICK-UP DATE
            </InputLabel>
            <TextField
              InputProps={{
                style: { color: "white" },
              }}
              id="PICK-UP DATE"
              placeholder="Date"
            />
          </Stack>
          <Stack>
            <InputLabel
              sx={{ fontSize: "12px", color: "white", padding: "7px" }}
              htmlFor="DROP-OFF DATE"
            >
              DROP-OFF DATE
            </InputLabel>
            <TextField
              InputProps={{
                style: { color: "white" },
              }}
              id="DROP-OFF DATE"
              placeholder="Date"
            />
          </Stack>
        </Stack>
        <Stack>
          <InputLabel
            sx={{ color: "white", padding: "7px" }}
            htmlFor="pickup-location"
          >
            PICK-UP LOCATION
          </InputLabel>
          <TextField
            InputProps={{
              style: { color: "white" },
            }}
            id="pickup-location"
            placeholder="City, Airport, ecc"
          />
        </Stack>
      </Stack>
      <Stack
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

export default FormFIll;
