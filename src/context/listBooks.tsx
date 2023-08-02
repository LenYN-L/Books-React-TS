import { createContext, useState, FC, ReactNode } from "react";
import { Book } from "../types";

interface ListBookContextValue {
    listBooks: Book[];
    setListBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const ListBookContext = createContext<ListBookContextValue>({
    listBooks: [],
    setListBooks: () => { },
});


const listBooksOfLS: Book[] = JSON.parse(localStorage.getItem("booksList") || "[]");

export const ListBookProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [listBooks, setListBooks] = useState<Book[]>(listBooksOfLS);

    return (
        <ListBookContext.Provider value={{ listBooks, setListBooks }}>
            {children}
        </ListBookContext.Provider>
    );
};
