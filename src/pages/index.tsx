import Head from "next/head"
import { useState, useEffect } from "react"
import axios from "axios"
import Card from "@components/ui/Card"
import uuid from "react-uuid"
import {
  Container,
  Heading,
  Box,
  Stack,
  Flex,
  useColorModeValue
} from "@chakra-ui/react"
import SearchInput from "@components/ui/SearchInput"
import { Alert as AlertError } from "@components/ui/Alert"
import { SkeletonCard } from "@components/ui/Skeleton"
import { useBottomScrollListener } from "react-bottom-scroll-listener"

export default function Home() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [offsetValue, setOffsetValue] = useState<number>(0)

  useEffect(() => {
    fetchMoreData()
  }, [])

  const fetchMoreData = async () => {
    try {
      setLoading(true)
      const url = "https://pokeapi.co/api/v2/pokemon"
      const response = await axios.get(url, {
        params: {
          limit: 10,
          offset: offsetValue
        }
      })
      const pokemons = response.data
      setItems([...items, ...pokemons.results.reverse()])
      setOffsetValue((prevValue) => prevValue + 10)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  useBottomScrollListener(fetchMoreData)

  let content = null

  if (items.length > 0) {
    content = items.map(() => (
      <Box key={uuid()} px={8} py={8}>
        <Card />
      </Box>
    ))
  } else {
    content = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
      <Box key={uuid()} px={8} py={8}>
        <SkeletonCard />
      </Box>
    ))
  }

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
        <SearchInput />
      </Container>
      <Stack as={Box} py={{ base: 10, md: 20 }}>
        <Flex
          px={{ base: 0, md: 20 }}
          wrap={"wrap"}
          direction={"row"}
          justify="center"
          align="center"
        >
          {error ? <AlertError /> : content}
        </Flex>
      </Stack>
    </>
  )
}
