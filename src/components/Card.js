import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function Card(props) {
  const navigate = useNavigate();

  let c = 'card'
  if(props.link){
     console.log("LINK",props.link)
     c= 'card clickable'}

  return (
    <div className={c}  onClick={()=>{if(props.link){navigate(props.link)}}}>
        
        {/* <hr className='littleHr'></hr> */}
        <div className='card-title'>
            <div className='main-title'>
                <div className="main-title-egg-container"> 
                  <img className='egg' height="30px" src="/ico.png"/>
                  <div className='h3'>{props.title}</div>
                </div>
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