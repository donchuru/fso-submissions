/* 
we have to use props.xxx, xxx being the parameter name we give when calling our component
*/

import './App.css';

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props.parts[0].name)
  return (
    <div>
      <p> {props.parts[0].name} </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props.parts[1].name)
  return (
    <div>
      <p> {props.parts[1].name} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals',
        exercises: 10
      },
      {
        name: 'Using Props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}


export default App;
