import { useBooks } from "../hooks/useBooks"
import { useListBooks } from "../hooks/useListBooks"

export function ListOfBooks() {
    const { listBooks } = useListBooks()
    const { removeOfList } = useBooks()
    return (
        <div className="text-2xl w-full">
            <h2 className="p-7">{listBooks.length} Libros en la lista</h2>
            <ul className="border-white rounded-lg border-2 p-7 grid grid-cols-me gap-7 bg-slate-900">
                {listBooks.map((book) => {
                    return (
                        <li key={book.ISBN}>
                            <button onClick={() => removeOfList(book)}>
                                <img src={book.cover} alt={book.title} />
                            </button>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
