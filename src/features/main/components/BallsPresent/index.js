import { VStack, Center, Heading, Button, Text, Box } from "@chakra-ui/react";
import CountdownTimer from "../../../../features/main/components/CountdownTimer";
import { noBallsDate } from "../../../../services/consts/consts";
import SadBackgroundSlideShow from "../SadBackgroundSlideShow";
import { useEffect, useRef, useState } from "react";
import RespectLetter from "../RespectLetter/RespectLetter";
import { set, throttle } from "lodash";
import { getPayRespect, postPayRespect } from "../../api/client";
import LovelyFooter from "../LovelyFooter";

const catHumiliationPhrases = [
  "Кота буде зневажено за",
  "Денацифікація кота відбудеться через",
  "Кіт втратить чоловічу гідність через",
  "Відбудеться прощання з котовими сливками за",
  "Кота буде кастровано через:",
  "Кота відправлять на операцію після",
  "Кота позбавлять репродуктивної спроможності після",
  "Коту доведеться стати менш котовим після",
  "Більше котячих попелюшок не буде після",
  "Кота чекає нова фаза життя після",
  "Котові зроблять 'велику річ' після",
  "Святковий конець для котячого потенціалу після",
  "Кота чекає незабутнє відкриття після",
  "Кота відправлять на заслужений відпочинок після",
  "Амурна сторінка в котячій історії стане минулим за",
  "Коту доведеться забути про 'героїчні' вчинки через",
];

const BallsPresent = () => {
  const [respects, setRespects] = useState([]);
  const [respectsGlobalCounter, setRespectsGlobalCounter] = useState(0);

  const [catBallsHeading, setCatBallsHeading] = useState("");
  useEffect(() => {
    getPayRespect()
      .then((response) => response.json())
      .then((data) => {
        setRespectsGlobalCounter(data);
      });

    setCatBallsHeading(
      catHumiliationPhrases[
        Math.floor(Math.random() * catHumiliationPhrases.length)
      ]
    );

    const intervalId = setInterval(() => {
      getPayRespect()
        .then((response) => response.json())
        .then((data) => {
          setRespectsGlobalCounter(data);
        });
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const payRespect = () => {
    try {
      postPayRespect()
        .then((response) => response.json())
        .then((data) => {
          setRespectsGlobalCounter(data);
        });
    } catch (error) {}

    setRespects((prevRespects) => [...prevRespects, "+F"]);
  };

  return (
    <VStack>
      <Center h={"100vh"} bg={"#041529"} w={"100vw"}>
        <LovelyFooter />
        <VStack zIndex={10}>
          <Heading
            color={"#fce062"}
            fontSize={"3rem"}
            fontWeight={"500"}
            fontFamily={"Rubik Dirt"}
          >
            {catBallsHeading}:
          </Heading>
          <CountdownTimer />
          <Box mt="3rem" position="relative">
            <Button
              onClick={payRespect}
              fontSize={"2rem"}
              fontWeight={"800"}
              color="black"
              fontFamily={"Ubuntu Condensed"}
              py="2rem"
              px="5rem"
              bg="yellow.300"
            >
              Press to pay respect
            </Button>
            {respects.map((respect, index) => (
              <RespectLetter key={index}>{respect}</RespectLetter>
            ))}
          </Box>
        </VStack>
        <SadBackgroundSlideShow />
      </Center>
      <Heading
        color={"#fce062"}
        fontSize={"2rem"}
        zIndex={1000}
        fontWeight={"500"}
        fontFamily={"Rubik Dirt"}
        top="1rem"
        left="1rem"
        position="fixed"
      >
        F counter: {respectsGlobalCounter}
      </Heading>
    </VStack>
  );
};

export default BallsPresent;
