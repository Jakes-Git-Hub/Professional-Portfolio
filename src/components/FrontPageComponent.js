import React from 'react';
import Coder from '../images/Coder.webp';
import WelcomeAnimation from '../assets/WelcomeAnimation';

export const FrontPageComponent = () => {
    return (

        <>

{/* Welcome Screen */}

            <WelcomeAnimation />

{/* Header */}

            <div class="header">
                <header>
                    <p>Jake Matthews</p>
                    <ul>
                        <li class="underline">About</li>
                        <li class="underline">Projects</li>
                        <li class="underline">Future Plans</li>
                        <li class="underline">Contact</li>
                    </ul>
                </header>
            </div>

{/* Page Hero */}

            <div class="page-hero">
                <div id="background-wrap">
                        <div class="x1">
                            <div class="cloud"></div>
                        </div>
                    
                        <div class="x2">
                            <div class="cloud"></div>
                        </div>
                    
                        <div class="x3">
                            <div class="cloud"></div>
                        </div>
                    
                        <div class="x4">
                            <div class="cloud"></div>
                        </div>
                    
                        <div class="x5">
                            <div class="cloud"></div>
                        </div>
                    </div>
                <div id="writing-container">
                    
                    <div id="ph-h1-container">
                        <h1>Hi, I'm Jake | <span class="highlight">Software </span>
                        <br />
                        <span class="highlight">Engineer </span></h1>
                    </div>
                    <div id="page-hero-svgs">

                        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    
                        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    
                        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" id="email">
                            <path d="M 66.097 12.089 L 9.196999 12.089 C 4.126 12.089 0 16.215 0 21.286 L 0 21.286 L 0 54.008 C 0 59.079 4.126 63.204998 9.197 63.204998 L 9.197 63.204998 L 66.097 63.204998 C 71.168 63.204998 75.294 59.079 75.294 54.008 L 75.294 54.008 L 75.294 21.287 C 75.295 16.215 71.169 12.089 66.097 12.089 z M 61.603 18.089 L 37.647 33.523 L 13.691 18.089 L 61.603 18.089 z M 66.097 57.206 L 9.196999 57.206 C 7.434 57.206 6 55.771 6 54.009 L 6 54.009 L 6 21.457 L 35.795998 40.617 C 35.836 40.642002 35.878998 40.659 35.92 40.682 C 35.962997 40.705997 36.007 40.729 36.051 40.751 C 36.281998 40.87 36.52 40.966 36.763 41.029 C 36.788002 41.036 36.813 41.038998 36.838 41.045 C 37.105 41.107998 37.375 41.147 37.645 41.147 C 37.646 41.147 37.647 41.147 37.647 41.147 C 37.649 41.147 37.649998 41.147 37.651 41.147 C 37.921 41.147 38.191 41.109 38.458 41.045 C 38.483 41.038998 38.508 41.036 38.533 41.029 C 38.776 40.966 39.013 40.87 39.245003 40.751 C 39.289 40.729 39.333004 40.706 39.376003 40.682 C 39.417004 40.659 39.460003 40.642 39.500004 40.617 L 39.500004 40.617 L 69.296005 21.457 L 69.296005 54.008 C 69.295 55.771 67.86 57.206 66.097 57.206 z"/>
                        </svg>
                    </div>
                    
                    <div id="ph-p-container">
                        <p>I am passionate about creating beautiful, immersive and interactive websites – whilst implementing the latest, most powerful libraries and frameworks.
                            <br />
                            <br />
                            I have a thirst for pushing my capabilities.
                            <br />
                            <br />
                            I am also an experienced Forex trader.
                        </p>
                    </div>
                </div>
            </div> 

{/* My Skills */}

        <div class="content-container">
            
            <h2 class="section-title">My <span class="h2-highlight">Skills</span></h2>
            <div id="skills-container">
                <div id="coding-picture-column">
                    <img src={Coder} alt="" id="coding-img"/>
                </div>
                <div id="skills-column">
                    <div class="row" id="skills-box">
                        <div class="skill-container">
                            <p>HTML</p>
                        </div>
                        <div class="skill-container">
                            <p>CSS</p>
                        </div>
                        <div class="skill-container">
                            <p>JavaScript</p>
                        </div>
                        <div class="skill-container">
                            <p>React</p>
                        </div>
                        <div class="skill-container">
                            <p>Node.js</p>
                        </div>
                        <div class="skill-container">
                            <p>Git</p>
                        </div>
                        <div class="skill-container">
                            <p>GitHub</p>
                        </div>
                        <div class="skill-container">
                            <p>Netlify</p>
                        </div>
                        <div class="skill-container">
                            <p>API's</p>
                        </div>
                        <div class="skill-container">
                            <p>Authenticate & Authorise (AUth0)</p>
                        </div>
                    </div>
                    <div class="row" id="small-about">
                        <h4>I love learning about and implementing meta Web Development solutions.</h4>
                        <p>I get a great satisfcation in becoming competant in something that requires a lot of skill, determination and passion. Whether it be Forex trading: where I've had over $200,000 AUM funded proprietary trading accounts that I've been paid from, or competitive gaming where I achieved rank 256 online in Overwatch - which displays high IQ and on the fly problem solving abilities in a landscape where a vast quantity of variables are changing every second, whilst also keeping track of the state of the game in the back of my mind & now Front End Development - which I plan to make one of my babies and go on to Full Stack.</p>        
                        <p>It seems like all the intricate well oiled parts of WebDev and the challenge of the learning curve garnered my attention and I became an avid learner. Seeing my progression and skills increase quickly and then realising what I am capable of and what is possible with code (front-end and back-end) then made me want to pursue this as a long term goal and be the best I can possibly be at it.</p>          
                    </div>
                </div>
            </div>
        </div>

        {/* Arrow Line */}
        

        {/* Projects */}

        <div class="content-container" id="projects">
            <h2 class="opposite-section-title"><span class="h2-highlight">Projects</span></h2>
        </div>

        </>
    );
}