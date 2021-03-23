import React from "react"

import {
  Box,
  Flex,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  useColorModeValue
} from "@chakra-ui/react"

export const SkeletonCard = ({}) => {
  return (
    <Box
      w={{ base: "300px", sm: "270px" }}
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
      <Flex justify={"center"} pt={6}>
        <SkeletonCircle
          size={"140px"}
          css={{
            border: "2px solid white"
          }}
        />
      </Flex>

      <Box p={6}>
        <SkeletonText mt="4" mb="8" noOfLines={4} spacing="4" />
        <Skeleton height={"40px"} />
      </Box>
    </Box>
  )
}
