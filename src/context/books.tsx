import { FC, ReactNode, createContext, useState } from 'react'
import library from '../../../../books.json'
import { Library } from '../types';


interface BookContextValue {
    books: Library[];
    setBooks: React.Dispatch<React.SetStateAction<Library[]>>;
}

export const BookContext = createContext<BookContextValue>({
    books: [],
    setBooks: () => { }
})

const booksOfLS = JSON.parse(localStorage.getItem('books') || JSON.stringify(library.library))

export const BookProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [books, setBooks] = useState(booksOfLS)

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    )
}
