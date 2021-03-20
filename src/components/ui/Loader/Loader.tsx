import { Spinner } from "@chakra-ui/react"

const Loader = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="#ff5000"
    size="xl"
  />
)

export default Loader
