import { Heading, VStack, Center, Flex } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import balls from "../../../../assets/confetti/balls.png";
import sideHeaderCat from "../../../../assets/whackassCatGifs/giphy.gif";
import ImagesRunningLine from "../ImagesRunningLine";
import runningLineCat from "../../../../assets/whackassCatGifs/chat-cat.gif";
import { useAudio } from "../../../../services/hooks/useAudio";

import bgCat from "../../../../assets/whackassCatGifs/bgCat.gif";

const BallsAbsent = () => {
  const [imageState, setImageState] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = balls;

    image.onload = () => {
      setImageState(image);
    };
  }, []);

  return (
    <>
      <VStack position={"relative"} p={0}>
        <ChakraImage
          src={bgCat}
          position={"absolute"}
          bottom={0}
          h={"100vh"}
          w={"100vw !important"}
          opacity={0.5}
        />
        <ImagesRunningLine
          source={runningLineCat}
          width={"6rem"}
          height={"100vh"}
          orientation={"vertical"}
          left={0}
        />

        <ImagesRunningLine
          source={runningLineCat}
          width={"6rem"}
          height={"100vh"}
          orientation={"vertical"}
          right={0}
        />

        <ImagesRunningLine
          source={runningLineCat}
          height={"4rem"}
          width={"100vw"}
          top={0}
        />

        <ImagesRunningLine
          source={runningLineCat}
          height={"4rem"}
          width={"100vw"}
          bottom={0}
        />

        <Center h={"100vh"} bg={"#041529"} w={"100vw"}>
          <VStack zIndex={10}>
            <Heading
              color={"#fce062"}
              fontSize={"3rem"}
              fontWeight={"500"}
              fontFamily={"Rubik Dirt"}
            >
              Кіт і яйця
            </Heading>
            <Flex alignItems={"center"}>
              <ChakraImage src={sideHeaderCat} h={"12rem"} />
              <Heading
                fontSize={"6rem"}
                fontWeight={"300"}
                color={"#faf4d9"}
                fontFamily={"Rubik Beastly"}
              >
                БІЛЬШЕ НЕ ДРУЗІ
              </Heading>
              <ChakraImage
                src={sideHeaderCat}
                h={"12rem"}
                transform={"scaleX(-1)"}
              />
            </Flex>
          </VStack>
        </Center>
      </VStack>
      <Confetti />
      <Confetti
        numberOfPieces={50}
        particleSize={100}
        drawShape={(ctx) => {
          ctx.drawImage(imageState, 0, 0, 50, 50);
        }}
      />
    </>
  );
};

export default BallsAbsent;
