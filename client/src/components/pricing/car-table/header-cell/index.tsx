import { TableCell } from "@mui/material";

type HeaderCellProps = {
  background: string;
  label: string;
};
const HeaderCell = ({ background, label }: HeaderCellProps) => (
  <TableCell
    style={{
      width: "220px",
      background: background,
      borderRight: "2px solid white",
      textAlign: "center",
      borderRadius: "10px",
      borderBottom: "2px solid white",
    }}
  >
    {label}
  </TableCell>
);

export default HeaderCell;
