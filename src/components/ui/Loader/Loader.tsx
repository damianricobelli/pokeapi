import { Spinner, Center } from "@chakra-ui/react"

const Loader = () => (
  <Center>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#ff5000"
      size="xl"
    />
  </Center>
)

export default Loader
