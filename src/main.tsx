import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BookProvider } from './context/books.tsx'
import { FilterBookProvider } from './context/filterBooks.tsx'
import { ListBookProvider } from './context/listBooks.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BookProvider>
    <ListBookProvider>
      <FilterBookProvider>
        <App />
      </FilterBookProvider>
    </ListBookProvider>
  </BookProvider>
)
