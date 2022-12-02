import React from 'react';
import './Book.css';
const Book = ({book,addToSecond}) => {
    // console.log(book)
    const {image, name , readingTime , description} = book;

    return (
        <div className='book-card'>
            <img className='book-image' src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h4 className='time-required'>Time Required : {readingTime} second</h4>
            <button onClick={()=>addToSecond(book)} className='book-button'>Add to list</button>
        </div>
    );
};

export default Book;