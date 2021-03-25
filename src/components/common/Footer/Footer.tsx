import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  Flex,
  IconButton,
  Box,
  useColorModeValue,
  Link as ChakraLink
} from "@chakra-ui/react"
import { AiOutlineHome, AiFillGithub, AiOutlineSearch } from "react-icons/ai"
import { BiDonateHeart } from "react-icons/bi"
import DarkModeButton from "@components/ui/DarkModeButton"

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const router = useRouter()
  console.log(router)
  console.log(router.pathname)
  const handleTop = () => {
    if (router.pathname !== "/") {
      router.push("/")
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
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
            aria-label="Home"
            icon={<AiOutlineHome />}
          />
        </Link>
        <IconButton
          size="lg"
          variant={"outline"}
          border={"none"}
          onClick={() => handleTop()}
          aria-label="Search database"
          icon={<AiOutlineSearch />}
        />
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
          href={"https://github.com/damianricobelli/pokeapi"}
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
