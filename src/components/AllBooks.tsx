import { useListBooks } from "../hooks/useListBooks"
import { useBooks } from "../hooks/useBooks"
import { useFilters } from "../hooks/useFilters"

const Books = () => {

    const { books } = useBooks()
    const { filterBooks, filters } = useFilters()
    const filteredBooks = filterBooks(books)
    const { addToList } = useListBooks()
    return (
        <main className="border-white rounded-lg border-2 p-7 text-2xl">
            <div className="flex flex-wrap gap-7 border-b-4 mb-5 pb-5">
                <h2>{books.length} - Libros Totales Disponibles</h2>
                <h3>{filters.genero === 'all' ? '' : `${filteredBooks.length} - Libros disponibles del genero ${filters.genero}`}</h3>
            </div>
            <ul className="grid grid-cols-me gap-1">
                {filteredBooks.map(({ book }) => {
                    return (
                        <li className="w-52" key={book.ISBN}>
                            <button onClick={() => addToList(book)} >
                                <img src={book.cover} className="w-48" />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Books
