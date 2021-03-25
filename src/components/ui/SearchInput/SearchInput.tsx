import React, { Dispatch, SetStateAction } from "react"
import { GoSearch } from "react-icons/go"
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"

interface SearchInput {
  value: string
  changed: Dispatch<SetStateAction<string>>
  allData: any
}

function SearchInput({ value, changed, allData }: SearchInput) {
  return (
    <InputGroup w={{ base: "full", sm: "60%", md: "70%" }}>
      <InputLeftElement
        pointerEvents="none"
        children={<GoSearch color="#ff5000" />}
      />
      <Input
        focusBorderColor="#ff5000"
        type="text"
        disabled={allData}
        placeholder={allData ? "Cargando Pokédex..." : "Buscar Pokémon"}
        value={value}
        onChange={(e) => changed(e.target.value)}
      />
    </InputGroup>
  )
}

export default SearchInput
