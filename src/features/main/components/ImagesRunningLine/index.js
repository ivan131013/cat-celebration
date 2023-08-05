import { HStack, Box, Stack } from "@chakra-ui/react";
import React from "react";
import classes from "./styles.module.scss";

const ImagesRunningLine = ({
  height,
  width,
  source,
  orientation = "horizontal",
  top,
  left,
  ...rest
}) => {
  return (
    <Stack
      zIndex={1000000}
      width={width}
      height={height}
      bgImage={source}
      orientation={orientation ?? "horizontal"}
      backgroundRepeat={orientation === "vertical" ? "repeat-y" : "repeat-x"}
      backgroundSize={"contain"}
      className={classes.shiftedBgClass}
      position={"absolute"}
      top={top}
      left={left}
      {...rest}
    ></Stack>
  );
};

export default ImagesRunningLine;
