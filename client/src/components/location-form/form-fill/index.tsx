import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Country {
  name: {
    common: string;
  };
}

const inputLabelStyle = { color: "black", padding: "7px" };

const FormFill = () => {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map(
          (country: Country) => country.name.common
        );
        setCities(countryNames);
      });
  }, []);

  return (
    <Stack
      sx={{
        background: "#1089ff",
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
      <FormControl fullWidth>
        <InputLabel sx={{ ...inputLabelStyle }} id="demo-simple-select-label">
          Pick-up Location
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Pick-up Location"
        >
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel color="primary" id="demo-simple-select-label">
          Drop-off Location
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Drop-off Location"
        >
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack direction="row" spacing={2}>
        <Stack>
          <InputLabel
            sx={{ inputLabelStyle, padding: "20px" }}
            htmlFor="pick-up-date"
          >
            PICK-UP DATE
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="PICK-UP DATE"
              defaultValue={dayjs("2022-04-17")}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Stack>

        <Stack>
          <InputLabel
            sx={{ inputLabelStyle, padding: "20px" }}
            htmlFor="drop-off-date"
          >
            DROP-OFF DATE
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="DROP-OFF DATE"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
          <InputLabel
            sx={{ ...inputLabelStyle, marginBottom: "10px" }}
            htmlFor="pick-up-time"
          >
            PICK-UP TIME
          </InputLabel>
          <TextField
            fullWidth
            id="pick-up-time"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={{ alignSelf: "flex-start" }}
          />
        </Stack>
      </Stack>
      <Stack
        width="50%"
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
