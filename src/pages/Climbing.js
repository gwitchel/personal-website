import React from 'react'
import { Page, DynamicPage } from '../components/Page'
import Card from '../components/Card'
import './creative.css'
import {  Outlet } from 'react-router-dom';

function Climbing() {
  return (
    <div className='doublePage '>
    <div>
      <DynamicPage>
        <div className="title"> 
                <h1> A Life in the Mountains</h1>
        </div>
        <div className='creative-text'>
            I've loved rock climbing and alpinism since I was 8 years old! When I was 12 I started ice climbing and never looked back.Climbing has not just been a hobby; it's become a defining part of who I am. It's taken me to over 20 countries and given me innumerable life skills. Explore the links below to delve into my climbing story!
        </div>
      </DynamicPage>
      <br></br>
      <DynamicPage> 
          <Card link="TCA" title="The Climbing Academy" 
                subtitle="I attended a boarding school for elite rock climbers" 
                body="this is where I learned about mathmetically modeling data" />
          {/* <Card link="USAIce" title="USA Ice Climbing" 
                subtitle="Team captain" 
                body="this is where I learned about mathmetically modeling data" /> */}
          <hr className='littleHr'></hr>
          <Card link="Films" title="'the Mixtress' & 'the Mentor'" 
                subtitle="My journey with filmmaking" 
                body="this is where I learned about mathmetically modeling data" />
          <hr className='littleHr'></hr>
          <Card link="WorldCup" title="The UIAA World Cup Circuit" 
                subtitle="Putting the US on an international stage" 
                body="this is where I learned about mathmetically modeling data" />
          <hr className='littleHr'></hr>
          <Card link="JuniorOlympics" title="2016 Junior Olympics" 
                subtitle="Putting the US on the olympic radar" 
                body="this is where I learned about mathmetically modeling data" />
          <hr className='littleHr'></hr>
          <Card link="skiing" title="Backountry skiing" 
              subtitle="It's not ice climbing but it sure is fun!" 
              body="this is where I learned about mathmetically modeling data" />
        

      </DynamicPage>
    </div>
    <Outlet/>
  </div>
  )
}

export default Climbing