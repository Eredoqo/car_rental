import React, { useState, useEffect } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import imageBlog1 from "./../../../images/image_1.jpg";
import imageBlog2 from "./../../../images/image_2.jpg";
import imageBlog3 from "./../../../images/image_3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const BlogHome = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section style={{ background: "#f8f9fa" }}>
      <Container
        sx={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
        }}
      >
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography
            sx={{
              fontSize: "18px",
              display: "block",
              color: "#1089ff",
              fontWeight: "600",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Blog
          </Typography>
          <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
            Recent Blog
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "4rem 0 4rem 0",
          }}
        >
          <Box sx={{ paddingRight: "30px" }}>
            <img
              style={{ height: "300px", width: "100%", borderRadius: "20px" }}
              alt=""
              src={imageBlog1}
            />
            <Typography sx={{ color: "#1089ff", padding: "15px 0 15px 0" }}>
              {date.toLocaleDateString()}
              <FontAwesomeIcon
                style={{ paddingLeft: "25px" }}
                icon={faCommentAlt}
              />
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "black",
                marginBottom: "15px",
              }}
            >
              Why Lead Generation is Key for Business Growth
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
          <Box sx={{ paddingRight: "30px" }}>
            <img
              style={{ height: "300px", width: "100%", borderRadius: "20px" }}
              alt=""
              src={imageBlog2}
            />
            <Typography sx={{ color: "#1089ff", padding: "15px 0 15px 0" }}>
              {date.toLocaleDateString()}
              <FontAwesomeIcon
                style={{ paddingLeft: "25px" }}
                icon={faCommentAlt}
              />
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "black",
                marginBottom: "15px",
              }}
            >
              Why Lead Generation is Key for Business Growth
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
          <Box sx={{ paddingRight: "30px" }}>
            <img
              style={{ height: "300px", width: "100%", borderRadius: "20px" }}
              alt=""
              src={imageBlog3}
            />
            <Typography sx={{ color: "#1089ff", padding: "15px 0 15px 0" }}>
              {date.toLocaleDateString()}
              <FontAwesomeIcon
                style={{ paddingLeft: "25px" }}
                icon={faCommentAlt}
              />
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "black",
                marginBottom: "15px",
              }}
            >
              Why Lead Generation is Key for Business Growth
            </Typography>
            <Typography sx={{ justifyContent: "center" }}>
              <Button variant="contained">Learn More</Button>
            </Typography>
          </Box>
          <Box></Box>
          <Box></Box>
        </Stack>
      </Container>
    </section>
  );
};

export default BlogHome;
