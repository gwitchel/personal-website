import React from 'react'
import { Page } from '../../components/Page'
import '../creative.css'

function RemoteCarabeaner() {
  return (
    <Page>
      <div className="title"> 
        <h1> Remote Controlled Carabiner </h1>
      </div>
      <div className='creative-text'>
        <img width="80%" alt="beaner" src={'./beaner.jpeg'}/>
        <br/>
        So you're daisy soloing and you don't want to downclimb to unclip your lower 
        carabeaner? Don't worry. I invented a bluetooth and IRR controlled carabiner 
        that unclips itself. I built the first prototype myself, then contracted an engineer to 
        build a more professional second version.

      <br/><br/><br/><br/>
          <a href="./c1.png" target="_blank" rel="noreferrer"> Check out the schematic here </a>
          <a href="./c1.png" target="_blank" rel="noreferrer"> Check out the V1 Demo Here </a>
      </div>
    </Page>
  )
}

export default RemoteCarabeaner