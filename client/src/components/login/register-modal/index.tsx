/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUserLogin } from "@/hooks/useUserLogin";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RegisterModal = ({ isOpen, onClose }: any) => {
  const { login, isLoading } = useUserLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent sx={{ height: "350px", width: "250px" }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            onSubmit={handleRegister}
          >
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading} color="primary">
              Register
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
