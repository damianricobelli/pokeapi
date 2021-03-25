export const keyBy = (arr: any, key: string) =>
  arr.reduce((acc: any, el: any) => {
    acc[el[key]] = el
    return acc
  }, {})

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const checkFilters = (el, filters) => {
  let findAbilities: true | undefined | any,
    findTypes: true | undefined | any,
    findColors: true | undefined | any,
    findHabitats: true | undefined | any = undefined
  if (Object.keys(filters.abilities).length !== 0) {
    findAbilities = el.value.abilities.find(
      (ab: any) =>
        typeof filters.abilities[ab.ability?.name] !== "undefined" &&
        typeof filters.abilities[ab.ability?.name] !== null
    )
  } else {
    findAbilities = true
  }
  if (Object.keys(filters.types).length !== 0) {
    findTypes = el.value.types.find(
      (t: any) =>
        typeof filters.types[t.type?.name] !== "undefined" &&
        typeof filters.types[t.type?.name] !== null
    )
  } else {
    findTypes = true
  }
  if (Object.keys(filters.colors).length !== 0) {
    findColors =
      typeof filters.colors[el.value.specie_data.color?.name] !== "undefined" &&
      typeof filters.colors[el.value.specie_data.color?.name] !== null
  } else {
    findColors = true
  }
  if (Object.keys(filters.habitats).length !== 0) {
    findHabitats =
      typeof filters.habitats[el.value.specie_data.habitat?.name] !==
        "undefined" &&
      typeof filters.habitats[el.value.specie_data.habitat?.name] !== null
  } else {
    findHabitats = true
  }
  if (
    findAbilities !== undefined &&
    findTypes !== undefined &&
    findColors &&
    findHabitats
  ) {
    return true
  } else {
    return false
  }
}
