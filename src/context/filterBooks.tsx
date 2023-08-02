import React, { ReactNode, createContext, useState } from 'react';

interface BookContextType {
    filters: {
        genero: string;
        paginas: number;
        numberOfGenres?: number;
    };
    setFilters: React.Dispatch<
        React.SetStateAction<{
            genero: string;
            paginas: number;
            numberOfGenres?: number;
        }>
    >;
}

export const FilterBookContext = createContext<BookContextType>({
    filters: {
        genero: 'all',
        paginas: 0,
    },
    setFilters: () => { },
});

export const FilterBookProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [filters, setFilters] = useState({
        genero: 'all',
        paginas: 0,
    });
    return (
        <FilterBookContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterBookContext.Provider>
    );
};
