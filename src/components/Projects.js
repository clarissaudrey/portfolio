import React from 'react'
import './Projects.css'
import dict from './images/dict.jpg'
import transit from './images/transit.png'
import car from './images/car.jpg'
import dns from './images/dns.png'
import spaceinvader from './images/spaceinvade.png'
import mckay from './images/mckay.jpg'
import website from './images/myweb.png'

export default function Projects() {
    return (
        <div className="prjct-container-all">
            <div className="prjct-row-1">
                <div className="projects-title">
                    <h1>PROJECTS</h1>
                </div>

                <div className="prjct-box-1">
                    <div className="prjct-1-desc">
                        <div className="dict-desc">
                            <h4>Dictionary Server</h4>
                            <p>Created a TCP client and server simulation
                            for a dictionary network, in which the client requested for dictionary definitions from a set of natural language dictionary databases. Applied socket concept in Java to establish the server-client connection, PrintWriter for the client side, and BufferedReader for the server side. Included all error handlings that were specified in dict.org protocol (RFC 2229).
                            </p>
                        </div>
                        <div className="transit-desc">
                            <h4>Bus Transit Scheduler</h4>
                            <p>Created a mobile app for bus scheduler in Vancouver area showing the live schedule time, current location, and the route of buses. Parsed the schedule using JSON data from Translink official website and wrote the code using Java. Finally, GenyMotion Android simulator was deployed to run the final application.</p>
                        </div>
                    </div>

                    <div className="prjct-1-images">
                        <img 
                        src={dict}
                        alt="Dictionary server"
                        width="260px"
                        />
                        <img 
                        src={transit}
                        alt="Bus transit application"
                        width="260px"
                        />
                    </div>
                </div>
            </div>

            <div className="prjct-row-2">
                <div className="prjct-box-2">
                    <div className="prjct-2-desc">
                        <div className="car-desc">
                            <h4>Car Dealership Database</h4>
                            <p>Developed a car dealership relational database that handles the sales of cars, including the database of manager, sales person, costumer, and
                            vehicles. Created an E/R diagram for initial planning. The project used Oracle database along with MySQL and PHP. The front-end used simple css styling language.</p>
                        </div>
                        <div className="dns-desc">
                            <h4>Domain Name Server Lookup</h4>
                            <p>A UDP client-server protocol in which the client queried an hostname to get the IP address, which can be IPv4 or IPv6, corresponding to that hostname. The protocol used recursive hostname lookup starting from the root server, until it reached an IP address that matched the hostname. The implementation was written in Java using DatagramSocket and handled all the protocol errors.</p>
                        </div>
                    </div>

                    <div className="prjct-2-images">
                        <img 
                        src={car}
                        alt="Car dealership database"
                        width="260px"
                        />
                        <img 
                        src={dns}
                        alt="DNS lookup"
                        width="260px"
                        />
                    </div>
                </div>

                <div className="prjct-box-3">
                    <div className="prjct-3-images">
                        <img 
                        src={spaceinvader}
                        alt="Space invader game"
                        />
                        <img 
                        src={mckay}
                        alt="McKay Creek River flow measurement"
                        />
                        <img 
                        src={website}
                        alt="Clarissa Audrey's personal website"
                        />
                    </div>

                    <div className="prjct-3-desc">
                        <div className="space-desc">
                            <h4>Space Invader Game</h4>
                            <p>Developed a mini game that consisted of a airship that can fire missiles at the coming invaders. Wrote the code using Java, worked with abstract classes and inheritance to avoid coupling and to improve cohesion in the program, and created Junit test for each class.</p>
                        </div>
                        <div className="mckay-desc">
                            <h4>McKay Creek River Flow Measurement</h4>
                            <p>Measured the flow rates of the McKay Creek River in North Vancouver using float method and compared how flow rates contributed to annual flooding of the Okanagan Lake. All data gathered from the observations are computed using R to find statistical information, such as average, median, and numeric correlation.</p>
                        </div>
                        <div className="thiswebsite-desc">
                            <h4>Personal website</h4>
                            <p>This personal website was fully created from scratch using ReactJS and CSS. The techniques that were used included Router, flexbox, grid, and animation manipulation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
