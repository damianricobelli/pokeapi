import Link from "next/link"
import {
  Box,
  Flex,
  Heading,
  Stack,
  Link as ChakraLink,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react"

import DarkModeButton from "@components/ui/DarkModeButton"

export default function WithSubnavigation() {
  return (
    <Box p={2}>
      <Flex
        minH={"60px"}
        boxShadow="lg"
        bg={useColorModeValue("white", "gray.700")}
        borderStyle={"solid"}
        borderRadius={"lg"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Heading
              style={{ cursor: "pointer" }}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("#ff5000", "orange.500")}
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            >
              PokePlace
            </Heading>
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10} mt={2}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          display={{ base: "none", md: "flex" }}
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <DarkModeButton />
        </Stack>
      </Flex>
    </Box>
  )
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.label === "Repository" ? (
            <ChakraLink
              isExternal
              p={4}
              fontSize={"sm"}
              fontWeight={500}
              _hover={{
                textDecoration: "none"
              }}
              href="https://github.com/damianricobelli/covid-19"
              color={useColorModeValue("gray.600", "gray.200")}
            >
              {navItem.label}
            </ChakraLink>
          ) : (
            <Link href={navItem.href}>
              <ChakraLink
                p={4}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none"
                }}
                color={useColorModeValue("gray.600", "gray.200")}
              >
                {navItem.label}
              </ChakraLink>
            </Link>
          )}
        </Box>
      ))}
    </Stack>
  )
}

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Author",
    href: "/author"
  },
  {
    label: "Repository",
    href: "https://github.com/damianricobelli/weather-app"
  }
]
