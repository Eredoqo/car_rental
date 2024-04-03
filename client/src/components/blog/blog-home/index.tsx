import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { blogData } from "./../../../utils/data";
import Img1 from "./../../../images/image_1.jpg";
import Img2 from "./../../../images/image_2.jpg";
import Img3 from "./../../../images/image_3.jpg";

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
        height: "300px",
        width: "400px",
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
        alignItems: "flex-start",
        width: "100%",
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
      <Typography sx={{ paddingLeft: "37px" }}>
        <Button variant="contained">{blogData.button}</Button>
      </Typography>
    </Box>
  </Box>
);

const BlogHome = () => {
  return (
    <section>
      <Container
        maxWidth={false}
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
            {blogData.blog}
          </Typography>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "600", paddingBottom: "70px" }}
          >
            {blogData.recentBlog}
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {blogDataImages.images.map((image, index) => (
            <BlogCard key={index} image={image} title={blogData.title} />
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default BlogHome;
