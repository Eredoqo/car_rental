import { InputLabel, Stack } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DropOffDate = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const inputLabelStyle = { color: "black", padding: "7px" };

  return (
    <Stack>
      <InputLabel
        sx={{ inputLabelStyle, padding: "20px", color: "white" }}
        htmlFor="drop-off-date"
      >
        DROP-OFF DATE
      </InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="DROP-OFF DATE"
          value={value}
          onChange={(newValue: Dayjs | null) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default DropOffDate;
