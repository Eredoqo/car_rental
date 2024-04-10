/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useUserLogin } from "../../hooks/useUserLogin";
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
import { useLocationStore } from "../../state/locationState";

export default function Login() {
  const { login, isLoading } = useUserLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const { location, setLocation } = useLocationStore();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setLoginOpen(true)}
      >
        Open Login
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setRegisterOpen(true)}
      >
        Open Register
      </Button>

      <Dialog open={isLoginOpen} onClose={() => setLoginOpen(false)}>
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

      <Dialog open={isRegisterOpen} onClose={() => setRegisterOpen(false)}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "250px",
            }}
            onSubmit={handleRegister}
          >
            <TextField
              fullWidth
              label="First Name"
              // Add state handling for first name
            />
            <TextField
              fullWidth
              label="Last Name"
              // Add state handling for last name
            />
            <TextField
              fullWidth
              label="Email"
              // Add state handling for email
            />
            <TextField
              fullWidth
              label="Phone"
              // Add state handling for phone
            />
            <TextField
              fullWidth
              label="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button type="submit" disabled={isLoading} color="primary">
              Register
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
