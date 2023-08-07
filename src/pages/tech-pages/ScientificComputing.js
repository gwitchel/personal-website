import React from 'react'
import { Page } from '../../components/Page'
function ScientificComputing() {
  return (
    <Page>
      <div className="title" > 
                <h1> Snowboard Induced Airtime </h1>
      </div>
      <div class="creative-text">
        <img width = "80%" alt='jumping diagram' src='./math161-hero.png'></img>
        I used a mathematical model to determine the optimal time a snowboarder should jump whilst traveling over a set of moguls in order to maximize their time airborne. The successful completion of any snowboarding trick is dependent on two factors: the strength and agility of the snowboarder, and the amount of time they spend airborne. This model takes into account both of those factors and produces an optimal time to jump, given a wave equation.
        <br/>  <br/><br/><br/>
        <a href="./mathmatical modeling final.pdf" target="_blank" rel="noreferrer"> click here to view the full report </a>

      </div>
    </Page>
  )
}

export default ScientificComputing