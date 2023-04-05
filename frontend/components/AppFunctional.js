import React from 'react'
import { useState } from 'react'
import axios from 'axios'


// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const initialX = 2;
const initialY = 2;
const grid = ["(1, 1)", "(1, 2)", "(1, 3)", "(2, 1)", "(2, 2)", "(2, 3)", "(3, 1)", "(3, 2)", "(3, 3)"];
const URL = 'http://localhost:9000/api/result'


export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);
  const [index, setIndex] = useState(initialIndex);
  const [steps, setSteps] = useState(initialSteps);
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  function getXY() {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
    setMessage(initialMessage);
    setEmail(initialEmail);
    setIndex(initialIndex);
    setSteps(initialSteps);
    setX(initialX);
    setY(initialY);
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.

    if (index === 0 && direction === 'up') { setMessage("You can't go up"); setSteps(steps+1) }
    if (index === 0 && direction === 'right') { setIndex(1); setMessage(""); setSteps(steps+1); setX(2); setY(1) }
    if (index === 0 && direction === 'down') { setIndex(3); setMessage(""); setSteps(steps+1); setX(1); setY(2) }
    if (index === 0 && direction === 'left') { setMessage("You cant go left") }

    if (index === 1 && direction === 'up') { setMessage("You can't go up") }
    if (index === 1 && direction === 'right') { setIndex(2); setMessage(""); setSteps(steps+1); setX(3); setY(1) }
    if (index === 1 && direction === 'down') { setIndex(4); setMessage(""); setSteps(steps+1); setX(2); setY(2) }
    if (index === 1 && direction === 'left') { setIndex(0); setMessage(""); setSteps(steps+1); setX(1); setY(1) }

    if (index === 2 && direction === 'up') { setMessage("You can't go up") }
    if (index === 2 && direction === 'right') { setMessage("You can't go right") }
    if (index === 2 && direction === 'down') { setIndex(5); setMessage(""); setSteps(steps+1); setX(3); setY(2) }
    if (index === 2 && direction === 'left') { setIndex(1); setMessage(""); setSteps(steps+1); setX(2); setY(1) }

    if (index === 3 && direction === 'up') { setIndex(0); setMessage(""); setSteps(steps+1); setX(1); setY(1) }
    if (index === 3 && direction === 'right') { setIndex(4); setMessage(""); setSteps(steps+1); setX(2); setY(2) }
    if (index === 3 && direction === 'down') { setIndex(6); setMessage(""); setSteps(steps+1); setX(1); setY(3) }
    if (index === 3 && direction === 'left') { setMessage("You can't go left") }

    if (index === 4 && direction === 'up') { setIndex(1); setMessage(""); setSteps(steps+1); setX(1); setY(2) }
    if (index === 4 && direction === 'right') { setIndex(5); setMessage(""); setSteps(steps+1); setX(3); setY(2) }
    if (index === 4 && direction === 'down') { setIndex(7); setMessage(""); setSteps(steps+1); setX(2); setY(3) }
    if (index === 4 && direction === 'left') { setIndex(3); setMessage(""); setSteps(steps+1); setX(1); setY(2) }

    if (index === 5 && direction === 'up') { setIndex(2); setMessage(""); setSteps(steps+1); setX(3); setY(1) }
    if (index === 5 && direction === 'right') { setMessage("You can't go right") }
    if (index === 5 && direction === 'down') { setIndex(8); setMessage(""); setSteps(steps+1); setX(3); setY(3) }
    if (index === 5 && direction === 'left') { setIndex(4); setMessage(""); setSteps(steps+1); setX(2); setY(2) }

    if (index === 6 && direction === 'up') { setIndex(3); setMessage(""); setSteps(steps+1); setX(1); setY(2) }
    if (index === 6 && direction === 'right') { setIndex(7); setMessage(""); setSteps(steps+1); setX(2); setY(3) }
    if (index === 6 && direction === 'down') { setMessage("You can't go down") }
    if (index === 6 && direction === 'left') { setMessage("You can't go left") }

    if (index === 7 && direction === 'up') { setIndex(4); setMessage(""); setSteps(steps+1); setX(2); setY(2) }
    if (index === 7 && direction === 'right') { setIndex(8); setMessage(""); setSteps(steps+1); setX(3); setY(3) }
    if (index === 7 && direction === 'down') { setMessage("You can't go down") }
    if (index === 7 && direction === 'left') { setIndex(6); setMessage(""); setSteps(steps+1); setX(1); setY(3) }

    if (index === 8 && direction === 'up') { setIndex(5); setMessage(""); setSteps(steps+1); setX(3); setY(2) }
    if (index === 8 && direction === 'right') { setMessage("You can't go right") }
    if (index === 8 && direction === 'down') { setMessage("You can't go down") }
    if (index === 8 && direction === 'left') { setIndex(7); setMessage(""); setSteps(steps+1); setX(2); setY(3) }
  }

  function move(e) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    getNextIndex(e.target.id)
  }

  function onChange(e) {
    // You will need this to update the value of the input.
    console.log(e)
    e.preventDefault();
    setEmail(e.target.value);
    if (e.target.validity.valid === false) {
      setMessage("Ouch: email must be a valid email")
    }

  }

  function onSubmit(e) {
    console.log(e)
    e.preventDefault();
    axios.post(URL, { "x": x, "y": y, "steps": steps, "email": email })
    .then(res => {
      console.log(res)
      setMessage(res.data.message)
    })
    .catch(err => {
      setMessage("Ouch: email is required")
    })

    setEmail(initialEmail)
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({x}, {y})</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        {
          grid.map((ele, idx) => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" onChange={onChange} value={email}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
