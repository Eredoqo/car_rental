import { Box } from "@mui/material";
import { LayoutWrapper } from "../../admin-home";
import InventoryCard from "./inventory-card";

export default function Inventory() {
  return (
    <>
      <LayoutWrapper>
        <Box sx={{ padding: "20px 0" }}>
          <InventoryCard />
        </Box>
      </LayoutWrapper>
    </>
  );
}
