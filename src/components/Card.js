import React, {useState} from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();

  let [visited,set_visited] = useState(false)
  let c = 'card'
  if(props.link){
      c += ' clickable'
  }
  if(visited){
      c = 'card visited'
  }
  
  return (
    <div className={c}  onClick={()=>{if(props.link){navigate(props.link);set_visited(true);console.log("Setting visited")}}}>
        <div className='card-title'>
            <div className='main-title'>
                <div align-self="center" className="main-title-egg-container"> 
                  {/* <img alt="egg" className='egg' height="27px" src="/ico.png"/> */}
                  <img alt="uncracked_egg" className='egg' height="20px" src="/uncracked_egg.png"/> 
                  <img alt="egg-cracked" className='open_egg' height="27px" src="/cracked_egg.png"/>
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