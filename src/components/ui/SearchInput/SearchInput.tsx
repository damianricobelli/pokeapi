import React from "react"
import { GoSearch } from "react-icons/go"
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"

function SearchLocationInput({}) {
  return (
    <InputGroup w={{ base: "full", sm: "80%" }}>
      <InputLeftElement
        pointerEvents="none"
        children={<GoSearch color="#ff5000" />}
      />
      <Input
        focusBorderColor="#ff5000"
        type="text"
        placeholder="Buscar pokemón"
      />
    </InputGroup>
  )
}

export default SearchLocationInput
