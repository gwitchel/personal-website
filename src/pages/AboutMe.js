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
    </DynamicPage>
    </div>
    <div  style={{
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        // height: 70,
    }} >
          <div  style={{
                width: 500,
                marginTop: 30,
            }} >
            <LittleCardRow>
                <LittleCard key='1' link="/resume" onClick={(e)=>navigate("/resume")} title="Resume" body="Review my work experience and education" />
                <LittleCard key='2' link="/portfolio/MochaZine" onClick={(e)=>navigate("/portfolio")} title="Portfolio" body="Check out my portfolio of past projects" />
                <LittleCard key='3' link="/Alpinism/Films" onClick={(e)=>navigate("/Alpinism")} title="Alpinism" body="learn more about my climbing career" />
                <LittleCard key='4' link="/creative" onClick={(e)=>navigate("/creative")} title="Watercolor" body="When I'm not coding, I'm painting!" />
            </LittleCardRow>
            </div>
    </div>
    </>
  )
}

export default AboutMe