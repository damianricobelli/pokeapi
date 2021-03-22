import { useSWRInfinite } from "swr"
import axios from "axios"
function getStatus({ data, error }) {
  if (error && !data) return "error"
  if (!data) return "loading"
  return "success"
}

const getData = async (url: string) => {
  const data = await axios.get(url)
  return data.data
}

export const fetcher = async (url: string): Promise<any> => {
  const response = await axios.get(url).then((res) => res.data)
  const results = await response.results.map((p: any) => getData(p.url))
  const data = await Promise.allSettled(results)
  return data
}

export const usePokemonData = () => {
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index) => {
      return `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${index * 10}`
    },
    fetcher
  )

  const issues = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty
  const isRefreshing = isValidating && data && data.length === size

  const status = getStatus({ data, error })
  const isLoading = status === "loading"
  const isError = status === "error"
  const isSuccess = status === "success"
  return {
    isLoading,
    isError,
    isSuccess,
    data,
    error,
    issues,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    isRefreshing,
    size,
    setSize
  }
}
