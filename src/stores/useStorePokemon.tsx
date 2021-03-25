import create, { SetState } from "zustand"
import { capitalizeFirstLetter } from "@utils/functions"
import axios from "axios"

type PokemonStore = {
  allPokemons: boolean | any
  setAllPokemons: (data: any) => void
}

type FilterStore = {
  types: boolean | any
  abilities: boolean | any
  habitats: boolean | any
  colors: boolean | any
  filters: boolean | any
  setTypes: () => void
  setAbilities: () => void
  setHabitats: () => void
  setColors: () => void
  setAllFilters: (data: any) => void
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
  filters: false,
  setTypes: async () => {
    try {
      const response = await axios.get(URL_TYPE).then((res) => res.data)
      const types = response.results.map((type) => ({
        value: type.name,
        label: capitalizeFirstLetter(type.name)
      }))
      set({ types: types })
    } catch (error) {
      console.log(error)
    }
  },
  setAbilities: async () => {
    try {
      const response = await axios.get(URL_ABILITY).then((res) => res.data)
      const abilities = response.results.map((ability) => ({
        value: ability.name,
        label: capitalizeFirstLetter(ability.name)
      }))
      set({ abilities: abilities })
    } catch (error) {
      console.log(error)
    }
  },
  setHabitats: async () => {
    try {
      const response = await axios.get(URL_HABITAT).then((res) => res.data)
      const habitats = response.results.map((habitat) => ({
        value: habitat.name,
        label: capitalizeFirstLetter(habitat.name)
      }))
      set({ habitats: habitats })
    } catch (error) {
      console.log(error)
    }
  },
  setColors: async () => {
    try {
      const response = await axios.get(URL_COLOR).then((res) => res.data)
      const colors = response.results.map((color) => ({
        value: color.name,
        label: capitalizeFirstLetter(color.name)
      }))
      set({ colors: colors })
    } catch (error) {
      console.log(error)
    }
  },
  setAllFilters: async (data) => {
    set({ filters: data })
  }
}))
