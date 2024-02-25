import { Container, Stack, Typography } from "@mui/material";
import TestimonialsView from "./carousel/index";

const Testimonials = () => {
  return (
    <>
      <section>
        <Container>
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
          <Stack
            direction="row"
            sx={{ justifyContent: "space-evenly", paddingBottom: "6rem" }}
          >
            <TestimonialsView />
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
