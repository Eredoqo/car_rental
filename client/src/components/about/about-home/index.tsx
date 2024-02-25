import { Box, Stack, Typography } from "@mui/material";
import Photo1 from "../../../images/bg_1.jpg";

const About = () => {
  return (
    <>
      <Box>
        <Stack>
          <Typography>
            <img
              style={{ height: "100%", width: "100%", borderRadius: "20px" }}
              src={Photo1}
              alt=""
            />
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default About;
