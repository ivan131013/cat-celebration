import { Box } from "@chakra-ui/react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { shuffle } from "../../../../services/functions/array";

const SadBackgroundSlideShow = () => {
  const images = require.context("../../../../assets/slides", true);
  const imageList = shuffle(images.keys().map((image) => images(image)));

  return (
    <Box
      position={"absolute"}
      width={"100%"}
      height={"100%"}
      zIndex={1}
      opacity={0.5}
    >
      <Fade arrows={false} infinite={true} duration={5000}>
        {imageList.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", maxHeight: "100vh" }}
              src={fadeImage}
            />
          </div>
        ))}
      </Fade>
    </Box>
  );
};

export default SadBackgroundSlideShow;
