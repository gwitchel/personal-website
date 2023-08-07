import React from 'react'
import { Page } from '../../components/Page'
import '../../App.css'

function Films() {
  return (
    <Page>
       <div className="title" > 
                <h1> Films</h1>
        </div>
        <div className='creative-text'>
          <img width="70%" alt="marcus" src={'./mentor.jpg'}/>
          <br/><br/>
            Want to watch some videos about my ice climbing career? I've been features in three professional films, linked below.
          <br/><br/>
          <a href="https://www.amazon.com/Mentor-Marcus-Garcia/dp/B085Q8ZNQ6" target="_blank" rel="noreferrer"> Watch "the Mentor" on amazon prime </a>
          <br/><br/>
          <a href="https://www.google.com/search?q=the+mixtress+ice+climbing&rlz=1C5CHFA_enUS968US968&oq=the+mix&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTINCAMQLhivARjHARiABDINCAQQLhivARjHARiABDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPdIBCDIxNjhqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:2945677f,vid:6oFqJ98mTlU" target="_blank" rel="noreferrer"> Watch "the Mixtress" free on youtube</a>
          <br/><br/>
          <a href="https://www.outsideonline.com/culture/books-media/why-you-should-know-women-mixed-climbing/" target="_blank" rel="noreferrer"> Read about "the Mixtress" in outside magazine</a>
          <br/><br/>
          <a href="https://www.adventurepro.us/georgia-witchell-blooms-as-an-ice-climber/" target="_blank" rel="noreferrer"> Watch my special on Adventure Pro </a>

    </div>
    </Page>
  )
}

export default Films