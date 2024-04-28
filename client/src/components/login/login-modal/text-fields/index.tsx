import { useUserLogin } from "@/hooks/useUserLogin";
import { Global, css } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  DialogContent,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useState } from "react";
// import GoogleLogin, {
//   GoogleLoginResponse,
//   GoogleLoginResponseOffline,
// } from "react-google-login";
import LoginSignUpButton from "../buttons";
import { useNavigate } from "react-router-dom";

export default function LoginTextFields() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { login, isLoading } = useUserLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleLogin called");

    try {
      const isAdmin = await login(email, password);

      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // const responseGoogle = (
  //   response: GoogleLoginResponse | GoogleLoginResponseOffline
  // ) => {
  //   console.log(response);
  // };

  return (
    <DialogContent sx={{ height: "480px", width: "430px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        onSubmit={handleLogin}
      >
        <Global
          styles={css`
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 30px white inset !important;
            }
          `}
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mt: "5px",
            "& .MuiInputBase-root": {
              borderRadius: "10px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "& .Mui-focused": {
              backgroundColor: "transparent",
            },
            "& .MuiFilledInput-underline:after": {
              backgroundColor: "transparent",
            },
            "& .MuiFormLabel-root.Mui-focused": {
              color: "black",
            },
          }}
          label="Email"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "10px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "& .Mui-focused": {
              backgroundColor: "transparent",
            },
          }}
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          sx={{ color: "#1458D3", height: "50px", borderRadius: "10px" }}
          variant="contained"
          disabled={isLoading || !email || !password}
          color="primary"
        >
          <Typography color="white" variant="button">
            Login
          </Typography>
        </Button>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ width: "40%", alignSelf: "center" }}
          />
          <Typography>or</Typography>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ width: "40%", alignSelf: "center" }}
          />
        </Stack>
        {/* 
        <GoogleLogin
          clientId="YOUR_CLIENT_ID"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          style={{
            borderRadius: "10px",
            border: "1px solid black !important",
            boxShadow: "none",
          }}
        /> */}
      </form>
      <LoginSignUpButton />
    </DialogContent>
  );
}
