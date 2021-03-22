import { FC } from "react"
import Navbar from "@components/common/Navbar"
import Footer from "@components/common/Footer"
import { Box, useColorModeValue } from "@chakra-ui/react"

interface LayoutProps {
  pageProps: any
}

export const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <main>{children}</main>
      <Box
        display={{ base: "flex", md: "none" }}
        position={"fixed"}
        w={"100%"}
        bg={useColorModeValue("gray.50", "gray.800")}
        px={2}
        pb={2}
        bottom={0}
        right={0}
      >
        <Footer />
      </Box>
    </>
  )
}
