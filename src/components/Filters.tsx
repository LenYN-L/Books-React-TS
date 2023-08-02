// import { useBooks } from "../hooks/useBooks"
import { useFilters } from "../hooks/useFilters"

const Filters = () => {
    const { filters, handleChangeOnPage, handleChangeGenre } = useFilters()
    // const { books } = useBooks()
    // const genero = new Set(books.map((book) => book.book.genre))
    // console.log(genero)


    return (
        <div className="flex flex-col">
            <h2 className="text-7xl text-center">
                Original Books 🏴‍☠️
            </h2>
            <div className="flex flex-row gap-7 p-4">
                <div className="bg-slate-800/70 p-3 rounded-xl">
                    <label className="text-4xl pr-5" htmlFor="Paginas">Paginas</label>
                    <input type="range" id="Paginas" min={0} max={2000} onChange={handleChangeOnPage} />
                    <span className="text-4xl pl-4">{filters.paginas}</span>
                </div>
                <div className="bg-slate-800/70 p-3 rounded-md">
                    <label className="text-4xl pr-5" htmlFor="Genero">Genero</label>
                    <select className="text-black text-xl w-40 h-10 bg-red-100" name="filter" id="Genero" onChange={handleChangeGenre}>
                        <option value="all">Todos</option>
                        <option value="Fantasía">Fantasía</option>
                        <option value="Ciencia ficción">Ciencia ficción</option>
                        <option value="Zombies">Zombies</option>
                        <option value="Terror">Terror</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters