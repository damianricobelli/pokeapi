import Head from "next/head"
import Card from "@components/ui/Card"
import uuid from "react-uuid"
import axios from "axios"
import { useMemo, useState, useEffect } from "react"
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
import { Alert as AlertError, AlertNotFound } from "@components/ui/Alert"
import Loader from "@components/ui/Loader"
import { SkeletonCard } from "@components/ui/Skeleton"
import { usePokemonData } from "@hooks/usePokemonData"

const URL = "https://pokeapi.co/api/v2/pokemon/"

const getData = async (url: string) => {
  const data = await axios.get(url)
  return data.data
}

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchValue, setSearchValue] = useState<string>("")
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonsSearched, setPokemonsSearched] = useState(null)
  const [searchLoading, setSearchLoading] = useState<boolean>(false)

  const {
    data,
    error,
    size,
    setSize,
    isLoadingMore,
    isReachingEnd
  } = usePokemonData()

  let content = useMemo(() => {
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

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios
          .get(URL, { params: { limit: 1118 } })
          .then((res) => res.data)
        const results = await response.results.map((p: any) => {
          const url = p.url.split("/")
          if (
            url[url.length - 2] !== "25" &&
            url[url.length - 2] !== "519" &&
            url[url.length - 2] !== "10036"
          )
            return getData(p.url)
        })
        const data = await Promise.allSettled(results)
        console.log(data)
        setAllPokemons([data])
      } catch (error) {
        console.log(error)
      }
    }
    getPokemons()
  }, [])

  useEffect(() => {
    const getSearchResult = async (value: string) => {
      const filtered = allPokemons[0].filter(
        (el: any) =>
          el.status === "fulfilled" && el.value && el.value.name.includes(value)
      )
      let searchFiltered = filtered.map((el) => (
        <Box key={uuid()} px={8} py={8}>
          <Card content={el} />
        </Box>
      ))
      if (searchFiltered.length === 0) {
        searchFiltered = <AlertNotFound />
      }
      setPokemonsSearched(searchFiltered)
    }
    if (searchValue === "") {
      setPokemonsSearched(null)
    } else {
      setSearchLoading(true)
    }
    const delayDebounceFn = setTimeout(() => {
      if (searchValue !== "") {
        getSearchResult(searchValue)
        setSearchLoading(false)
      } else {
        setSearchLoading(false)
      }
    }, 500)
    return () => clearTimeout(delayDebounceFn)
  }, [searchValue])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"4xl"} px={10} pb={{ base: 10, sm: 10, md: 0 }}>
        <Stack as={Box} textAlign={"center"} py={{ base: 10, md: 20 }}>
          <Heading
            fontWeight={600}
            color={useColorModeValue("#424242", "gray.300")}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          >
            Encuentra tu Pokémon preferido
          </Heading>
        </Stack>
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-around"
        >
          <SearchInput
            value={searchValue}
            allData={typeof allPokemons[0] === "undefined"}
            changed={setSearchValue}
          />
          <Button
            bg={useColorModeValue("#ff5000", "orange.500")}
            color={"white"}
            w={{ base: "full", sm: "20" }}
            mt={{ base: 4, sm: 0 }}
            onClick={onOpen}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
          >
            Filtros
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
          {searchLoading ? (
            <Loader />
          ) : pokemonsSearched && searchValue !== "" ? (
            pokemonsSearched
          ) : (
            content
          )}
        </Flex>
      </Stack>
      <Center>
        {!searchLoading && searchValue === "" && (
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
        )}
      </Center>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
