import {
  Container,
  Center,
  Alert as AlertChakra,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react"

export const Alert = () => (
  <Container maxW={"xl"}>
    <AlertChakra
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      rounded={"xl"}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Hubo un problema cargando los Pokemones.
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Por favor, intenta nuevamente más tarde.
      </AlertDescription>
    </AlertChakra>
  </Container>
)

export const AlertNotFound = () => (
  <Container maxW={"xl"}>
    <AlertChakra
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      rounded={"xl"}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        ¡No encontramos ningún Pokémon!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Por favor, intenta con otro nombre.
      </AlertDescription>
    </AlertChakra>
  </Container>
)
