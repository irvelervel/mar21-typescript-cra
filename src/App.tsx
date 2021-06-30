import './App.css'
import MainComponent from './components/MainComponent'

const myFunction = (text: string) => {
  console.log(text)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainComponent title="First TypeScript component!" hasib={myFunction} />
      </header>
    </div>
  )
}

export default App
