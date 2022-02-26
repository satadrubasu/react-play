import React from 'react'
import ReactDom from 'react-dom'

// CSS = full path
import './index.css'

import {booksdata} from './Books'
import Book from './Book'
// Component name starts with Caps.
// always return JSX  (JSX Rules)
// Always return a single fragment at root level
// div/section / article or Fragment
// use camelCase for html Attrib
// className instead of class
// close every element
// formatting

// setup vars

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

// children keyword
// function BooklList(){
//   return (
//     <section className='booklist'>
//       <Book 
//           img={imgsrc1}
//           title= {title1}
//           author =  {author1}>
//         <p>Some Children Data</p>
//       </Book>
//       <Book img='https://images-eu.ssl-images-amazon.com/images/I/819gepUWtdS._AC_UL320_SR320,320_.jpg'
//         title='Treasure Island' 
//         author = 'R Stevenson'/>
//     </section>      
//   );
// }

// javascript map() method
function BooklList(){
  return (
    <section className='booklist'>
      { 
         booksdata.map((theBook,index) => {
           return <Book key={theBook.id} model={theBook}></Book>         
           }
        )
       }
    </section>      
  );
}


// How to place the Greeting Component onto index.html.
// Use ReactDom render --> component,targetElementId
ReactDom.render(<BooklList/>,document.getElementById('root'));