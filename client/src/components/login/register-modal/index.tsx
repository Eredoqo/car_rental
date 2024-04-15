import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Box, Typography, Divider } from "@mui/material";
import RegisterTextFileds from "./text-fields";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const RegisterModal = ({ isOpen, onClose }: Props) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "15px",
          },
        }}
        open={isOpen}
        onClose={onClose}
      >
        <Box
          sx={{
            position: "relative",
            padding: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            onClick={handleClose}
            icon={faX}
            style={{ position: "absolute", left: "20px", cursor: "pointer" }}
          />
          <Typography>Sign up</Typography>
        </Box>
        <Divider />
        <RegisterTextFileds />
      </Dialog>
    </>
  );
};
