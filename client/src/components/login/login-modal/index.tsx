import { Dialog, DialogTitle, Typography, Divider, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LoginTextFields from "./text-fields";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
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
          <Typography>Log in or Sign up</Typography>
        </Box>
        <Divider />
        <DialogTitle>Welcome to Car Rental</DialogTitle>
        <LoginTextFields />
      </Dialog>
    </>
  );
};

export default LoginModal;
