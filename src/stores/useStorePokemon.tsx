import create, { SetState } from "zustand"
import axios from "axios"

type PokemonStore = {
  allPokemons: any
  setAllPokemons: (data: any) => void
}

type FilterStore = {
  types: any
  abilities: any
  habitats: any
  colors: any
  setTypes: (data: any) => void
  setAbilities: (data: any) => void
  setHabitats: (data: any) => void
  setColors: (data: any) => void
}

const URL_ABILITY = "https://pokeapi.co/api/v2/ability?limit=327"
const URL_TYPE = "https://pokeapi.co/api/v2/type"
const URL_COLOR = "https://pokeapi.co/api/v2/pokemon-color"
const URL_HABITAT = "https://pokeapi.co/api/v2/pokemon-habitat"

export const useStorePokemon = create((set: SetState<PokemonStore>) => ({
  allPokemons: false,
  setAllPokemons: (data) => {
    set({ allPokemons: data })
  }
}))

export const useStoreFilterPokemon = create((set: SetState<FilterStore>) => ({
  types: false,
  abilities: false,
  habitats: false,
  colors: false,
  setTypes: async (data) => {
    try {
      const response = await axios.get(URL_TYPE).then((res) => res.data)
      console.log(response)
      const types = response.results.map((type) => type.name)
      set({ types: types })
    } catch (error) {
      console.log(error)
    }
  },
  setAbilities: async (data) => {
    try {
      const response = await axios.get(URL_ABILITY).then((res) => res.data)
      console.log(response)
      const abilities = response.results.map((ability) => ability.name)
      set({ abilities: abilities })
    } catch (error) {
      console.log(error)
    }
  },
  setHabitats: async (data) => {
    try {
      const response = await axios.get(URL_HABITAT).then((res) => res.data)
      console.log(response)
      const habitats = response.results.map((habitat) => habitat.name)
      set({ habitats: habitats })
    } catch (error) {
      console.log(error)
    }
  },
  setColors: async (data) => {
    try {
      const response = await axios.get(URL_COLOR).then((res) => res.data)
      console.log(response)
      const colors = response.results.map((color) => color.name)
      set({ colors: colors })
    } catch (error) {
      console.log(error)
    }
  }
}))
