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

export default function Home() {
  const [items, setItems] = useState([])
  const [offsetValue, setOffsetValue] = useState<number>(0)

  useEffect(() => {
    fetchMoreData()
  }, [])

  const fetchMoreData = async () => {
    try {
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
    } catch (error) {
      console.log(error)
    }
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
          style={{ overflow: "hidden" }}
          px={{ base: 0, md: 20 }}
          wrap={"wrap"}
          direction={"row"}
          justify="center"
          align="center"
        >
          {items.map(() => (
            <Box key={uuid()} px={8} py={8}>
              <Card />
            </Box>
          ))}
        </Flex>
      </Stack>
    </>
  )
}
