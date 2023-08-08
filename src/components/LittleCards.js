import React from 'react'
import { useNavigate } from 'react-router-dom';

function LittleCardRow(props) {
    return(
        <div className='littleCardRow'>
          {props.children}
        </div>
    )
}

function LittleCard(props) {
  const navigate = useNavigate();

  if(props.link){
    return (
      <div className="littleCard clickable" onClick={()=>navigate(props.link)}>
  
        <div className="main-title-egg-container"> 
          <img alt="" className='egg' height="20px" src="/ico.png"/>
          <div className='lct'>{props.title}</div>
        </div>
        <div className='lcb'>{props.body}</div>
      </div>
    )
  } else {
    return (
      <div className='littleCard' onClick={()=>navigate(props.link)}>

      <div className='lct'>{props.title}</div>
      <div className='lcb'>{props.body}</div>
      </div>
    )
  }
}



export { LittleCardRow,LittleCard}