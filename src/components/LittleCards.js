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

  console.log(props.title,props.link)
  let c = props.link?'littleCard clickable':"littleCard"
  console.log("C",props.link,c)
  return (
    <div className={c} onClick={()=>navigate(props.link)}>
      <div className='lct'>{props.title}</div>
      <div className='lcb'>{props.body}</div>
    </div>
  )
}



export { LittleCardRow,LittleCard}