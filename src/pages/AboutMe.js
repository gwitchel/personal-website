import React from 'react'
import {Page,DynamicPage} from '../components/Page'
import { LittleCardRow,LittleCard,LittleCardButton } from '../components/LittleCards'
import { useNavigate } from 'react-router-dom';
import './aboutMe.css'
import '../App.css'

function AboutMe() {
    const navigate = useNavigate();

  return (
    <>
    <div className='doublePage '>
        <div>
          <img alt="" className="hero-iamge" src="./me.png"></img>
        </div>
    <DynamicPage> 
        <div className="title"> 
            <h1> About Me </h1>
        </div>
        <div className='page-content'>
            <div className='text'>
                Hi, and welcome to my personal website! <br/><br/> I'm a Durango native. This quaint mountain town instilled in me an indomitable love for the outdoors and kindled my passion for ice climbing. Interested in my climbing journey? Dive deeper [here](link).
                <br/><br/>
                Once a professional climber, I proudly represented Team USA in ice climbing, competing on the international stage for half a decade. Though I took a hiatus to earn my computer science degree from Harvey Mudd in 2019, my fervor for climbing hasn't waned. I'm gearing up for a thrilling two-month expedition in Patagonia, tackling grand outdoor ice routes (And yes, I have watched "The Alpinist").
                <br/><br/>
                Post-graduation, I settled in the Bay Area, but I remain flexible regarding relocation and remote work opportunities. Currently, I'm broadening my academic horizons by pursuing a master's in computational math from Johns Hopkins. The flexibility of asynchronous night classes allows me to seamlessly integrate my studies with my day job.
                <br/><br/>
                Looking forward to connecting and collaborating!  
            </div>
        </div>
    </DynamicPage>
    </div>
    <div className='doublePage' >
            <LittleCardRow>
                <LittleCardButton key='1' link="/resume" onClick={(e)=>navigate("/resume")} title="Resume" body="work experience and education" />
                <LittleCardButton key='2' link="/portfolio/MochaZine" onClick={(e)=>navigate("/portfolio")} title="Portfolio" body="Check out my tech portfolio" />
                <LittleCardButton key='3' link="/Alpinism/Films" onClick={(e)=>navigate("/Alpinism")} title="Alpinism" body="learn more about my climbing career" />
                <LittleCardButton key='4' link="/creative" onClick={(e)=>navigate("/creative")} title="Watercolor" body="View some of my favorite creative projects" />
            </LittleCardRow>
    </div>
    </>
  )
}

export default AboutMe