import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
}

const LocationPicker = () => {
  const inputLabelStyle = { color: "black", padding: "7px" };

  const [cities, setCities] = useState([]);

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
    <>
      <FormControl fullWidth>
        <InputLabel
          sx={{ ...inputLabelStyle, color: "white" }}
          id="demo-simple-select-label"
        >
          Pick-up Location
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Pick-up Location"
          sx={{ color: "white" }}
        >
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel
          sx={{ color: "white" }}
          color="primary"
          id="demo-simple-select-label"
        >
          Drop-off Location
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Drop-off Location"
          sx={{ color: "white" }}
        >
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default LocationPicker;
