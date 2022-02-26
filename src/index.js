import React from 'react'
import ReactDom from 'react-dom'

// CSS = full path
import './index.css'
// Component name starts with Caps.
// always return JSX  (JSX Rules)
// Always return a single fragment at root level
// div/section / article or Fragment
// use camelCase for html Attrib
// className instead of class
// close every element
// formatting



// function Greeting() {
//   return (
//     <div>
//       <h1>hello from Component</h1>
//     </div>
//   );
// }

//------- OR below -----------

// const Greeting = () => {
//   return React.createElement('div',{},React.createElement('h1',{},'Hello '));
// };
// ----------- Active Fragment ---------

function Greeting(){
  return (
      <React.Fragment>
        <div>
          <Person/>
          <Message/>
          <button type="button">Click Me!</button>
        </div>
      </React.Fragment>

  )
}

const Person = () => <h2>Satadru Basu</h2>;
const Message = () => {
  return <p> The message component</p>;
}


// How to place the Greeting Component onto index.html.
// Use ReactDom render --> component,targetElementId
ReactDom.render(<Greeting/>,document.getElementById('root'))