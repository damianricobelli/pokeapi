import { FC } from "react"
import Image from "next/image"
import {
  IconButton,
  Flex,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"

const DarkModeButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Flex align="center" justify="center" direction="column">
        <IconButton
          focusBorderColor={"blue.400"}
          aria-label="Toggle mode"
          size="lg"
          bg={useColorModeValue("transparent", "transparent")}
          onClick={() => toggleColorMode()}
          icon={
            colorMode === "light" ? (
              <Image
                width={24}
                height={24}
                src="/assets/img/snorlax.svg"
                alt="Snorlax"
              />
            ) : (
              <Image
                width={24}
                height={24}
                src="/assets/img/charmander.svg"
                alt="Snorlax"
              />
            )
          }
        />
      </Flex>
    </div>
  )
}

export default DarkModeButton
