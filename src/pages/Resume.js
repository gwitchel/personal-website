import React from 'react'
import './pages.css';
import {Page} from '../components/Page';
import Card from '../components/Card';
import { LittleCard, LittleCardRow } from '../components/LittleCards';

const experience = [{
        title: "Developer",
        subtitle: "Kresus Labs",
        date: "May 2023 - Present",
        body :"Startup culture forces you to wear a lot of hats, so I do a little bit of everything! Most recently, I've been heading up development for our SDK as well as running our blog."},
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
    {title: "Masters in Computational Math",
     subtitle: "Johns Hopkins",
     date: "Aug 2023 - Present",
     body: "Currently enrolled in the Johns Hopkins master’s program in computational math."},
    { 
    title:"Bachelors in Computer Science",
    subtitle:"Harvey Mudd College",
    date:"Aug 2019 - May 2020",
    body:'GPA: 3.4. Dissertation: Modeling the Effects of COVID-19 Interventions on Minority Groups'
    },
    {title: "Highschool Diploma",
    subtitle: "World Class Academy",
    date: "Aug 2016 - May 2019",
    body: "World Class academy is a traveling boarding school for elite rock climbers." }
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
        title: "React Development",
        body: "Fully proficient in the entire react framework (native and web)"
    },{
        title: "Figma",
        body: "Work experience with figma and the development flow"
    },{
        title: "Mathematical Analysis",
        body: "Proficient in runtime optimization user profit analysis"
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
                <h1> Skills</h1>
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