import Head from "next/head"
import Card from "@components/ui/Card"
import uuid from "react-uuid"
import { useMemo } from "react"
import {
  Container,
  Heading,
  Box,
  Stack,
  Flex,
  Button,
  Center,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react"
import SearchInput from "@components/ui/SearchInput"
import Drawer from "@components/ui/Drawer"
import { Alert as AlertError } from "@components/ui/Alert"
import { SkeletonCard } from "@components/ui/Skeleton"
import { usePokemonData } from "@hooks/usePokemonData"

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    data,
    error,
    size,
    setSize,
    isLoadingMore,
    isReachingEnd
  } = usePokemonData()

  const content = useMemo(() => {
    if (error) {
      return <AlertError />
    }
    if (!data) {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <Box key={uuid()} px={8} py={8}>
          <SkeletonCard />
        </Box>
      ))
    } else {
      return Object.keys(data).map((key) => {
        const filters = data[key].filter((el) => el.status === "fulfilled")
        return filters.map((el) => (
          <Box key={uuid()} px={8} py={8}>
            <Card content={el} />
          </Box>
        ))
      })
    }
  }, [data, error])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"4xl"} px={10}>
        <Stack as={Box} textAlign={"center"} py={{ base: 10, md: 20 }}>
          <Heading
            fontWeight={600}
            color={useColorModeValue("#424242", "gray.300")}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
          >
            Encuentra tu Pokemón preferido
          </Heading>
        </Stack>
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-around"
        >
          <SearchInput />
          <Button
            bg={useColorModeValue("#ff5000", "gray.900")}
            color={"white"}
            w={{ base: "full", sm: "10%" }}
            mt={{ base: 4, sm: 0 }}
            onClick={onOpen}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
          >
            Filtrar
          </Button>
        </Flex>
      </Container>
      <Stack as={Box} py={{ base: 0, md: 10 }}>
        <Flex
          px={{ base: 0, md: 20 }}
          wrap={"wrap"}
          direction={"row"}
          justify="center"
          align="center"
        >
          {content}
        </Flex>
      </Stack>
      <Center>
        <Button
          disabled={isLoadingMore || isReachingEnd}
          mb={20}
          colorScheme="blue"
          isLoading={isLoadingMore}
          loadingText="Cargando..."
          onClick={() => setSize(size + 1)}
        >
          {isReachingEnd ? "No hay más Pokemones" : "Cargar más"}
        </Button>
      </Center>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
