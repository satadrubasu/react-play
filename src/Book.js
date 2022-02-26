import React from 'react'

// Observe Book parameters and arrow used
// Observe child property 
const Book = (props) => {
    console.log(props);
    const {img,title,author} = props.model;
    console.log(img+''+title+''+author)

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

export default Book