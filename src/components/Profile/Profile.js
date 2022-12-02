
import { useEffect, useState } from 'react';
import profile from '../../profile-img.JPG';
import './Profile.css';
import Swal from 'sweetalert2';
const Profile = ({second}) => {
    const [secen,setSec]=useState(0);
    let readingSecond = 0;
    useEffect(()=>{
        let savedItem =JSON.parse(localStorage.getItem('break-time'));
        setSec(savedItem)
    },[])
    for(const newSecond of second){
        // console.log(newSecond.readingTime)
        readingSecond =readingSecond + newSecond.readingTime;
    }
    const addBreakTime = (e)=>{
       setSec(e);
           localStorage.setItem('break-time',JSON.stringify(secen))
    }
    const swetAlert = ()=>{
        Swal.fire(
            'Good job!',
            'Your Activity Complete!',
            'success'
          )
    }

    return (
        <div className='profile-container'>
            <div className='person-image-name'>
                <img src={profile} alt="" />
                <h4 className='person-name'>Md ANSARUL ISLAM</h4>
            </div>
                <div className="address">
                 <h5>Thakurgaon , Bangladesh</h5>
                </div>
                <div className="fitness-container">
                    <div className="weight">
                        <h3>65 Kg</h3>
                        <h4>Weight</h4>
                    </div>
                    <div className="height">
                        <h3>5.7</h3>
                        <h4>Height</h4>
                    </div>
                    <div className="years">
                        <h3>22 Yrs</h3>
                        <h4>Age</h4>
                    </div>
                </div>
                <h2 className='break-title'>Add a Break</h2>
                <div className="break-time-chart">
                    <button onClick={(e)=>addBreakTime(e.target.innerText)}>10 </button>
                    <button onClick={(e)=>addBreakTime(e.target.innerText)} className='active'>20 </button>
                    <button onClick={(e)=>addBreakTime(e.target.innerText)}>30 </button>
                    <button onClick={(e)=>addBreakTime(e.target.innerText)}>40 </button>
                    <button onClick={(e)=>addBreakTime(e.target.innerText)}>50 </button>
                </div>

                <div className="Exercise-details">
                    <h2>Exercise Details</h2>
                    <div className="exercise-time">
                        <h3>Reading Time</h3>
                        <h4>{readingSecond} second</h4>
                    </div>
                </div>

                <div className="break-time-details">
                    <h2 className='break-time-title'>Break Time</h2>
                    <div className="break-time">
                        <h3>Break Time</h3>
                        <h4>{secen} Minute</h4>
                    </div>
                </div>

                <div className='activity-complete'>
                    <button onClick={swetAlert}>Activity Complete</button>
                </div>
        </div>
    );
};

export default Profile;