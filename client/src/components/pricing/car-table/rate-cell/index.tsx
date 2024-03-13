import { useState } from "react";
import { data } from "./../../../../utils/data";
import { Box, Button, Stack, TableCell, Typography } from "@mui/material";

type RateCellProps = {
  rate: number;
  label: string;
};

const RateCell = ({ rate, label }: RateCellProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <TableCell
      sx={{
        background: hovered ? "#00D28D" : "#F2F2F2",
        borderRight: "2px solid white",
        borderBottom: "2px solid white",
        borderRadius: "10px",
        position: "relative",
      }}
      align="center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          opacity: hovered ? 0 : 1,
        }}
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
      </Box>
      <Button
        onMouseEnter={(e) => e.stopPropagation()}
        onMouseLeave={(e) => e.stopPropagation()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          visibility: hovered ? "visible" : "hidden",
          backgroundColor: "#0E89FF !important",
          color: "white",
          opacity: 1,
        }}
      >
        Rent a car
      </Button>
    </TableCell>
  );
};

export default RateCell;
