import './App.css'
import { Header } from './components/Header'
import { ListOfBooks } from './components/ListOfBooks'
import Books from './components/AllBooks'
import { useListBooks } from './hooks/useListBooks'


function App() {

  const { listBooks } = useListBooks()

  return (
    <div className='bg-black text-white p-7 font-serif w-full'>
      <Header ></Header>
      <div className='grid grid-cols-3 gap-7'>
        <div className={listBooks.length === 0 ? 'col-span-3' : 'col-span-2'}>
          <Books></Books>
        </div>
        <div className={listBooks.length === 0 ? 'hidden' : 'block'}>
          <ListOfBooks></ListOfBooks>
        </div>
      </div>
    </div>
  )
}

export default App
