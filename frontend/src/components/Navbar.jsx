import {
  Container,
  HStack,
  Flex,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

import { Icon } from "@chakra-ui/react";
import { PiPlusSquareBold } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: "column",
          sd: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          backgroundClip="text"
        >
          <Link to={"/"}>MERN CATALOOG</Link>
        </Text>

        <HStack spacing={2} alignItems="center">
          <Link to={"/create"}>
            <Button>
              <Icon as={PiPlusSquareBold} fontSize={24} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <Icon as={IoMdMoon} fontSize={20} />
            ) : (
              <Icon as={MdOutlineWbSunny} fontSize={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
