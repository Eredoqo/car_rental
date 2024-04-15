// ButtonComponent.tsx
import { Button, Typography } from "@mui/material";

interface ButtonProps {
  isLoading: boolean;
  name: string;
  lastName: string;
  email: string;
  password: string;
  number: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  isLoading,
  name,
  lastName,
  email,
  password,
  number,
}) => {
  return (
    <Button
      sx={{ color: "#1458D3", height: "50px", borderRadius: "10px" }}
      variant="contained"
      disabled={
        isLoading || !name || !lastName || !email || !password || !number
      }
      color="primary"
    >
      <Typography color="white" variant="button">
        Sign Up
      </Typography>
    </Button>
  );
};
