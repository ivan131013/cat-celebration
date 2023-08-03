import { Image, Heading, Box } from "@chakra-ui/react";
import useMousePosition from "../../hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y, angle } = useMousePosition();

  return (
    <Image
      position={"fixed"}
      width={"3rem"}
      height={"3rem"}
      top={y + "px"}
      left={x + "px"}
      pointerEvents={"none"}
      transform={"rotate(" + angle + "rad)"}
      src={
        "https://thumbs.gfycat.com/FittingValuableJavalina-size_restricted.gif"
      }
      zIndex={999999}
    />
  );
};

export default CustomCursor;
