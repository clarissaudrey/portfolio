import React from 'react'
import './Home.css'
import myPicture from './images/myPicture.png'

export default function Home() {
    return (
        <div className="home-container-all">
            <div className="container-1">
                <div className="myPic">
                    <img 
                    src = {myPicture} 
                    alt = "pic" 
                    width = "300px"
                    />
                </div>

                <div className="container-2">
                    <div className="myName-1">
                        <h1>CLARISSA AUDREY</h1>
                    </div>

                    <div className="description">
                        <h3>Software development • UI design</h3>
                    </div>

                    <div className="container-3">
                        <div className="connect">
                            <div className="title">
                                <h6>Connect</h6>
                            </div>

                            <div className="logo">
                                <a 
                                href='www.linkedin.com/in/clarissa-audrey'
                                target="_blank">
                                    <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1024px-Linkedin.svg.png"
                                    alt="LinkedIn"
                                    width="40px"
                                    height="40px"
                                    />
                                </a>

                                <a href='mailto:clarissalukmanto@gmail.com'>
                                    <img 
                                    src="https://cdn.worldvectorlogo.com/logos/mail-ios.svg"
                                    alt="Email"
                                    width="50px"
                                    height="40px"
                                    />
                                </a>
                                
                                <a 
                                href='https://github.com/clarissaudrey'
                                target="_blank">
                                    <img 
                                    src="https://d33wubrfki0l68.cloudfront.net/a040d3fe135a512291b3bcab94c329c590e5c275/a2511/images/github-octocat.svg"
                                    alt="Github"
                                    width="40px"
                                    height="40px"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="title">
                                <h6>Technical skills</h6>
                            </div>

                            <div className="skills-row-1">
                                <div className="kSkillList">
                                    <p className="kSkill">Programming language</p>
                                    <p>C++, Java, C, Python, DrRacket, Assembly, R</p>
                                </div>
                                <div className="kSkillList">
                                    <p className="kSkill">Tools</p>
                                    <p>Git, JSON, IntelliJ, Visual Studio Code, Atom, Logisim, Oracle, MATLAB, breadboard</p>
                                </div>
                            </div>

                            <div className="skills-row-2">
                                <div className="kSkillList">
                                    <p className="kSkill">Web and styling</p>
                                    <p>JavaScript, CSS, HTML, React, Sass, MySQL, PHP</p>
                                </div>
                                <div className="kSkillList">
                                    <p className="kSkill">Testing</p>
                                    <p>JUnit test, blackbox test, automation script, writing test plans</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
