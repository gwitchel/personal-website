import React from 'react'
import { Page } from '../../components/Page'
import '../../App.css'

function JuniorOlympics() {
  return (
    <Page>
    <div className="title" > 
             <h1> The Junior Olympics</h1>
     </div>
     <div className='creative-text'>
          <img width="70%" alt="games" src={'./games.jpeg'}/>
          <br/><br/>
            In 2016 I got to spend a few weeks at the Junior Olympics in Lillihammer. I represented the US and Demoed Ice climbing. 
            This was especially exciting as it was the first time climbing was ever represented on an olympic stage! 
          <br/><br/>
          <a href="https://olympics.com/ioc/youth-olympic-games" target="_blank" rel="noreferrer"> learn more about the Youth Olympics</a>
    </div>
    </Page>
  )
}

export default JuniorOlympics