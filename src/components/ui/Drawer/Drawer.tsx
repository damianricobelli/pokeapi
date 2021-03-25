import {
  Box,
  Stack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useColorModeValue
} from "@chakra-ui/react"
import React from "react"
import { CUIAutoComplete } from "chakra-ui-autocomplete"
import { useStoreFilterPokemon } from "@stores/useStorePokemon"

export interface Item {
  label: string
  value: string
}

export default function Home({ isOpen, onClose }) {
  const {
    types,
    abilities,
    habitats,
    colors,
    setAllFilters
  } = useStoreFilterPokemon()

  const [typeItems, setTypeItems] = React.useState(types)
  const [selectedTypeItems, setSelectedTypeItems] = React.useState<Item[]>([])

  const handleCreateTypeItem = (item: Item) => {
    setTypeItems((curr) => [...curr, item])
    setSelectedTypeItems((curr) => [...curr, item])
  }

  const handleSelectedTypeItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedTypeItems(selectedItems)
    }
  }

  const [abilityItems, setAbilityItems] = React.useState(abilities)
  const [selectedAbilityItems, setSelectedAbilityItems] = React.useState<
    Item[]
  >([])

  const handleCreateAbilityItem = (item: Item) => {
    setAbilityItems((curr) => [...curr, item])
    setSelectedAbilityItems((curr) => [...curr, item])
  }

  const handleSelectedAbilityItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedAbilityItems(selectedItems)
    }
  }

  const [habitatItems, setHabitatItems] = React.useState(habitats)
  const [selectedHabitatItems, setSelectedHabitatItems] = React.useState<
    Item[]
  >([])

  const handleCreateHabitatItem = (item: Item) => {
    setHabitatItems((curr) => [...curr, item])
    setSelectedHabitatItems((curr) => [...curr, item])
  }

  const handleSelectedHabitatItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedHabitatItems(selectedItems)
    }
  }

  const [colorItems, setColorItems] = React.useState(colors)
  const [selectedColorItems, setSelectedColorItems] = React.useState<Item[]>([])

  const handleCreateColorItem = (item: Item) => {
    setColorItems((curr) => [...curr, item])
    setSelectedColorItems((curr) => [...curr, item])
  }

  const handleSelectedColorItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedColorItems(selectedItems)
    }
  }

  const handleSetFilters = () => {
    const data = {
      types: selectedTypeItems,
      abilities: selectedAbilityItems,
      habitats: selectedHabitatItems,
      colors: selectedColorItems
    }
    setAllFilters(data)
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Filtra tus Pokemón
          </DrawerHeader>

          <DrawerBody>
            <Stack>
              <Box mt={10}>
                <CUIAutoComplete
                  label="Habilidad"
                  placeholder="Escribe la habilidad"
                  onCreateItem={handleCreateAbilityItem}
                  items={abilityItems}
                  listStyleProps={{
                    bg: useColorModeValue("white", "gray.800")
                  }}
                  listItemStyleProps={{
                    color: useColorModeValue("black", "#ff5000")
                  }}
                  selectedItems={selectedAbilityItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedAbilityItemsChange(changes.selectedItems)
                  }
                />
              </Box>
              <Box>
                <CUIAutoComplete
                  label="Tipo"
                  placeholder="Escribe el tipo"
                  onCreateItem={handleCreateTypeItem}
                  items={typeItems}
                  listStyleProps={{
                    bg: useColorModeValue("white", "gray.800")
                  }}
                  listItemStyleProps={{
                    color: useColorModeValue("black", "#ff5000")
                  }}
                  selectedItems={selectedTypeItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedTypeItemsChange(changes.selectedItems)
                  }
                />
              </Box>
              <Box>
                <CUIAutoComplete
                  label="Color"
                  placeholder="Escribe el color"
                  onCreateItem={handleCreateColorItem}
                  items={colorItems}
                  listStyleProps={{
                    bg: useColorModeValue("white", "gray.800")
                  }}
                  listItemStyleProps={{
                    color: useColorModeValue("black", "#ff5000")
                  }}
                  selectedItems={selectedColorItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedColorItemsChange(changes.selectedItems)
                  }
                />
              </Box>
              <Box>
                <CUIAutoComplete
                  label="Hábitat"
                  placeholder="Escribe el hábitat"
                  onCreateItem={handleCreateHabitatItem}
                  items={habitatItems}
                  listStyleProps={{
                    bg: useColorModeValue("white", "gray.800")
                  }}
                  listItemStyleProps={{
                    color: useColorModeValue("black", "#ff5000")
                  }}
                  selectedItems={selectedHabitatItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedHabitatItemsChange(changes.selectedItems)
                  }
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="orange" onClick={() => handleSetFilters()}>
              Aplicar filtros
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
