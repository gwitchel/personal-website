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
  return (
    <div className='littleCard'>
      <div className='lct'>{props.title}</div>
      <div className='lcb'>{props.body}</div>
    </div>
  )
}
function LittleCardButton(props) {
  const navigate = useNavigate();
  
  return (
    <div className='littleCard bttn' onClick={()=>navigate(props.link)}>
      <div className='lct'>{props.title}</div>
      <div className='lcb'>{props.body}</div>
    </div>
  )
}


export { LittleCardRow,LittleCard,LittleCardButton}