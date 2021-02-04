import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, rating, unit}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{rating}</td>
        <td>{unit}</td>
      </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" rating={good}/>
            <Statistic text="neutral" rating={neutral}/>
            <Statistic text="bad" rating={bad}/>
            <Statistic text="all" rating={total}/>
            <Statistic text="average" rating={(good - bad) / total}/>
            <Statistic text="positive" rating={good / total * 100} unit="%"/>
          </tbody>
        </table>
      </div>
    )
  }
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text="good"/>
      <Button handleClick={addNeutral} text="neutral"/>
      <Button handleClick={addBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)