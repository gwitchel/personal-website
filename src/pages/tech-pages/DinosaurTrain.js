import React from 'react'
import { Page } from '../../components/Page'

function DinosaurTrain() {
  return (
    <Page>
       <div className="title"> 
                <h1> Show Me Your Dinosaur Train </h1>
        </div>
        <div class="creative-text">
        <img width="90%" alt="dino-train" src={'./dino-train.png'}/>
        <br/> <br/> 
          I wrote an algorithm that maps cartoon dinosaurs faces to human faces. It uses facial recognition software 
          for the humans and a prepopulated database for the dinosaurs. Each human is mapped to a unique dinosaur, 
          resulting in an even distribution of human to dinosaur matches. 

          
          <br/><br/><br/><br/>
          <a href="https://colab.research.google.com/drive/1rQRg6tCBfsmEXV3sl1wBTle2VXaCeZ_k?usp=sharing" target="_blank" rel="noreferrer"> Check out the code here! </a>

        </div>
    </Page>
  )
}

export default DinosaurTrain