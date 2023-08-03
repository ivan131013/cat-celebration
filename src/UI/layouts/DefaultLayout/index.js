import { Container } from "@chakra-ui/react";

const DefaultLayout = ({ children }) => {
  return <Container minW={"100vw"}>{children}</Container>;
};

export default DefaultLayout;
