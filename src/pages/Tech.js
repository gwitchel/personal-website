import React from 'react'
import { Page } from '../components/Page'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';
import {  Outlet } from 'react-router-dom';

function Tech() {
  const navigate = useNavigate();

  return (
    <div className='doublePage '>
      <div style={{align: 'center'}}>
        <Page> 
            <div className="title"> 
                <h1> Mathmatical Modeling </h1>
            </div>
            <Card link="/portfolio/clinic" title="Creating an epidemiologic model of the spread of Covid in minority communities" 
                  subtitle="the center for disease modeling" 
                  body="this is where I learned about mathemetically modeling data" />

            <hr className='littleHr'></hr>
            <Card  link="/portfolio/scientificComputing" title="Optimizing snowboard mechanics on mogul hills using advanced computing methods" 
                  subtitle="Math161: Scientific Computing" 
                  body="this is where I learned about mathemetically modeling data" />
            
            <div className="title"> 
                <h1>Coding</h1>
            </div>
            <Card link="/portfolio/shrinkville" title="Shrinkeville: the incredibly violent town that runs on Lambda Calculus" 
                  subtitle="CS131: Programming Languages" 
                  body="this is where I learned about mathmetically modeling data" />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/dinosaurTrain" title="Dinosaur Train: which character looks the most like you??" 
                  subtitle="MS145: Computational photography" 
                  body="this is where I learned about mathmetically modeling data" />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/RemoteCarabeaner" title="Remote Controlled carabiner" 
                  subtitle="improving the safety of daisy soloing" 
                  body="this is where I learned about mathmetically modeling data" />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/MOCHAZine" title="A directory of LA street food" 
                subtitle="Creating a Zine for the museum of Contemporary Art in LA" 
                body="One of my jobs at Kresus is running the blog, you should take a look!" />
        </Page>
      </div>
      <Outlet/>
    </div>
  )
}

export default Tech