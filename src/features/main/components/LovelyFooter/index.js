import { Text } from "@chakra-ui/react";

const LovelyFooter = () => {
  return (
    <Text
      position={"absolute"}
      bottom={"1rem"}
      right={"1rem"}
      color={"white"}
      fontSize={{ base: "0.5rem", md: "0.75rem" }}
      width={"15rem"}
    >
      Розроблено з любовʼю❤️ командою професіоналів під впливом: Тетерів
      Вишневий, Hike, Stella Artois, Guiness, Закарпатського, Опілля, Blanc
    </Text>
  );
};

export default LovelyFooter;
