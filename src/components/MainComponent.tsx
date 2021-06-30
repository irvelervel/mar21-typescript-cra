import { Component } from 'react'

interface Obj {
  street: string
  n?: number
}

interface MainComponentProps {
  title: string
  obj?: Obj
  hasib: (text: string) => void
}

interface MainComponentState {
  count: number
}

class MainComponent extends Component<MainComponentProps, MainComponentState> {
  state: MainComponentState = {
    count: 0,
  }

  render() {
    return (
      <>
        <h1 onClick={() => this.props.hasib('hello!')}>{this.props.title}</h1>
        <div
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          {this.state.count}
        </div>
      </>
    )
  }
}

export default MainComponent
