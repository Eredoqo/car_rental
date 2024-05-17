import { Stack, Typography } from "@mui/material";
import TestimonialsView from "./carousel/index";

const Testimonials = () => {
  return (
    <>
      <section style={{ background: "#f8f9fa" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "6rem" }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              display: "block",
              marginBottom: "5px",
              color: "#1089ff",
              fontWeight: "600",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            TESTIMONIAL
          </Typography>
          <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
            Happy Clients
          </Typography>
        </Stack>
        <TestimonialsView />
      </section>
    </>
  );
};

export default Testimonials;
