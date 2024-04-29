import { Typography, Box, Container, Stack, Button } from "@mui/material";
import Navbar from "../navbar";
import Footer from "../footer";
import About from "../../images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import Img1 from "./../../images/image_1.jpg";
import Img2 from "./../../images/image_2.jpg";
import Img3 from "./../../images/image_3.jpg";
import { blogData } from "./../../utils/data";
import { Breadcrumbs, PageTitle } from "@/utils/utils";
import { useState } from "react";
import LoginModal from "../login/login-modal";

export const blogDataImages = {
  images: [Img1, Img2, Img3],
};

interface BlogCardProps {
  image: string;
  title: string;
}
interface WidgetProps {
  pageTitle: string;
}

const BlogCard = ({ image, title }: BlogCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          borderRadius: "10px",
          objectFit: "cover",
        }}
        alt=""
        src={image}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            color: "#1089ff",
            padding: "25px 0 15px 0",
          }}
        >
          {blogData.date.toLocaleDateString()}
          <Typography sx={{ paddingLeft: "25px" }}>
            {blogData.author}
          </Typography>
          <FontAwesomeIcon
            onClick={() => console.log("Comment")}
            style={{
              paddingLeft: "25px",
              paddingTop: "5px",
              cursor: "pointer",
            }}
            icon={faCommentAlt}
          />
        </Typography>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "500",
            color: "black",
            marginBottom: "20px",
            "&:hover": {
              color: "#1089ff",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#999999" }}
          paddingBottom="30px"
          width="70%"
        >
          {blogData.decsFirstPart}
        </Typography>
        <Typography sx={{ paddingLeft: "37px", paddingBottom: "50px" }}>
          <Button onClick={handleOpen} variant="contained">
            {blogData.continue}
          </Button>
          <LoginModal isOpen={open} onClose={handleClose} />
        </Typography>
      </Box>
    </Box>
  );
};

const Blog = ({ pageTitle = "Default Page" }: WidgetProps) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pb: 3,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            ml: 25,
            mb: 3,
          }}
        >
          <Breadcrumbs currentPage={pageTitle} />
          <PageTitle title={pageTitle ? pageTitle.toUpperCase() : ""} />
        </Container>
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px",
        }}
      >
        {blogDataImages.images.map((image, index) => (
          <BlogCard key={index} image={image} title={blogData.title} />
        ))}
      </Stack>
      <Footer />
    </>
  );
};

export default Blog;
