import './App.css'
// import MainComponent from './components/MainComponent'
import FunctionalComponent from './components/FunctionalComponent'
import { useState, useEffect } from 'react'

const myFunction = (text: string) => {
  console.log(text)
}

const myAddress = {
  street: 'star avenue',
  n: 10,
}

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getFoodBooks = async () => {
      try {
        let response = await fetch('https://striveschool-api.herokuapp.com/food-books')
        console.log(response)
        let books = await response.json()
        setBooks(books)
      } catch (error) {
        console.log('error')
      }
    }
    getFoodBooks()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <MainComponent title="First TypeScript component!" hasib={myFunction} obj={myAddress} /> */}
        <FunctionalComponent title="HELLO" subTitle="SUBTITLE HERE" />
      </header>
    </div>
  )
}

export default App
