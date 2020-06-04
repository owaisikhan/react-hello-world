import React from 'react'
import ReactDOM from 'react-dom'
function Greet(){
  return <h1>Hello World! welcome in React.</h1> ;
}
ReactDOM.render(<Greet/>,document.querySelector('#root'));