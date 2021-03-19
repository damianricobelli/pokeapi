import Head from "next/head"
import { useState, useEffect } from "react"
import axios from "axios"
import Card from "@components/ui/Card"
import uuid from "react-uuid"
import { Container, Heading, Box, Stack, Flex } from "@chakra-ui/react"
import SearchInput from "@components/ui/SearchInput"

export default function Home() {
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
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
          >
            Encuentra tu Pokemón preferido
          </Heading>
        </Stack>
        <SearchInput />
      </Container>
      <Stack as={Box} py={{ base: 10, md: 20 }}>
        <Flex
          px={{ base: 0, md: 10 }}
          wrap={"wrap"}
          direction={"row"}
          justify="center"
          align="center"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
            <Box key={uuid()} px={4} py={4}>
              <Card />
            </Box>
          ))}
        </Flex>
      </Stack>
    </>
  )
}
