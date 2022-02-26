import React from 'react'
import ReactDom from 'react-dom'
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
          <h2>Hello from Component</h2>
          <ul>
            <li>
              <a href='https://www.google.com'> Hello Google link</a>
            </li>
            <input type='text' name='' id =''/>
            <button type="button">Click Me!</button>
          </ul>
        </div>
      </React.Fragment>

  )
}

// How to place the Greeting Component onto index.html.
// Use ReactDom render --> component,targetElementId
ReactDom.render(<Greeting/>,document.getElementById('root'))