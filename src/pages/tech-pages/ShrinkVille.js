import React from 'react'
import { Page } from '../../components/Page'
import '../creative.css'

function ShrinkVille() {

  return (
    <Page>
        <div className="title"> 
                <h1> Shrinkville </h1>
        </div>
        <div className='creative-text'> 
            Shrinkville is a magical town composed completely of lambda calculus ... <br/> <br/>
            AND MURDER??? <br/> <br/> 
            
            For my final project for my programming languages class (CS 131) I designed shrinkville: a video game engine that can turn traditional 
            lambda calculus statements like 
            <br/>  <br/>
            \x.\y.\z.((x z) y) <br/><br/>

            into video game landscapes like 
            <br/><br/>
        <img width="80%" alt="shrinkville" src={'./shrinkville-1.jpg'}></img>
        <br></br>
          <a href="https://youtu.be/wtfX2UXnVAI" target="_blank" rel="noreferrer"> Watch the full Video explaining shrinkville </a>
        </div>
       
    </Page>

  )
}

export default ShrinkVille