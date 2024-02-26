import { Container, Stack, Typography, Grid } from "@mui/material";
import { useEffect } from "react";
import { useGetServices } from "./../../../hooks/useGetServices";
import Service from "./../../../images/services-route.jpg";
import { data } from "./../../../utils/data";

const LatestServices = () => {
  const { services } = useGetServices();

  useEffect(() => {}, [services]);
  return (
    <section style={{ height: "auto", width: "100%", paddingBottom: "60px" }}>
      <div>
        <Container maxWidth="lg">
          <Stack alignItems="center">
            <Typography
              sx={{
                marginTop: "110px",
                fontSize: "12px",
                color: "#1089ff",
                fontWeight: 600,
                letterSpacing: "2px",
                marginBottom: "10px",
              }}
            >
              {data.serviceTitle}
            </Typography>
            <Typography
              sx={{
                paddingBottom: "60px",
                fontSize: "40px",
                fontWeight: 600,
              }}
            >
              {data.serviceDesc}
            </Typography>
          </Stack>
          <Grid
            item
            xs={6}
            sx={{
              width: "100%",
              display: "flex",
              flexiDrection: "row",
              justifyContent: "space-between",
            }}
          >
            {services &&
              Array.isArray(services) &&
              services.map((service, index) => (
                <Stack
                  key={index}
                  sx={{
                    width: "210px",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "40px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{
                        height: "110px",
                        width: "110px",
                        borderRadius: "50%",
                      }}
                      src={Service}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "20px",
                      paddingBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "600",
                    }}
                  >
                    {service.serviceTitle}
                  </Typography>
                  <Typography
                    style={{
                      height: "auto",
                      textAlign: "center",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Stack>
              ))}
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default LatestServices;
