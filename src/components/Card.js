import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function Card(props) {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={()=>{if(props.link){navigate(props.link)}}}>
        {/* <hr className='littleHr'></hr> */}
        <div className='card-title'>
            <div className='main-title'>
                <div className='h3'>{props.title}</div>
                <div className='h6'>{props.subtitle}</div>
            </div>
            <div className='date'>
                {props.date}
            </div>
        </div>
        {/* <hr className='littleHr'></hr> */}
        <div className='card-body'>
        {props.body}
        </div>
    </div>
  )
}

export default Card