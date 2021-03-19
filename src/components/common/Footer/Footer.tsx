import React from "react"
import Link from "next/link"
import {
  Flex,
  IconButton,
  Box,
  useColorModeValue,
  Link as ChakraLink
} from "@chakra-ui/react"
import { AiOutlineHome, AiFillGithub } from "react-icons/ai"
import { BiDonateHeart } from "react-icons/bi"
import DarkModeButton from "@components/ui/DarkModeButton"

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      border={1}
      width={"100%"}
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.700")}
      borderStyle={"solid"}
      borderRadius={"lg"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex direction={"row"} p={2} justify="space-between" align="center">
        <Link href="/">
          <IconButton
            size="lg"
            variant={"outline"}
            border={"none"}
            aria-label="Search database"
            icon={<AiOutlineHome />}
          />
        </Link>
        <Link href="/author">
          <IconButton
            size="lg"
            variant={"outline"}
            border={"none"}
            aria-label="Author"
            icon={<BiDonateHeart />}
          />
        </Link>
        <ChakraLink
          isExternal
          href={"https://github.com/damianricobelli/weather-app"}
        >
          <IconButton
            size="lg"
            variant={"outline"}
            border={"none"}
            aria-label="Repository"
            icon={<AiFillGithub />}
          />
        </ChakraLink>
        <DarkModeButton />
      </Flex>
    </Box>
  )
}

export default Footer
