import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Stack, Typography } from "@mui/material";
import { steps } from "../../../utils/data";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import LoginModal from "@/components/login/login-modal";

export type StepType = {
  text: string;
  icon: IconDefinition;
};

const Title = ({ title }: { title: string }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "90px",
      textAlign: "center",
    }}
  >
    <Typography variant="h4">{title}</Typography>
  </Box>
);

const Step = ({ text, icon }: StepType) => (
  <Stack padding="20px">
    <Typography paddingBottom="20px">{text}</Typography>
    <FontAwesomeIcon size="2xl" icon={icon} />
  </Stack>
);

const RentButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Stack
        sx={{
          background: "#1089ff",
          maxWidth: "200px",
          cursor: "pointer",
          borderRadius: "5px",
          marginBottom: "50px",
        }}
      >
        <Button
          onClick={handleOpen}
          sx={{ color: "white", padding: "16px 24px" }}
        >
          Rent Your Car
        </Button>
        <LoginModal isOpen={open} onClose={handleClose} />
      </Stack>
    </>
  );
};

const ReserveCar = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: "white",
          maxWidth: "770px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Title title="Better Way to Rent Your Perfect Cars" />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {steps.map((step, index) => (
              <Step key={index} text={step.text} icon={step.icon} />
            ))}
          </Box>
          <RentButton />
        </Stack>
      </Box>
    </Box>
  );
};

export default ReserveCar;
