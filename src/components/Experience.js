import React from 'react'
import './Experience.css'
import netgear from './images/netgear.png'
import ubc from './images/ubc.JPG'
import teaching from './images/class.JPG'
import gisau from './images/indo.JPG'
import vantage from './images/vantage.JPG'
import foodbank from './images/foodbank.JPG'
import girltech from './images/girlsintech.JPG'

export default function Experience() {
    return (
        <div className="blocks-exp">
            <div className="empty-box-1"></div>
            <div className="empty-box-2"></div>
            <div className="empty-box-3"></div>

            <div className="experience-title">
                <h1>EXPERIENCE</h1>
            </div>

            <div className="netgear">
                <div className="netgear-animation">
                    <img 
                    src= {netgear} 
                    alt="Netgear"
                    className="exp-image"
                    />

                    <div className="netgear-overlay">
                        <div className="kExp-desc">
                        <h6 className="kExp-subtitle">Main responsibility</h6>
                        <ul className="exp-list">
                            <li>Wrote automated testing script in Python
                            to replace the manual testing of regular software- 
                            update and initial configuration check</li>
                            <li>Ensured web and mobile application error-free and
                            worked in conformance to the specific requirement
                            (manual and automated)</li>
                            <li>Reported and tested any defects, and verified
                            if every test cases had passed</li>
                        </ul>
                        <p className="kExp-period">September 2018 - April 2019</p>
                        </div>
                    </div>
                </div>
                <div class="kExp-title">
                    <h6>Work</h6>
                    <p>NETGEAR Canada</p>
                    <p className="position-desc">Software Tester</p>
                </div>
            </div>

            <div className="ubc">
            <div className="ubc-animation">
                    <img 
                    src= {ubc} 
                    alt="ubc"
                    className="exp-image"
                    />

                    <div className="ubc-overlay">
                        <div className="kExp-desc">
                        <h6 className="kExp-subtitle">Relevant coursework</h6>
                        <p>Algorithm and time/space complexity, database, 
                            software development, networking and communication,
                            object-oriented design, graphics and visual,
                            distributed systems, operating system, software testing</p>
                        <p className="kExp-period">September 2016 - present<br/>
                        Expected graduation: April 2021</p>
                        </div>
                    </div>
                </div>
                <div class="kExp-title">
                    <h6>Education</h6>
                    <p>University of British Columbia</p>
                    <p className="position-desc">Major in Computer Science</p>
                </div>
            </div>

            <div className="teaching">
                <div className="teaching-animation">
                    <img 
                    src= {teaching} 
                    alt="TA"
                    className="exp-image"
                    />

                    <div className="teaching-overlay">
                        <div className="kExp-desc">
                        <h6 className="kExp-subtitle">Main responsibility</h6>
                        <ul className="exp-list">
                            <li>Facilitated an enganging and friendly study 
                            environment to first year students</li>
                            <li>Provided guidance of concepts for introductory to 
                            computational algorithms (computer science) and basic 
                            kinematics and motions understandings (physics)</li>
                            <li>Held weekly meeting with the instructors
                            and held weekly office hours for students</li>
                        </ul>
                        <p className="kExp-period">September 2017 - April 2018</p>
                        </div>
                    </div>
                </div>
                <div class="kExp-title">
                    <h6>Work</h6>
                    <p>University of British Columbia</p>
                    <p className="position-desc">Computer Science/Physics TA</p>
                </div>
            </div>

            <div className="foodbank">
                <div className="foodbank-animation">
                    <img 
                    src= {foodbank} 
                    alt="FoodBank"
                    className="exp-image"
                    />

                    <div className="foodbank-overlay">
                        <div className="kExp-desc">
                        <h6 className="kExp-subtitle">Main responsibility</h6>
                        <ul className="exp-list">
                            <li>Sorted and categorized food items based on 
                            food type, expiry date, and perishability</li>
                            <li>Prepared the food items packages so they were
                            ready to be handed in to those in needs</li>
                        </ul>
                        <p className="kExp-period">February 2019</p>
                        </div>
                    </div>
                </div>
                <div class="kExp-title">
                    <h6>Volunteer</h6>
                    <p>FoodBank Greater Vancouver</p>
                    <p className="position-desc">Food Storage Sort and Management</p>
                </div>
            </div>

            <div className="girlstech">
                <div className="girls-animation">
                    <img 
                    src= {girltech} 
                    alt="GIRLsmarts4tech"
                    className="exp-image"
                    />

                    <div className="girls-overlay">
                        <div className="kExp-desc">
                        <h6 className="kExp-subtitle">Main responsibility</h6>
                        <ul className="exp-list">
                            <li>Developed and debugged a snake-like game 
                            (called Hungry Panda) in Phyton</li>
                            <li>Aspired girls who have a strong interest 
                            in tech</li>
                        </ul>
                        <p className="kExp-period">October 2017 - January 2018</p>
                        </div>
                    </div>
                </div>
                <div class="kExp-title">
                    <h6>Volunteer</h6>
                    <p>GIRLsmarts4tech</p>
                    <p className="position-desc">Programming Group</p>
                </div>
            </div>

            <div className="gisau">
                <div className="gisau-animation">
                    <img 
                    src= {gisau} 
                    alt="GISAU organization"
                    className="exp-image"
                    />

                    <div className="gisau-overlay">
                        <div className="kExp-desc">
                        <h6 className="kExp-subtitle">Main responsibility</h6>
                        <ul className="exp-list">
                            <li>Responding to the aspirations of Indonesian students at UBC</li>
                            <li>Promoting Indonesian cultures</li>
                        </ul>
                        <p className="kExp-period">September 2017 - present</p>
                        </div>
                    </div>
                </div>
                <div class="kExp-title">
                    <h6>Organization</h6>
                    <p>Indonesian Student Club UBC</p>
                    <p className="position-desc">Active member</p>
                </div>
            </div>

            <div className="vantage">
                <div className="vantage-animation">
                    <img 
                    src= {vantage} 
                    alt="Vantage College Capstone Comittee" 
                    className="exp-image"
                    />

                    <div className="vantage-overlay">
                        <div className="kExp-desc">
                        <h6 className="kExp-subtitle">Main responsibility</h6>
                        <ul className="exp-list">
                            <li>Scheduled all events in the annual UBC Capstone Conference</li>
                            <li>Organized students’ research projects from every
                            stream (Science, Applied Science, Commerce, and Arts)</li>
                            <li>Held weekly meetings with other stream leaders 
                            to discuss the progress of the conference</li>
                        </ul>
                        <p className="kExp-period">May 2017 - July 2017</p>
                        </div>
                    </div>
                </div>
                <div class="kExp-title">
                    <h6>Organization</h6>
                    <p>UBC Vantage College Capstone Comittee</p>
                    <p className="position-desc">Science stream leader</p>
                </div>
            </div>
        </div>
    )
}
