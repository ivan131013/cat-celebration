import { Image } from "@chakra-ui/react";
import spaceShuttle from "../../../../assets/other/sticker.webp";
import classes from "./styles.module.scss";

const Warcrimes = ({ rotationSpeed }) => {
  return (
    <>
      <Image
        zIndex={10000}
        h={"8rem"}
        w={"8rem"}
        //transform={"scaleX(-1)"}
        src={spaceShuttle}
        position={"fixed"}
        bottom={"1rem"}
        left={"1rem"}
        className={classes.spinnable}
        css={{ animationDuration: 50000 / rotationSpeed + "ms" }}
      />
    </>
  );
};

export default Warcrimes;
