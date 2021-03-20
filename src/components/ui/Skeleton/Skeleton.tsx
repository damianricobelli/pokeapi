import React from "react"

import {
  Box,
  Flex,
  Stack,
  Skeleton,
  SkeletonCircle,
  useColorModeValue
} from "@chakra-ui/react"

export const SkeletonCard = ({}) => {
  return (
    <Box
      w={"270px"}
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
      <Skeleton h={"120px"} w={"full"} />
      <Flex justify={"center"} mt={-12}>
        <SkeletonCircle
          size={"90px"}
          css={{
            border: "2px solid white"
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Stack>

        <Skeleton
          w={"full"}
          mt={8}
          bg={useColorModeValue("#151f21", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg"
          }}
        ></Skeleton>
      </Box>
    </Box>
  )
}
