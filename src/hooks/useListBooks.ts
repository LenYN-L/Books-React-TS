import { useContext, useEffect } from "react";
import { ListBookContext } from "../context/listBooks";
import { BookContext } from "../context/books";
import { Book, Library } from "../types";

export const updateLocalStorageBooks = (state: Book[] | Library[]) => {
    window.localStorage.setItem('books', JSON.stringify(state))
}

export const updateLocalStorageBooksList = (state: Book[] | Library[]) => {
    window.localStorage.setItem('booksList', JSON.stringify(state))
}

export function useListBooks () {
    const {books, setBooks} = useContext(BookContext)
    const { listBooks, setListBooks } = useContext(ListBookContext)

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if(event.key === 'booksList') {
                setListBooks(JSON.parse(event.newValue as string))
            }
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }

    },[])

    const addToList = (bookL: Book) => {
        const removeOfBooks = books.filter(({book}) => book.ISBN !== bookL.ISBN) 
        const listBook = [...listBooks, bookL]
        updateLocalStorageBooks(removeOfBooks)
        updateLocalStorageBooksList(listBook)
        setBooks(removeOfBooks)
        return setListBooks(listBook)
    }


    return { listBooks, setListBooks, addToList }
}
