import { Card } from "@mui/material";

import FilterWeek from "./filter-week";

export default function CarListingCard() {
  return (
    <>
      <Card sx={{ borderRadius: "20px", width: "760px", flexShrink: 0 }}>
        <FilterWeek />
      </Card>
    </>
  );
}
