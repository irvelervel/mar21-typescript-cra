import { Component, ChangeEvent, FormEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface FormComponentState {
  name: string
  email: string
}

class FormComponent extends Component<RouteComponentProps, FormComponentState> {
  state: FormComponentState = {
    name: '',
    email: '',
  }

  inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id as 'name' | 'email'
    // name || email
    // id now will ONLY be 'name' or 'email'

    this.setState({
      ...this.state,
      [id]: e.target.value,
      // [id] is not 'id' anymore, it's 'name' or 'email'
      //   name: e.target.value,
      //   email: e.target.value,
    })
  }

  submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>FORM HERE!!</h1>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="text"
                id="name"
                placeholder="insert name"
                onChange={this.inputHandler}
                value={this.state.name}
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                placeholder="insert email"
                value={this.state.email}
                onChange={this.inputHandler}
              />
            </div>
            <button type="submit">CLICK ME!</button>
          </form>
        </header>
      </div>
    )
  }
}

export default FormComponent
