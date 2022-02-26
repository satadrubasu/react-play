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

// setup vars

const books = [ {img:'',title:'',author:''},{img:'',title:'',author:''} ]
const author1 = 'A Doyle'
const title1 = 'The Memoirs of Sherlock'
const imgsrc1 = 'https://images-eu.ssl-images-amazon.com/images/I/81u5RjloiES._AC_UL320_SR320,320_.jpg'

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
function BooklList(){
  return (
    <section className='booklist'>
      <Book 
          img={imgsrc1}
          title= {title1}
          author =  {author1}>
        <p>Some Children Data</p>
      </Book>
      <Book img='https://images-eu.ssl-images-amazon.com/images/I/819gepUWtdS._AC_UL320_SR320,320_.jpg'
        title='Treasure Island' 
        author = 'R Stevenson'/>
    </section>      
  );
}

// Observe Book parameters and arrow used
// Observe child property 
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src = {props.img} alt=''/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <h5>{props.children}</h5>
    </article>
  );
  };
// How to place the Greeting Component onto index.html.
// Use ReactDom render --> component,targetElementId
ReactDom.render(<BooklList/>,document.getElementById('root'));