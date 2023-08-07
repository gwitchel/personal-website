import React from 'react'
import { Page } from '../../components/Page'
import '../../App.css'

function Skiing() {
  return (
    <Page>
    <div className="title" > 
             <h1> Adventures in the Outback</h1>
     </div>
     <div className='creative-text'>
          <img width="70%" alt="climbing" src={'./ski.jpg'}/>
          <br/><br/>
            I've been snowbaording and skiing since before I could walk. My family runs one of the last small ski areas in America, 
          , so I grew up a massive ski bum. In the past decade or so I've been getting very into backcountry skiing! I'm about to 
          spend the next month skiing the Frey in Patagonia!
          <br/><br/>
          <a href="https://www.inc.com/magazine/20110301/the-24-7-family-business.html" target="_blank" rel="noreferrer"> Read about Wolf creek: family run for three generations</a>
      </div>
 </Page>
  )
}

export default Skiing