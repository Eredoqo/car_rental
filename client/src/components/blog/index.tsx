import { Typography, Link, Box, Container, Stack, Button } from "@mui/material";
import Navbar from "../navbar";
import Footer from "../footer";
import About from "../../images/about.jpg";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import Img1 from "./../../images/image_1.jpg";
import Img2 from "./../../images/image_2.jpg";
import Img3 from "./../../images/image_3.jpg";
import { blogData } from "./../../utils/data";

export const blogDataImages = {
  images: [Img1, Img2, Img3],
};

interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard = ({ image, title }: BlogCardProps) => (
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
          padding: "15px 0 15px 0",
          paddingLeft: "37px",
        }}
      >
        {blogData.date.toLocaleDateString()}
        <Typography sx={{ paddingLeft: "25px" }}>{blogData.author}</Typography>
        <FontAwesomeIcon
          style={{ paddingLeft: "25px", paddingTop: "5px" }}
          icon={faCommentAlt}
        />
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "500",
          color: "black",
          marginBottom: "15px",
          width: "90%",
          paddingLeft: "37px",
        }}
      >
        {title}
      </Typography>
      <Typography>{blogData.desc}</Typography>
      <Typography sx={{ paddingLeft: "37px" }}>
        <Button variant="contained">{blogData.button}</Button>
      </Typography>
    </Box>
  </Box>
);

const Breadcrumbs = () => (
  <Typography variant="h6" color="white">
    <Link
      sx={{ textDecoration: "none" }}
      component={RouterLink}
      to="/"
      color="inherit"
    >
      Home <FontAwesomeIcon icon={faChevronRight} />
    </Link>
    <Box component="span" sx={{ ml: 1, color: "white" }}>
      Blog <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  </Typography>
);
const PageTitle = () => (
  <Typography sx={{ marginTop: "15px" }} variant="h3" color="white">
    Our Blog
  </Typography>
);

const Blog = () => {
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
          <Breadcrumbs />
          <PageTitle />
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
