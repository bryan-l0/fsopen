import React, {useState} from 'react'
import ReactDOM from 'react-dom'
 
const Header = (student) => {
  return (
    <h1>{student.course.name}</h1>
  )
}
 
const Content = (input) => {
  return (
    <div>
      <Part class={input.course.parts[0].name} length={input.course.parts[0].exercises}/>
      <Part class={input.course.parts[1].name} length={input.course.parts[1].exercises}/>
      <Part class={input.course.parts[2].name} length={input.course.parts[2].exercises}/>
    </div>
  )
}
 
const Part = (part) => {
  return (
    <p>{part.class} {part.length}</p>
  )
}
 
const Total = (total) => {
  return (
    <p>Number of exercises {total.course.parts[0].exercises + total.course.parts[1].exercises + total.course.parts[2].exercises}</p>
  )
}
 /*
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}
*/

const Display = ({ counter }) => <div>{counter}</div>
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
 
ReactDOM.render(<App />, document.getElementById('root'))