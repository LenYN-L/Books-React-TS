import { useContext } from "react"
import { FilterBookContext } from "../context/filterBooks"
import { Library } from "../types"


export function useFilters() {
    const { filters, setFilters } = useContext(FilterBookContext)

    const handleChangeOnPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters(prevState => ({
          ...prevState,
          paginas: parseInt(event.target.value)
      }))
  }

  const handleChangeGenre = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFilters(prevState => ({
          ...prevState,
          genero: event.target.value
      }))
  }

    const filterBooks = (library: Library[] ) => {
      return library.filter(({ book }) => {
        return book.pages > filters.paginas && (filters.genero === 'all' || book.genre === filters.genero)
      })
    }
    return { filters, filterBooks, setFilters, handleChangeOnPage, handleChangeGenre }
  }
