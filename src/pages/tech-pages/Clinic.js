import React, {useState} from 'react'
import { Page } from '../../components/Page'
import '../../App.css'
import Modal from '../../components/Modal'

function Clinic() {
  let [showModal,setShowModal] = useState(false)
  return (
    <Page>
       <div className="title" > 
                <h1> Boston College Clinic </h1>
        </div>
        <div className='creative-text'>
          As part of HMC's clinic program I spent a year working for the Abuelezam Research lab at Boston College. 
          We wrote a set of models that simulated the introduction of greenspace in black and latinx communities and reported our findings. 
          
          <br/> <br/>
          <a href="https://github.com/InstituteforDiseaseModeling/covasim/pull/394" target="_blank" rel="noreferrer"> Here's our official pull request</a>
         
          <br/>
          <a href="./clinic_report.png" target="_blank" rel="noreferrer"> And here's our final presentation </a>
          <br/>
        </div>
    </Page>
  )
}

export default Clinic