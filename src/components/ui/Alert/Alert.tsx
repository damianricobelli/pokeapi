import {
  Container,
  Alert as AlertChakra,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react"

export const Alert = () => (
  <Container maxW={"4xl"}>
    <AlertChakra status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Hubo un problema cargando los pokemones.</AlertTitle>
      <AlertDescription>
        Por favor, intenta nuevamente más tarde.
      </AlertDescription>
    </AlertChakra>
  </Container>
)
