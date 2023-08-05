import { Heading, VStack, Center, Flex } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import balls from "../../../../assets/confetti/balls.png";
import sideHeaderCat from "../../../../assets/whackassCatGifs/giphy.gif";
import ImagesRunningLine from "../ImagesRunningLine";
import runningLineCat from "../../../../assets/whackassCatGifs/chat-cat.gif";
import yeetCat from "../../../../assets/whackassCatGifs/cat-dance.gif";
import { useAudio } from "../../../../services/hooks/useAudio";

import bgCat from "../../../../assets/whackassCatGifs/bgCat.gif";

const celebratoryPhrases = [
  "Більше не друзі",
  "Тепер паралельні галактики",
  "Розійшлись як в морі кораблі",
  "Розбили глека",
  "Подали на розлучення",
  "Назавжди посварились",
  "Віддалились на різні полюси",
  "Закрили цю книгу",
  "Вибрали різні шляхи",
  "Завершили свою історію",
  "Стало двох незалежних світів",
  "Закохались у свободу",
  "Спіткались різні долі",
  "Відпустили одне одного",
];

const BallsAbsent = () => {
  const [imageState, setImageState] = useState();
  const [celebratoryHeader, setCelebratoryHeader] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = balls;

    setCelebratoryHeader(
      celebratoryPhrases[Math.round(Math.random() * celebratoryPhrases.length)]
    );

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
          width={{ base: "3rem", md: "6rem" }}
          height={"100vh"}
          orientation={"vertical"}
          left={0}
        />

        <ImagesRunningLine
          source={runningLineCat}
          width={{ base: "3rem", md: "6rem" }}
          height={"100vh"}
          orientation={"vertical"}
          right={0}
        />

        <ImagesRunningLine
          source={runningLineCat}
          height={{ base: "2rem", md: "4rem" }}
          width={"100vw"}
          top={0}
        />

        <ImagesRunningLine
          source={runningLineCat}
          height={{ base: "2rem", md: "4rem" }}
          width={"100vw"}
          bottom={0}
        />

        <Center h={"100vh"} bg={"#041529"} w={"100vw"}>
          <VStack zIndex={10}>
            <ChakraImage src={yeetCat} h={"10rem"} />
            <Heading
              color={"#fce062"}
              fontSize={"3rem"}
              fontWeight={"500"}
              fontFamily={"Rubik Dirt"}
            >
              Кіт і яйця
            </Heading>
            <Flex alignItems={"center"}>
              <ChakraImage
                src={sideHeaderCat}
                h={{ base: "4rem", md: "12rem" }}
              />
              <Heading
                fontSize={{ base: "3rem", md: "6rem" }}
                fontWeight={"300"}
                color={"#faf4d9"}
                fontFamily={"Rubik Beastly"}
                textAlign={"center"}
                maxW={{ base: "13rem", md: "100vw" }}
                textTransform={"uppercase"}
              >
                {celebratoryHeader}
              </Heading>
              <ChakraImage
                src={sideHeaderCat}
                h={{ base: "4rem", md: "12rem" }}
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
