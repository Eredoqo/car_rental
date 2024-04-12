/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useUserLogin } from "../../../hooks/useUserLogin";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogin,
} from "react-google-login";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LoginModal = ({ isOpen, onClose }: any) => {
  const { login, isLoading } = useUserLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent sx={{ height: "350px", width: "250px" }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            onSubmit={handleLogin}
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
              Login
            </Button>
            <GoogleLogin
              clientId="YOUR_CLIENT_ID"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginModal;
