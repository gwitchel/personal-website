import React from 'react'
import './pages.css';
import {Page} from '../components/Page';
import Card from '../components/Card';
import { LittleCard, LittleCardRow } from '../components/LittleCards';

const experience = [{
        title: "Founding Engineer",
        subtitle: "Theo Health",
        date: "November 2023 - August 2024",
        body :"I just spent the last eight months in Napoli Italy! While I was there I was the founding engineer for a new health tech startup. I was responsible for developing the MVP and leading the engineering team. I also worked on the business side of things, helping to raise a seed round from olympic golfer Xander Schauffele"},
    {
        title: "Developer",
        subtitle: "Tesla",
        date: "May 2022 - April 2023",
        body :["I worked on the financial team to develop software that tracks solar production and automatically generates tax and audit reports to claim Solar Renewable Energy Credits (“SRECS”). Following the completion of this project I transitioned to the frontend development team and began writing react scripts for the solar billing platform which delivers monthly billing statements."]},
    {
        title: "STEM Teacher",
        subtitle: " Prison Education Project",
        date: "August 2021- October 2022",
        body :"The Prison Education Project provides expanded educational opportunities for the in-custody population in 25 California correctional facilities and four international correctional facilities. With the assistance of 3,000 university student and faculty volunteers, PEP has serviced approximately 8,000 in-custody students in these facilities since 2011. I delivered STEM tutoring to in-custody students via Zoom."
    },
    // {
    //     title: "SWE Intern",
    //     subtitle: "Nuffsaid",
    //     date: "May 2020 - August 2020",
    //     body :"Nuffsaid is a small startup with VC funding. While I interned for them I Learned software engineering process improvements and best practices by developing POC work in anticipation of future use of API's."
    // },
    ]
const education = [
    {title: "Masters in Biomedical Engineering",
     subtitle: "University of Washington",
     date: "Aug 2024 - Present",
     body: "I'm currently getting my masters in BioMed Engineering."},
    { 
    title:"Bachelors in Computer Science",
    subtitle:"Harvey Mudd College",
    date:"Aug 2019 - May 2023",
    body:'GPA: 3.7. Dissertation: Modeling the Effects of COVID-19 Interventions on Minority Groups'
    },
    {title: "Highschool Diploma",
    subtitle: "World Class Academy",
    date: "Aug 2016 - May 2019",
    body: "GPA 4.6, class valedictorian, highest GPA on school record, president of the Computer Science Club. World Class academy is a traveling boarding school for elite rock climbers." }
] 


const hmc_courseWork = [
    {
        link: "/portfolio/clinic",
        title: "Boston College Clinic",
        body: "Final Project: Modeling the spread of COVID-19 in minority communities"
    },{
        link: "portfolio/shrinkville",
        title: "Programming Languages",
        body: "Final project: Shrinkville"
    },{
        link: "portfolio/MOCHAZine",
        title: "Independent Study: Art",
        body: "Final project: Created a zine for The Museum of Contemporary Art (MOCA) in Los Angeles"
    }
]

const skills = [
    {
        title: "Nationally Registered EMT",
        body: "Through the Bay Area Trainig Academy"
    },{
        title: "AERIE Certified",
        body: "Part of being an avid backountry skiier means staying safe in avalanche terrain."
    },{
        title: "Voulenteer Firefighter",
        body: "I'm in the process of becoming a volunteer firefighter in Seattle"
    }
]
const Awards = [
    {
        title: "Class Valedictorian",
        body: "High School class valedictorian with a 4.4 GPA"
    },{
        title: "UIAA World Cup",
        body: "Captain of the USA ice climbing team, 4th at the World Cup"
    },{
        title: "Junior Olympics",
        body: "Represented the U.S. at the Junior Olympics (ice climbing)"
    }
]

function Resume() {
  return (
    <div className='doublePage '>
        <Page> 
            <div className="title"> 
                <h1> Experience </h1>
            </div>
            <Card {...experience[0]}  />
            <hr className='littleHr'></hr>
            <Card {...experience[1]}  />
            <hr className='littleHr'></hr>
            <Card {...experience[2]}  />
            <br/> 
            <div className="title title-top"> 
                <h1> Certifications</h1>
            </div>
            <br/> 
            <LittleCardRow>
                {skills.map((e) => {
                    return <LittleCard key={e.title} title={e.title} body={e.body} />
                })}
            </LittleCardRow>

        </Page>
        <Page> 
            <div className="title"> 
                <h1> Education</h1>
            </div>
            <Card {...education[0]} />
            <hr className='littleHr'></hr>
            <Card {...education[1]} />
            
            <LittleCardRow>
                {hmc_courseWork.map((e) => {
                    return <LittleCard key={e.title} link={e.link} title={e.title} body={e.body} />
                })}
            </LittleCardRow>
            <br></br>
            <hr className='littleHr'></hr>
            <Card {...education[2]} />

            <br/>
            <div className="title title-top"> 
                <h1> Awards</h1>
            </div>
            <br/>
            <LittleCardRow>
                {Awards.map((e) => {
                    return <LittleCard key={e.title} title={e.title} body={e.body} />
                })}
            </LittleCardRow>

        </Page>
    </div>
  )
}

export default Resume