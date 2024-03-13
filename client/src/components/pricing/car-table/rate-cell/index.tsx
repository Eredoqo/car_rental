import { data } from "./../../../../utils/data";
import { Box, Stack, TableCell, Typography } from "@mui/material";

type RateCellProps = {
  rate: number;
  label: string;
};

const RateCell = ({ rate, label }: RateCellProps) => (
  <TableCell
    sx={{
      background: "#F2F2F2",
      borderRight: "2px solid white",
      borderBottom: "2px solid white",
      borderRadius: "10px",
    }}
    align="center"
  >
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ marginRight: "5px" }} color="#0E89FF">
          ${rate}
        </Typography>
        <Typography>{label}</Typography>
      </Box>
      <Typography mt={1}>{data.pricing.fuelSurcharges}</Typography>
    </Stack>
  </TableCell>
);

export default RateCell;
