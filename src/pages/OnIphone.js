import React from 'react'
import {DynamicPage} from '../components/Page'
import { LittleCardRow,LittleCard} from '../components/LittleCards'
import { useNavigate } from 'react-router-dom';
import './aboutMe.css'
import '../App.css'

function OnIphone() {
    const navigate = useNavigate();

  return (
    <>
    <div className='doublePage ' style={{padding:20}}>
        <div className="title"> 
            <h1> Welcome </h1>
        </div>
        <div className='text'>
                Hi! Welcome to my personal website. It loks like you're on a small screen, so I'll give 
                you the short version, but feel free to check out the full site on a larger screen.
        </div>
        <div>
          <img alt="" className="hero-iamge" src="./me.png"></img>
        </div>
        <div style={{
            display: 'flex',
            // width: 500,
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '1px solid #000',
        }}> 
        <div className="title"> 
            <h1> About Me </h1>
        </div>
        <div className='page-content'>
            <div className='text'>
                 I'm a Durango, Colorado native. This mountain town instilled in me an indomitable love for the outdoors and my passion for ice climbing.
                    <br/><br/>
                 when I'm not coding, I'm painting watercolors, skiing, or climbing. 
                    <br/><br/>
                 I'm currently persuing a masters in Biomedical Engineering at 
                 the University of Washington in Seattle. when I graduate I hope to found my own medical device company.
                
                Until then I'll be learning as much as I can about the intersection of medicine and technology by working as 
                an EMT and persuing a position as a volunteer firefighter in Seattle.
                 <br/><br/>
                 I'm always open to new opportunities and collaborations, so feel free to reach out!

                 <br/><br/>
                
                email me at 
                <a href="mailto:
                <gwitchel@gmail.com>">gwitchel@gmail.com</a>

                <br/><br/>  
                or shoot me a text: 970-779-1386
                <br/><br/>  

                I'm not a huge fan of linkedin, but you can find me there too:
                <a href="https://www.linkedin.com/in/georgia-witchel-852b78149/"> linkedin</a>
                
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default OnIphone