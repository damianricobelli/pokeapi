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
  DrawerFooter
} from "@chakra-ui/react"
import React from "react"
import { CUIAutoComplete } from "chakra-ui-autocomplete"

export interface Item {
  label: string
  value: string
}
const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" }
]

export default function Home({ isOpen, onClose }) {
  const [pickerItems, setPickerItems] = React.useState(countries)
  const [selectedItems, setSelectedItems] = React.useState<Item[]>([])

  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item])
    setSelectedItems((curr) => [...curr, item])
  }

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems)
    }
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
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
                  onCreateItem={handleCreateItem}
                  items={pickerItems}
                  selectedItems={selectedItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedItemsChange(changes.selectedItems)
                  }
                />
              </Box>
              <Box>
                <CUIAutoComplete
                  label="Tipo"
                  placeholder="Escribe el tipo"
                  onCreateItem={handleCreateItem}
                  items={pickerItems}
                  selectedItems={selectedItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedItemsChange(changes.selectedItems)
                  }
                />
              </Box>
              <Box>
                <CUIAutoComplete
                  label="Color"
                  placeholder="Escribe el color"
                  onCreateItem={handleCreateItem}
                  items={pickerItems}
                  selectedItems={selectedItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedItemsChange(changes.selectedItems)
                  }
                />
              </Box>
              <Box>
                <CUIAutoComplete
                  label="Hábitat"
                  placeholder="Escribe el hábitat"
                  onCreateItem={handleCreateItem}
                  items={pickerItems}
                  selectedItems={selectedItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedItemsChange(changes.selectedItems)
                  }
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="orange">Aplicar filtros</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
