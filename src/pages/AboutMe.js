import React from 'react'
import {DynamicPage} from '../components/Page'
import { LittleCardRow,LittleCard} from '../components/LittleCards'
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
                Hi! Welcome to my personal website.
                 <br/><br/> 
                 I'm a Durango, Colorado native. This mountain town instilled in me an indomitable love for the outdoors and my passion for ice climbing. Interested in my climbing journey? Dive deeper
                 < a onClick={(e)=>navigate("/resume")} >[here]</a>(link).
                <br/><br/>
                As a professional climber, I represented Team USA in ice climbing, competing on the international stage for half a decade. Though I took a hiatus to earn my computer science degree from Harvey Mudd in 2019, my love for climbing hasn't waned as I gear up for a two-month expedition in Patagonia tackling grand outdoor ice routes.
                <br/><br/>
                Post-graduation, I landed in the Bay Area, but I remain flexible regarding relocation and remote work opportunities. Currently, I am pursuing a master’s in computational math at Johns Hopkins. The flexibility of asynchronous night classes allows me to seamlessly integrate my studies with my day job.                <br/><br/>
                Looking forward to connecting and collaborating!

            </div>
        </div>
    </DynamicPage>
    </div>
    <div className='doublePage' >
            <LittleCardRow>
                <LittleCard key='1' link="/resume" onClick={(e)=>navigate("/resume")} title="Resume" body="work experience and education" />
                <LittleCard key='2' link="/portfolio/MochaZine" onClick={(e)=>navigate("/portfolio")} title="Portfolio" body="Check out my tech portfolio" />
                <LittleCard key='3' link="/Alpinism/Films" onClick={(e)=>navigate("/Alpinism")} title="Alpinism" body="learn more about my climbing career" />
                <LittleCard key='4' link="/creative" onClick={(e)=>navigate("/creative")} title="Watercolor" body="View some of my favorite creative projects" />
            </LittleCardRow>
    </div>
    </>
  )
}

export default AboutMe