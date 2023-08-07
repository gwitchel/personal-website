import React from 'react'
import { Page } from '../../components/Page'
import '../../App.css'

function WorldCup() {
  return (
    <Page>
    <div className="title" > 
             <h1> UIAA world cup circut </h1>
     </div>
     <div className='creative-text'>
          <img width="50%" alt="world cup" src={'./WC.png'}/>
          <br/><br/>
          I spent five years doing the world cup circuit, taking first in three American cups and forth in the Uluru international cup. 
          I was also the first woman to ever compete for ice climbing internationally!
          <br/><br/>
          <a href="https://www.youtube.com/watch?v=OfRYLvQo-fc" target="_blank" rel="noreferrer"> Watch the 2019 cup in Finland </a>
      </div>
 </Page>
  )
}

export default WorldCup