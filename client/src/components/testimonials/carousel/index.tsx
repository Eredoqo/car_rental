import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Stack, Typography } from "@mui/material";
import { CardContainer } from "./../../../utils/cardContainer";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = CardContainer.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: React.SetStateAction<number>) => {
    setActiveStep(step);
  };

  return (
    <section>
      <Stack maxWidth="800px">
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
        >
          {CardContainer.map((card) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={card.id}
            >
              <Box
                sx={{
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  background: "#f8f9fa",
                  height: "280px",
                  width: "600px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                }}
              >
                <Stack sx={{ paddingTop: "30px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  ></Avatar>
                </Stack>

                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "30px",
                    paddingTop: "30px",
                  }}
                >
                  <Typography
                    sx={{ textAlign: "center", padding: "0 5px 0 5px" }}
                  >
                    {card.desc}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "20px",
                      marginBottom: 0,
                      color: "#000000",
                      paddingBottom: "30px",
                      paddingTop: "30px",
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#1089ff",
                    }}
                  >
                    {card.title}
                  </Typography>
                </Stack>
              </Box>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{ paddingTop: "40px" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Stack>
    </section>
  );
}

export default SwipeableTextMobileStepper;
