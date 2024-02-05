import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack, Typography } from "@mui/material";

const ReserveCar = () => {
  return (
    <Stack
      sx={{
        background: "grey",
        height: "450px",
        width: "770px",
        display: "flex",
        justifyContent: "center",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Stack marginLeft="60px" gap={3}>
        <Typography>Better Way to Rent Your Perfect Cars</Typography>
        <Stack>
          <Typography>
            <FontAwesomeIcon color="#1089ff" icon={faHandshake} />
          </Typography>
          <Typography></Typography>
          <Typography></Typography>
        </Stack>
        <Stack
          sx={{
            background: "#1089ff",
            maxWidth: "350px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          <Button sx={{ color: "white", padding: "16px 24px" }}>
            Reserve Your Car
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReserveCar;
