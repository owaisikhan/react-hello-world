import React from 'react'
import ReactDOM from 'react-dom'
function Greet(){
  return React.createElement('h1',{},"hello world")
}
const el = <img/>
ReactDOM.render(el,document.querySelector('#root'));