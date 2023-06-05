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

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )

}

const Statistics = ({good, neutral, bad, total, average, upadatePositive}) => {
  return (
    <>
      <h2> statistics </h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <p> positive {upadatePositive()} </p>
    </>
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

  if (total === 0){
    return (
      <>
          <h1> Give Feedback </h1>
          <Button handleClick={goodClick} text='good'/>
          <Button handleClick={neutralClick} text='neutral'/>
          <Button handleClick={badClick} text='bad'/>
  
          <p> No Feedback Given </p>
      </>
    )
  } else {
    return (
      <>
          <h1> Give Feedback </h1>
          <Button handleClick={goodClick} text='good'/>
          <Button handleClick={neutralClick} text='neutral'/>
          <Button handleClick={badClick} text='bad'/>
  
          <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} upadatePositive={upadatePositive} />
      </>
    )

  }
}

export default App
