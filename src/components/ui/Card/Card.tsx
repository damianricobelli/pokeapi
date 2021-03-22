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

import { useColor } from "color-thief-react"
interface CardProps {
  content: any
}

const Card: React.FC<CardProps> = ({ content }) => {
  const { data, loading, error } = useColor(
    content.value.sprites.other["official-artwork"].front_default,
    "hex",
    { crossOrigin: "Anonymous", quality: 100 }
  )

  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      role={"group"}
      style={{ cursor: "pointer", transition: "transform .2s" }}
      _hover={{
        transform: "scale(1.1)"
      }}
    >
      <Box h={"60px"} w={"full"} bg={data} />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"2xl"}
          src={content.value.sprites.other.dream_world.front_default}
          alt={"Author"}
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
          <Text color={"gray.500"}>Frontend Developer</Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600} textTransform={"capitalize"}>
              {content.value.stats[0].stat.name}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {content.value.stats[0].base_stat}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
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
          Follow
        </Button>
      </Box>
    </Box>
  )
}

export default Card
