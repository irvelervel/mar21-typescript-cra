import { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

// we need to have BOTH the routerProps and our own props
// two solutions:

// 1) extending the RouteComponentProps to our own interface
// 2) is creating an interface with the INTERSECTION of routeComponentProps and our own

// 1)
// interface MyOwnProps extends RouteComponentProps {
// title: string
// }

// 2)
interface MyOwnProps {
  title: string
}

type DetailComponentProps = RouteComponentProps & MyOwnProps

class DetailComponent extends Component<DetailComponentProps> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>{this.props.title}</h1> */}
          <p>{this.props.title}</p>
        </header>
      </div>
    )
  }
}

export default DetailComponent

// const DetailComponent = (props: RouteComponentProps) => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>ROUTED DETAIL COMPONENT</h1>
//         <p>{props.location.pathname}</p>
//       </header>
//     </div>
//   )
// }

// export default DetailComponent
