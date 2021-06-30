import './App.css'
// import MainComponent from './components/MainComponent'
import FunctionalComponent from './components/FunctionalComponent'

const myFunction = (text: string) => {
  console.log(text)
}

const myAddress = {
  street: 'star avenue',
  n: 10,
}

function App() {
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
