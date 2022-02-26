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
const books = [ {id: 1,img:'https://images-eu.ssl-images-amazon.com/images/I/81u5RjloiES._AC_UL320_SR320,320_.jpg',title:'The Memoirs of Sherlock',author:'A Doyle'},
                {id: 2,img:'https://images-eu.ssl-images-amazon.com/images/I/71+n2VSAiXS._AC_UL320_SR320,320_.jpg',title:'The Time Machine',author:'H. G. Wells'} ]
// Simple List of Books
// javascript map() method
function BooklList(){
  return (
    <section className='booklist'>
      { 
         books.map((theBook) => {
           const {img,title,author} = theBook;
           return <Book key={theBook.id} model={theBook}></Book>         
           }
        )
       }
    </section>      
  );
}


// Observe Book parameters and arrow used
// Observe child property 
const Book = (props) => {
  console.log(props);
  const {img,title,author} = props.model;
  const clickHandler = () => {
    alert('Cliked..');
  };
  const complexHandler = (author) => {
    alert('Cliked..');
  };
  return (
    <article className='book' onMouseOver={()=> {
      console.log(author);
    }}>
      <img src = {img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/*  Below way will call the handler on render of page use syntax below 
      <button type="button" onClick={clickHandler}>Send</button>*/}
      <button type="button" onClick={() => complexHandler(author)}>Complex Eg</button>
      <h5>{props.children}</h5>
      
    </article>
  );
  };
// How to place the Greeting Component onto index.html.
// Use ReactDom render --> component,targetElementId
ReactDom.render(<BooklList/>,document.getElementById('root'));