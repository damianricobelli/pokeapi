import { FC } from "react"
import Navbar from "@components/common/Navbar"
import Footer from "@components/common/Footer"
import { Box } from "@chakra-ui/react"

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
        p={2}
        bottom={0}
        right={0}
      >
        <Footer />
      </Box>
    </>
  )
}
