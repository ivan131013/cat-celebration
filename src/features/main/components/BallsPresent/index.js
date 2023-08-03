import { VStack, Center, Heading } from "@chakra-ui/react";
import CountdownTimer from "../../../../features/main/components/CountdownTimer";
import { noBallsDate } from "../../../../services/consts/consts";
import SadBackgroundSlideShow from "../SadBackgroundSlideShow";

const BallsPresent = () => {
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

  return (
    <VStack>
      <Center h={"100vh"} bg={"#041529"} w={"100vw"}>
        <VStack zIndex={10}>
          <Heading
            color={"#fce062"}
            fontSize={"3rem"}
            fontWeight={"500"}
            fontFamily={"Rubik Dirt"}
          >
            {
              catHumiliationPhrases[
                Math.floor(Math.random() * catHumiliationPhrases.length)
              ]
            }
          </Heading>
          <CountdownTimer />
        </VStack>
        <SadBackgroundSlideShow />
      </Center>
    </VStack>
  );
};

export default BallsPresent;
