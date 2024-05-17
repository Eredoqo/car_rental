import { InputLabel, TextField } from "@mui/material";

const TimePicker = () => {
  const inputLabelStyle = { color: "black", padding: "7px" };
  return (
    <>
      <InputLabel
        sx={{ ...inputLabelStyle, marginBottom: "10px", color: "white" }}
        htmlFor="pick-up-time"
      >
        PICK-UP TIME
      </InputLabel>
      <TextField
        fullWidth
        id="pick-up-time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
          style: { color: "white" },
        }}
        sx={{ alignSelf: "flex-start" }}
      />
    </>
  );
};
export default TimePicker;
