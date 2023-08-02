import { useContext, useEffect } from "react";
import { BookContext } from "../context/books";
import { ListBookContext } from "../context/listBooks";
import { Book } from "../types";
import { updateLocalStorageBooks, updateLocalStorageBooksList } from "./useListBooks";

export function useBooks () {
    const {books, setBooks} = useContext(BookContext)
    const { listBooks, setListBooks } = useContext(ListBookContext)

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if(event.key === 'books') {
                setBooks(JSON.parse(event.newValue as string))
            }
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }

    },[])
    
    const removeOfList = (bookL: Book) => {
        const removeOfList = listBooks.filter((book) => book.ISBN !== bookL.ISBN)
        const listBook = [...books, {book: bookL}] 
        updateLocalStorageBooks(listBook)
        updateLocalStorageBooksList(removeOfList)
        setListBooks(removeOfList)
        return setBooks(listBook)
    }
    return {books, removeOfList}
}
