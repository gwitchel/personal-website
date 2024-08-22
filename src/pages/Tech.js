import React from 'react'
import { DynamicPage } from '../components/Page'
import Card from '../components/Card'
import { Outlet , useNavigate } from 'react-router-dom';
function Tech() {
// TODO: Dino train and snowbaorder images are bad 
      return (
      <div className='doublePage '>
      <div style={{align: 'center'}}>
            <DynamicPage> 
            <div className="title"> 
                  <h1> Mathematical Modeling </h1>
            </div>
            <Card link="/portfolio/clinic" title="Creating an epidemiologic model of the spread of Covid in minority communities" 
                  subtitle="Abuelezam research lab at Boston College" 
                  body="As part of HMC's clinic program I spent a year working for the Abuelezam Research lab at Boston College..." />

            <hr className='littleHr'></hr>
            <Card  link="/portfolio/scientificComputing" title="Optimizing snowboard mechanics on mogul hills using advanced computing methods" 
                  subtitle="Math161: Scientific Computing" 
                  body="I used a mathematical model to determine the optimal time a snowboarder should jump whilst traveling over..." />
            
            <div className="title title-top"> 
                  <h1>Coding</h1>
            </div>
            <Card link="/portfolio/shrinkville" title="Shrinkeville: the incredibly violent town that runs on Lambda Calculus" 
                  subtitle="CS131: Programming Languages" 
                  body="Shrinkville is a magical town composed completely of lambda calculus..." />
            <hr className='littleHr'></hr>
            {/* <Card link="/portfolio/dinosaurTrain" title="Dinosaur Train: which character looks the most like you??" 
                  subtitle="MS145: Computational photography" 
                  body="I wrote an algorithm that maps cartoon dinosaurs faces to human faces..." /> */}
            <Card link="/portfolio/Desmond" title="Desmond: combining my artistic style with unity" 
                  subtitle="putting my animation skills to the test" 
                  body="I decided to learn unity so I could make a 16px platformer about Desmond, a garden spirit trying to earn 
                  a second change at life" />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/RemoteCarabeaner" title="Remote Controlled carabiner" 
                  subtitle="improving the safety of daisy soloing" 
                  body="So you're daisy soloing and you don't want to downclimb to unclip your lower carabiner? Don't worry..." />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/MOCHAZine" title="A directory of LA street food" 
                  subtitle="Creating a Zine for the museum of Contemporary Art in LA" 
                  body="I co-wrote an artistic zine that was published as part of the Mayday..." />
            </DynamicPage>
      </div>
      <Outlet/>
      </div>
      )
}

export default Tech