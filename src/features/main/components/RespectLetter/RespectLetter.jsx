import { Heading, Text, keyframes } from "@chakra-ui/react";
import React from "react";

const RespectLetter = ({ children }) => {
  const animation = keyframes`
        from { top: -2rem; opacity: 1}
        to {top: -10rem; opacity: 0}
    `;
  return (
    <Heading
      animation={`${animation} 1 3s linear forwards`}
      whiteSpace="nowrap"
      pointerEvents="none"
      color={"#fce062"}
      zIndex={1000}
      fontWeight={"500"}
      fontFamily={"Rubik Dirt"}
      textShadow="black 3px 3px"
      fontSize={'3rem'}
      position="absolute"
      top="-2rem"
      left="50%"
      transform="translateX(-50%)"
    >
      {children}
    </Heading>
  );
};

export default RespectLetter;
