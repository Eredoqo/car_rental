import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

interface NumberProps {
  number: number;
  text: string;
}
const NumberBox = ({ number }: NumberProps) => (
  <Box
    p={1}
    sx={{
      backgroundImage:
        "linear-gradient(to right, rgba(192, 219, 255, 1) 100%, transparent 100%)",
      borderRadius: 1,
    }}
  >
    <Typography fontSize="50px" variant="h4" color="primary">
      <CountUp end={number} />
    </Typography>
  </Box>
);

const TextTypography = ({ text }: NumberProps) => (
  <Typography sx={{ marginLeft: "20px", fontSize: "20px" }} variant="body1">
    {text}
  </Typography>
);

const AboutNumbers: React.FC = () => {
  const data = [
    { number: 60, text: "Year Experienced" },
    { number: 1090, text: "Total Cars" },
    { number: 2590, text: "Happy Customers" },
    { number: 67, text: "Total Branches" },
  ];

  return (
    <Box height="150px">
      <Container>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box display="flex" flexDirection="row" alignItems="center" p={2}>
                <NumberBox number={item.number} text={""} />
                <TextTypography text={item.text} number={0} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutNumbers;
