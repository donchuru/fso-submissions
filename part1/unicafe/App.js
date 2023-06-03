/*

REACHED BEGINNING OF 1.8

ALWAYS remember to return from your components
*/


import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}> 
      { text }
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const upadateTotal = () => {
    const newTotal = total + 1
    setTotal(newTotal)
  }
  const updateAverage = () => {
    const newAverage = (good/total) - (bad/total)
    setAverage(newAverage)
  }

  const goodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    upadateTotal()
    updateAverage()
  }

  const neutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)

    upadateTotal()
    updateAverage()
  }

  const badClick = () => {
    const newBad = bad + 1
    setBad(newBad)

    upadateTotal()
    updateAverage()
  }

  const upadatePositive = () => {
    return ((good/total) * 100)
  }

  return (
    <>
        <h1> Give Feedback </h1>
        <Button handleClick={goodClick} text='good'/>
        <Button handleClick={neutralClick} text='neutral'/>
        <Button handleClick={badClick} text='bad'/>

        <h2> statistics </h2>
        <p> good { good } </p>
        <p> neutral { neutral }</p>
        <p> bad { bad }</p>

        <p> total {total} </p>

        <p> average {average}</p>

        <p> positive {upadatePositive()} </p>
    </>
  )
}

export default App
