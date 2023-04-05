import React from 'react'
import axios from 'axios'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const initialX = 2
const initialY = 2

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
}

const URL = 'http://localhost:9000/api/result'


export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      message: initialMessage,
      email: initialEmail,
      index: initialIndex,
      steps: initialSteps,
      x: initialX,
      y: initialY
    }
  }

  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  getXY = () => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  reset = () => {
    // Use this helper to reset all states to their initial values.
    this.setState({...this.setState, message: initialMessage})
    this.setState({...this.setState, email: initialEmail})
    this.setState({...this.setState, index: initialIndex})
    this.setState({...this.setState, steps: initialSteps})
    this.setState({...this.setState, x: initialX})
    this.setState({...this.setState, y: initialY})
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.

    if (this.state.index === 0 && direction === 'up') { this.setState({...this.setState, message: "You can't go up", steps: this.state.steps + 1}) }
    if (this.state.index === 0 && direction === 'right') { this.setState({...this.setState, index: 1, message: "", steps: this.state.steps + 1, x: 2, y: 1 }) }
    if (this.state.index === 0 && direction === 'down') { this.setState({...this.setState, index: 3, message: "", steps: this.state.steps + 1, x: 1, y: 2 }) }
    if (this.state.index === 0 && direction === 'left') { this.setState({...this.setState, message: "You can't go left"}) }

    if (this.state.index === 1 && direction === 'up') { this.setState({...this.setState, message: "You can't go up"}) }
    if (this.state.index === 1 && direction === 'right') { this.setState({...this.setState, index: 2, message: "", steps: this.state.steps+1, x: 3, y: 1}) }
    if (this.state.index === 1 && direction === 'down') { this.setState({...this.setState, index: 4, message: "", steps: this.state.steps+1, x: 2, y: 2}) }
    if (this.state.index === 1 && direction === 'left') { this.setState({...this.setState, index: 0, message: "", steps: this.state.steps+1, x: 1, y: 1}) }

    if (this.state.index === 2 && direction === 'up') { this.setState({...this.setState, message: "You can't go up"}) }
    if (this.state.index === 2 && direction === 'right') { this.setState({...this.setState, message: "You can't go right"}) }
    if (this.state.index === 2 && direction === 'down') { this.setState({...this.setState, index: 5, message: "", steps: this.state.steps+1, x: 3, y: 2}) }
    if (this.state.index === 2 && direction === 'left') { this.setState({...this.setState, index: 1, message: "", steps: this.state.steps+1, x: 2, y: 1}) }

    if (this.state.index === 3 && direction === 'up') { this.setState({...this.setState, index: 0, message: "", steps: this.state.steps+1, x: 1, y: 1}) }
    if (this.state.index === 3 && direction === 'right') { this.setState({...this.setState, index: 4, message: "", steps: this.state.steps+1, x: 2, y: 2}) }
    if (this.state.index === 3 && direction === 'down') { this.setState({...this.setState, index: 6, message: "", steps: this.state.steps+1, x: 1, y: 3}) }
    if (this.state.index === 3 && direction === 'left') { this.setState({...this.setState, message: "You can't go left" }) }


    if (this.state.index === 4 && direction === 'up') { this.setState({...this.setState, index: 1, message: "", steps: this.state.steps + 1, x: 2, y: 1}) }
    if (this.state.index === 4 && direction === 'right') { this.setState({...this.setState, index: 5, message: "", steps: this.state.steps + 1, x: 3, y: 2}) }
    if (this.state.index === 4 && direction === 'down') { this.setState({...this.setState, index: 7, message: "", steps: this.state.steps + 1, x: 2, y: 3}) }
    if (this.state.index === 4 && direction === 'left') { this.setState({...this.setState, index: 3, message: "", steps: this.state.steps + 1, x: 1, y: 2}) }

    if (this.state.index === 5 && direction === 'up') { this.setState({...this.setState, index: 2, message: "", steps: this.state.steps+1, x: 3, y: 1}) }
    if (this.state.index === 5 && direction === 'right') { this.setState({...this.setState, message: "You can't go right"}) }
    if (this.state.index === 5 && direction === 'down') { this.setState({...this.setState, index: 8, message: "", steps: this.state.steps+1, x: 3, y: 3}) }
    if (this.state.index === 5 && direction === 'left') { this.setState({...this.setState, index: 4, message: "", steps: this.state.steps+1, x: 2, y: 2}) }

    if (this.state.index === 6 && direction === 'up') { this.setState({...this.setState, index: 3, message: "", steps: this.state.steps+1, x: 1, y: 2}) }
    if (this.state.index === 6 && direction === 'right') { this.setState({...this.setState,index: 7, message: "", steps: this.state.steps+1, x: 2, y: 3}) }
    if (this.state.index === 6 && direction === 'down') { this.setState({...this.setState,  message: "You can't go down"}) }
    if (this.state.index === 6 && direction === 'left') { this.setState({...this.setState,  message: "You can't go left"}) }

    if (this.state.index === 7 && direction === 'up') { this.setState({...this.setState, index: 4, message: "", steps: this.state.steps+1, x: 2, y: 2}) }
    if (this.state.index === 7 && direction === 'right') { this.setState({...this.setState, index: 8, message: "", steps: this.state.steps+1, x: 3, y: 3}) }
    if (this.state.index === 7 && direction === 'down') { this.setState({...this.setState, message: "You can't go down"}) }
    if (this.state.index === 7 && direction === 'left') { this.setState({...this.setState, index: 6, message: "", steps: this.state.steps+1, x: 1, y: 3}) }

    if (this.state.index === 8 && direction === 'up') { this.setState({...this.setState, index: 5, message: "", steps: this.state.steps+1, x: 3, y: 2}) }
    if (this.state.index === 8 && direction === 'right') { this.setState({...this.setState, message: "You can't go right"}) }
    if (this.state.index === 8 && direction === 'down') { this.setState({...this.setState, message: "You can't go down"}) }
    if (this.state.index === 8 && direction === 'left') { this.setState({...this.setState, index: 7, message: "", steps: this.state.steps+1, x: 2, y: 3}) }
  }

  move = (e) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    this.getNextIndex(e.target.id)
  }

  onChange = (e) => {
    // You will need this to update the value of the input.
    e.preventDefault();
    this.setState({...this.setState, email: e.target.value});
  }

  onSubmit = (e) => {
    // Use a POST request to send a payload to the server.
    e.preventDefault();
    axios.post(URL, { "x": this.state.x, "y": this.state.y, "steps": this.state.steps, "email": this.state.email })
    .then(res => {
      console.log(res)
      this.setState({...this.setState, message: res.data.message})
    })
    .catch(err => {
      console.log('something is wrong')
    })

    this.setState({...this.setState, email: initialEmail})

  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
                {idx === this.state.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.move}>LEFT</button>
          <button id="up" onClick={this.move}>UP</button>
          <button id="right" onClick={this.move}>RIGHT</button>
          <button id="down" onClick={this.move}>DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input id="email" type="email" placeholder="type email" onChange={this.onChange} value={this.state.email}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
