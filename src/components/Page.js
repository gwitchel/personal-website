import React from 'react'
import '../App.css'
function Page(props) {
  return (
    <div className='page'>{props.children}</div>
  )
}

function DynamicPage(props){
  return (
    <div className='dynamic-page'>{props.children}</div>
  )
}
export {Page, DynamicPage}