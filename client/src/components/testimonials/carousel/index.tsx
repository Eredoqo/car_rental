import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardContainer } from "./../../../utils/cardContainer";
import { Card, Typography, Avatar, Box } from "@mui/material";
import "./testimonials.css";

interface TestimonialItem {
  avatar: string;
  name: string;
  title: string;
  desc: string;
}

const TestimonialCard = ({ item }: { item: TestimonialItem }) => (
  <Card
    sx={{
      borderRadius: "10px",
      height: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
    className="testimonial-card"
  >
    <Avatar
      variant="circular"
      src={item.avatar}
      sx={{
        position: "fixed",
        top: 70,
        width: 80,
        height: 80,
        marginBottom: 50,
      }}
    />
    <Box
      sx={{
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          overflow: "hidden",
        }}
        className="testimonial-desc"
        variant="body2"
      >
        {item.desc}
      </Typography>
      <Typography className="testimonial-name" variant="h5">
        {item.name}
      </Typography>
      <Typography className="testimonial-title" variant="subtitle1">
        {item.title}
      </Typography>
    </Box>
  </Card>
);

const TestimonialsView = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} showIndicators={true}>
      {Array.from({ length: Math.ceil(CardContainer.length / 3) }).map(
        (_, index) => (
          <div key={index} className="testimonial-container">
            {CardContainer.slice(index * 3, index * 3 + 3).map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        )
      )}
    </Carousel>
  );
};

export default TestimonialsView;
