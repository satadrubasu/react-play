import React from 'react'
import ReactDom from 'react-dom'
// Component name starts with Caps.
function Greeting() {
  return (
    <div>
      <h3>hello</h3>
    </div>
  )
}

// How to place the Greeting Component onto index.html.
// Use ReactDom render --> component,targetElementId
ReactDom.render(<Greeting/>,document.getElementById('root'))