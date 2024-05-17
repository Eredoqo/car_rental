/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUserLogin } from "@/hooks/useUserLogin";
import { DialogContent, Stack, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { ButtonComponent } from "../button";
import {
  signUpConfirmPassword,
  signUpEmail,
  signUpLastName,
  signUpName,
  signUpNumber,
  signUpPassword,
} from "../styles";

export default function RegisterTextFileds() {
  const { login, isLoading } = useUserLogin();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageConfirmPsw, setErrorMessageConfimPsw] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/;

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <DialogContent sx={{ height: "608px", width: "430px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleRegister}
      >
        <Stack>
          <Typography mb={1} variant="body1">
            Name<span style={{ color: "red", marginLeft: "2px" }}>*</span>
          </Typography>
          <TextField
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={signUpName}
            placeholder="Name"
          />
        </Stack>
        <Stack>
          <Typography mb={1} variant="body1">
            Last Name
            <span style={{ color: "red", marginLeft: "2px" }}>*</span>
          </Typography>
          <TextField
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={signUpLastName}
            placeholder="Last Name"
          />
        </Stack>
        <Stack>
          <Typography mb={1} variant="body1">
            Email<span style={{ color: "red", marginLeft: "2px" }}>*</span>
          </Typography>
          <TextField
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!emailRegex.test(e.target.value)) {
                setErrorMessageEmail("Invalid email format");
              } else {
                setErrorMessageEmail("");
              }
            }}
            sx={signUpEmail}
            placeholder="Email"
          />
          {errorMessageEmail && (
            <Typography sx={{ fontSize: "0.8rem" }} color="error">
              {errorMessageEmail}
            </Typography>
          )}
        </Stack>
        <Stack>
          <Typography mb={1} variant="body1">
            Password
            <span style={{ color: "red", marginLeft: "2px" }}>*</span>
          </Typography>
          <TextField
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (!passwordRegex.test(e.target.value)) {
                setErrorMessagePassword(
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long"
                );
              } else {
                setErrorMessagePassword("");
              }
            }}
            sx={signUpPassword}
            placeholder="Password"
          />
          {errorMessagePassword && (
            <Typography sx={{ fontSize: "0.8rem" }} color="error">
              {errorMessagePassword}
            </Typography>
          )}
        </Stack>
        <Stack>
          <Typography mb={1} variant="body1">
            Confirm Password
            <span style={{ color: "red", marginLeft: "2px" }}>*</span>
          </Typography>
          <TextField
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (password && e.target.value !== password) {
                setErrorMessageConfimPsw("Passwords must match");
              } else {
                setErrorMessageConfimPsw("");
              }
            }}
            sx={signUpConfirmPassword}
            placeholder="Confirm Password"
          />
          {errorMessageConfirmPsw && (
            <Typography sx={{ fontSize: "0.8rem" }} color="error">
              {errorMessageConfirmPsw}
            </Typography>
          )}
        </Stack>
        <Stack>
          <Typography mb={1} variant="body1">
            Number<span style={{ color: "red", marginLeft: "2px" }}>*</span>
          </Typography>
          <TextField
            required
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            sx={signUpNumber}
            placeholder="+1 234567890"
          />
        </Stack>
        <ButtonComponent
          isLoading={isLoading}
          name={name}
          lastName={lastName}
          email={email}
          password={password}
          number={number}
        />
      </form>
    </DialogContent>
  );
}
