import React from 'react'
import { Page } from '../components/Page'
import Card from '../components/Card'
import {  Outlet } from 'react-router-dom';

function Tech() {
// TODO: Dino train and snowbaorder images are bad 

  return (
    <div className='doublePage '>
      <div style={{align: 'center'}}>
        <Page> 
            <div className="title"> 
                <h1> Mathmatical Modeling </h1>
            </div>
            <Card link="/portfolio/clinic" title="Creating an epidemiologic model of the spread of Covid in minority communities" 
                  subtitle="the center for disease modeling" 
                  body="As part of HMC's clinic program I spent a year working for the Abuelezam Research lab at Boston College. [more] " />

            <hr className='littleHr'></hr>
            <Card  link="/portfolio/scientificComputing" title="Optimizing snowboard mechanics on mogul hills using advanced computing methods" 
                  subtitle="Math161: Scientific Computing" 
                  body="I used a mathematical model to determine the optimal time a snowboarder should jump whilst traveling over [more]" />
            
            <div className="title"> 
                <h1>Coding</h1>
            </div>
            <Card link="/portfolio/shrinkville" title="Shrinkeville: the incredibly violent town that runs on Lambda Calculus" 
                  subtitle="CS131: Programming Languages" 
                  body="Shrinkville is a magical town composed completely of lambda calculus [more]" />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/dinosaurTrain" title="Dinosaur Train: which character looks the most like you??" 
                  subtitle="MS145: Computational photography" 
                  body="I wrote an algorithm that maps cartoon dinosaurs faces to human faces. [more]" />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/RemoteCarabeaner" title="Remote Controlled carabiner" 
                  subtitle="improving the safety of daisy soloing" 
                  body="So you're daisy soloing and you don't want to downclimb to unclip your lower carabiner? Don't worry. [more]" />
            <hr className='littleHr'></hr>
            <Card link="/portfolio/MOCHAZine" title="A directory of LA street food" 
                subtitle="Creating a Zine for the museum of Contemporary Art in LA" 
                body="I co-wrote an artistic zine that was published as part of the Mayday [more]" />
        </Page>
      </div>
      <Outlet/>
    </div>
  )
}

export default Tech