export const signUpName = {
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
};

export const signUpLastName = { ...signUpName };
export const signUpEmail = { ...signUpName };
export const signUpPassword = { ...signUpName };
export const signUpConfirmPassword = { ...signUpName };
export const signUpNumber = {
  ...signUpName,
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
};
