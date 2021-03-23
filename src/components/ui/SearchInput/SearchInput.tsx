import React from "react"
import { GoSearch } from "react-icons/go"
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"

function SearchLocationInput({ value, changed }) {
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
        value={value}
        onChange={(e) => changed(e.target.value)}
      />
    </InputGroup>
  )
}

export default SearchLocationInput
