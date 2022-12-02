import React, { useEffect, useState } from 'react';
// import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Showbooks from '../ShowBooks/Showbooks';
import "./Benner.css";

const Benner = () => {
    const [books,setBooks]=useState([]);
    const [second,setSecond]=useState([]);
    // const [break,setBreack]=useState(0)
    useEffect(()=>{
        fetch('readingbook.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
   const addToSecond = (book)=>{
    const newSecond = [...second ,book];
    setSecond(newSecond)
   }
   console.log(second)
    return (
        <div className='banner-container'>
            <div className="books-item">
                <Showbooks books={books} addToSecond={addToSecond}></Showbooks>
            </div>
            <div className="profile-item">
              <Profile second={second}></Profile>
            </div>
        </div>
    );
};

export default Benner;