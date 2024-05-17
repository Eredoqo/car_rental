import PickUpDate from "./pick-up-date";
import DropOffDate from "./drop-off-date";
import { Stack } from "@mui/material";

const DatePickerForm = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <PickUpDate />

        <DropOffDate />
      </Stack>
    </>
  );
};
export default DatePickerForm;
