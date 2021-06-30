import { Component } from 'react'

interface Obj {
  street: string
  n: number
}

interface MainComponentProps {
  title: string
  obj?: Obj
  hasib: (text: string) => void
}

const myArr: (string | number | boolean)[] = [true, 4, 'false']

class MainComponent extends Component<MainComponentProps> {
  render() {
    console.log(myArr)
    return <h1 onClick={() => this.props.hasib('hello!')}>{this.props.title}</h1>
  }
}

export default MainComponent
