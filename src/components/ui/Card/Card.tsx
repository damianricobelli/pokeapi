import React from "react"

import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue
} from "@chakra-ui/react"
interface CardProps {
  content: any
}

const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      role={"group"}
      style={{ cursor: "pointer", transition: "transform .2s" }}
      _hover={{
        transform: "scale(1.1)"
      }}
    >
      <Flex justify={"center"} pt={6}>
        <Avatar
          size={"2xl"}
          src={content.value.sprites.other.dream_world.front_default}
          alt={"Pokemon"}
          css={{
            border: "2px solid white"
          }}
        />
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading
            fontSize={"2xl"}
            textTransform={"capitalize"}
            fontWeight={500}
            fontFamily={"body"}
          >
            {content.value.name}
          </Heading>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600} textTransform={"uppercase"}>
              {content.value.stats[0].stat.name}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {content.value.stats[0].base_stat}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Ataque</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {content.value.stats[1].base_stat}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Defensa</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {content.value.stats[2].base_stat}
            </Text>
          </Stack>
        </Stack>

        <Button
          w={"full"}
          mt={8}
          bg={useColorModeValue("#ff5000", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg"
          }}
        >
          Ver más
        </Button>
      </Box>
    </Box>
  )
}

export default Card
