import React from 'react'
import { Page } from '../../components/Page'
import '../../App.css'

function USAIce() {
  return (
    <Page>
    <div className="title" > 
             <h1> USA ice climbing </h1>
     </div>
     <div className='creative-text'>
          <img width="50%" alt="world cup" src={'./WC.png'}/>
          <br/><br/>
          I spent 4 years as the captain of the USA ice climbing team. 
          <br/><br/>
          <a href="https://www.rockandice.com/inside-beta/approach-pitch-inside-scoop-high-school-climbers/" target="_blank" rel="noreferrer"> Read my Rock & Ice article about TCA </a>

          <br/>
          <a href="https://worldclassacademy.com/climb/home/" target="_blank" rel="noreferrer"> Visit the world class academy website! </a>

      </div>
 </Page>
  )
}

export default USAIce