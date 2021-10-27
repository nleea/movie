import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Progress } from "../progress/Progress";
import { RatingSIze } from "../rating/Rating";
import axios from "axios";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper(props: any) {
  const theme = useTheme();
  const images = [...props.movies];
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState("");
  const maxSteps = images.length;

  const handleNext = (i: any) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    imagePath(i);
  };

  const handleBack = (i: any) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    imagePath(i);
  };

  const handleStepChange = (step: number) => {
    imagePath(step);
    setActiveStep(step);
  };

  const imagePath = async (index: any) => {
    const data = await axios.get(
      `https://image.tmdb.org/t/p/w500/${images[index].poster_path}`
    );
    setImage(data.config.url!);
    return "";
  };

  return (
    <>
      <div className="card-movies">
        <div className="card-movies_carrousel">
          {images.length === 0 ? null : (
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
              <Paper
                square
                elevation={0}
                className={props.class.color}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 50,
                  pl: 2,
                  bgcolor: "background.default",
                }}
              >
                <Typography style={{ color: "white" }}>
                  {images[activeStep].title}
                </Typography>
              </Paper>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 255,
                          display: "block",
                          maxWidth: 400,
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={image}
                        alt={step.title}
                        key={index}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={props.class.color}
                nextButton={
                  <Button
                    size="small"
                    className="color_button"
                    onClick={() => handleNext(activeStep + 1)}
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
                    className="color_button"
                    onClick={() => handleBack(activeStep - 1)}
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
            </Box>
          )}
        </div>
        <div className="card-movies_info">
          <div className="card-movies_info-description">
            <h1>Description</h1>
            {images[activeStep].overview}
          </div>
          <h4>
            Language: <strong>{images[activeStep].original_language}</strong>
          </h4>

          <div className="card-movies_info-rating">
            <h4>Vote average:</h4>
            <RatingSIze average={images[activeStep].vote_average} />
          </div>
          <div className="card-movies_info-vote">
            <h4>Vote count:</h4>
            <strong>2020</strong>
            <h4>Release</h4>
            <strong>{images[activeStep].release_date}</strong>
          </div>

          <div className="card-movies_info-progress">
            <h4>Popularity: </h4>
            <Progress popularity={images[activeStep].popularity} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SwipeableTextMobileStepper;
