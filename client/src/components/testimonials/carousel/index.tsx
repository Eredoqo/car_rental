import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CardContainer } from "./../../../utils/cardContainer";
import { Card, Typography, Avatar } from "@mui/material";

const TestimonialsView = () => {
  return (
    <section>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        {CardContainer.filter((_, index) => index % 3 === 0).map(
          (card, index) => (
            <div
              key={card.id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {CardContainer.slice(index * 3, index * 3 + 3).map((item) => (
                <Card
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "1em",
                    width: " 17%",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowX: "hidden",
                    borderRadius: "25px",
                    border: "1px solid #00D28D",
                    boxShadow: "0px 3px 6px #00D28D",
                  }}
                >
                  <Avatar variant="circular" sizes="40px" src={item.avatar} />
                  <Typography
                    color="#1089ff"
                    paddingTop="10px"
                    paddingBottom="10px"
                    variant="h5"
                  >
                    {item.name}
                  </Typography>
                  <Typography paddingBottom="10px" variant="subtitle1">
                    {item.title}
                  </Typography>
                  <Typography
                    paddingLeft="20px"
                    paddingRight="20px"
                    variant="body2"
                  >
                    {item.desc}
                  </Typography>
                </Card>
              ))}
            </div>
          )
        )}
      </Carousel>
    </section>
  );
};

export default TestimonialsView;
