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
  <Box>
    <img
      style={{
        height: "400px",
        width: "400px",
        borderRadius: "20px",
      }}
      alt=""
      src={image}
    />
    <Typography sx={{ color: "#1089ff", padding: "15px 0 15px 0" }}>
      {blogData.date.toLocaleDateString()}
      <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faCommentAlt} />
    </Typography>
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        color: "black",
        marginBottom: "15px",
      }}
    >
      {title}
    </Typography>
    <Button variant="contained">{blogData.button}</Button>
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
        about=""
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
          <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
            {blogData.recentBlog}
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "scenter",
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
