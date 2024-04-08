import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Stack, Typography } from "@mui/material";
import { steps } from "../../../utils/data";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type StepType = {
  text: string;
  icon: IconDefinition;
};

const Title = ({ title }: { title: string }) => (
  <Typography sx={{ marginTop: "90px" }} variant="h4">
    {title}
  </Typography>
);

const Step = ({ text, icon }: StepType) => (
  <Stack padding="20px">
    <Typography paddingBottom="20px">{text}</Typography>
    <FontAwesomeIcon size="2xl" icon={icon} />
  </Stack>
);

const RentButton = () => (
  <Stack
    sx={{
      background: "#1089ff",
      maxWidth: "200px",
      cursor: "pointer",
      borderRadius: "5px",
      marginBottom: "50px",
    }}
  >
    <Button sx={{ color: "white", padding: "16px 24px" }}>Rent Your Car</Button>
  </Stack>
);

const ReserveCar = () => {
  return (
    <Box
      sx={{
        background: "white",
        height: "450px",
        width: "770px",
        display: "flex",
        justifyContent: "center",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
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
  );
};

export default ReserveCar;
