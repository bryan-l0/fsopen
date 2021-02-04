import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState(new Uint8Array(6))
  const [champion, setChampion] = useState(0)
  const newAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1
    while (randomNumber === selected) {
      randomNumber = Math.floor(Math.random() * 5) + 1
    }
    setSelected(randomNumber)
  }
  const upVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoint(copy)
    if (copy[selected] > points[champion]) {
      setChampion(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br/>
      has {points[selected]} votes<br/>
      <Button onClick={upVote} text="vote"/>
      <Button onClick={newAnecdote} text="next anecdote"/>
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[champion]}<br/>
      has {points[champion]} votes<br/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)