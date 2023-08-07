import React from 'react'
import { Page } from '../../components/Page'
import '../../App.css'

function TCA() {
  return (
    <Page>
       <div className="title" > 
                <h1> The Climbing Academy </h1>
        </div>
        
        <div className='creative-text'>
          <img width="90%" alt="climbing" src={'./climbing1.jpg'}/>
          <br/><br/>
          I spent a year attending the Climbing academy! The Climbing Academy is an accredited private high school that combines academics, athletics, travel, and cultural immersion with the sport of climbing.
          While I was there I got to live in a tent at the base of world class climbing crags in Spain, Italy, Croatia, and Solvenia.
          <br/><br/>
          <a href="https://www.rockandice.com/inside-beta/approach-pitch-inside-scoop-high-school-climbers/" target="_blank" rel="noreferrer"> Read my Rock & Ice article about TCA </a>

          <br/>
          <a href="https://worldclassacademy.com/climb/home/" target="_blank" rel="noreferrer"> Visit the world class academy website! </a>

        </div>
    </Page>
  )
}

export default TCA