export const keyBy = (arr: any, key: string) =>
  arr.reduce((acc, el) => {
    acc[el[key]] = el
    return acc
  }, {})

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
