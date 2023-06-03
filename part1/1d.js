/*
{ ...clicks } creates a new object that has copies of all of the properties of the clicks object

it is forbidden in React to mutate state directly, since it can result in unexpected side effects
Changing state has to always be done by setting the state to a new object

a state update in React happens asynchronously, i.e. not immediately but "at some point" before the component is rendered again.

The useState function (as well as the useEffect function introduced later on in the course) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component. This must be done to ensure that the hooks are always called in the same order, and if this isn't the case the application will behave erratically.

hooks may only be called from the inside of a function body that defines a React component

Never define components inside of other components. The method provides no benefits and leads to many unpleasant problems. The biggest problems are because React treats a component defined inside of another component as a new component in every render. This makes it impossible for React to optimize the component.
*/

import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  <button onClick={handleClick}>
    {text}
  </button>
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    const newTotal = total + 1
    setTotal(newTotal)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    const newTotal = total + 1
    setTotal(newTotal)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      {total}
    </div>
  )
}

export default App
