import React from 'react';
import Coder from '../images/Coder.webp';
import Gmail from '../images/Gmail-Preview.png';
import WelcomeAnimation from '../assets/WelcomeAnimation';
import { HeaderContainer } from '../containers/HeaderContainer';
import { animated } from 'react-spring';
import adopt from '../images/Adopt-a-Pet.png';
import appointment from '../images/Appointment-Planner.png';
import numberGuesser from '../images/Number-Guesser.png';
import techNews from '../images/Tech-News.png';
import jammming from '../images/Jammming.png';
import reactIcon from '../images/React-icon.png';
import reduxIcon from '../images/Redux-icon.svg';
import htmlIcon from '../images/Html-icon.webp';
import cssIcon from '../images/Css-icon.webp';
import jsIcon from '../images/Js-icon.png';
import nodeIcon from '../images/Node.js-icon.png';
import gitIcon from '../images/git-icon.png';
import awsIcon from '../images/aws-icon.png';
import axiosIcon from '../images/axios-logo.png';
import jestIcon from '../images/Jest-icon.png';
import reactTLIcon from '../images/react-testing-library-logo.png';
import restApiIcon from '../images/rest-api-icon.png';
import expressIcon from '../images/ExpressJS-icon.webp';

export const FrontPageComponent = ({
    handleGitHubClick,
    handleEmailSVGClick,
    zoomOutSkills,
    zoomOutProjects,
    unBlurGmail,
    handleGMailFindOutMoreClick,
    windowWidth,
    handleJammmingPanelClick,
    skillsContainerHasZoomed,
    projectsContainerHasZoomed,
    handleGMailLiveSiteClick,
    handleAdoptAPetPanelClick,
    handleTechNewsPanelClick,
    appointmentPlannerPanelClick,
    numberGuesserPanelClick,
    zoomOutFuturePlans,
    futurePlansContainerHasZoomed,
    handleReset,
    handleChange,
    handleSubmit,
    formData,
    zoomOutContact,
    contactContainerHasZoomed,
}) => {

    return (

        <>

{/* Welcome Screen */}

            {/* <WelcomeAnimation /> */}

{/* Header */}

            <HeaderContainer />

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

                        <svg 
                            onClick={handleGitHubClick}
                            class="svg-icon" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            id="github"
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>                   
                        <svg 
                            onClick={handleEmailSVGClick}
                            class="svg-icon" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 75 75" 
                            id="email">
                                <path d="M 66.097 12.089 L 9.196999 12.089 C 4.126 12.089 0 16.215 0 21.286 L 0 21.286 L 0 54.008 C 0 59.079 4.126 63.204998 9.197 63.204998 L 9.197 63.204998 L 66.097 63.204998 C 71.168 63.204998 75.294 59.079 75.294 54.008 L 75.294 54.008 L 75.294 21.287 C 75.295 16.215 71.169 12.089 66.097 12.089 z M 61.603 18.089 L 37.647 33.523 L 13.691 18.089 L 61.603 18.089 z M 66.097 57.206 L 9.196999 57.206 C 7.434 57.206 6 55.771 6 54.009 L 6 54.009 L 6 21.457 L 35.795998 40.617 C 35.836 40.642002 35.878998 40.659 35.92 40.682 C 35.962997 40.705997 36.007 40.729 36.051 40.751 C 36.281998 40.87 36.52 40.966 36.763 41.029 C 36.788002 41.036 36.813 41.038998 36.838 41.045 C 37.105 41.107998 37.375 41.147 37.645 41.147 C 37.646 41.147 37.647 41.147 37.647 41.147 C 37.649 41.147 37.649998 41.147 37.651 41.147 C 37.921 41.147 38.191 41.109 38.458 41.045 C 38.483 41.038998 38.508 41.036 38.533 41.029 C 38.776 40.966 39.013 40.87 39.245003 40.751 C 39.289 40.729 39.333004 40.706 39.376003 40.682 C 39.417004 40.659 39.460003 40.642 39.500004 40.617 L 39.500004 40.617 L 69.296005 21.457 L 69.296005 54.008 C 69.295 55.771 67.86 57.206 66.097 57.206 z"/>
                        </svg>
                    </div>
                    
                    <div id="ph-p-container">
                        <p id='p-page-hero'>I am passionate about creating beautiful, immersive and interactive websites - whilst implementing the latest, powerful libraries.
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

            <div class="content-container-margin">
                
                <h2 class="section-title slide-in-left-placeholder" id='skills-nav'>
                    My <span class="h2-highlight">Skills</span>
                </h2>
                <animated.div style={zoomOutSkills}>
                    {windowWidth <= 1210 ? (
                        <div className={`small-skills-container ${skillsContainerHasZoomed ? 'show' : ''}`}>
                            <div id='small-skills-top-row'>
                                <div class='small-skills-half-1'>
                                    <img src={Coder} alt="person-coding" id="coding-img"/>
                                </div>
                                <div class='small-skills-half-2'>
                                <div class="row" id="skills-box">
                                    <div class="skill-container">
                                        <p className='text-centre'>React</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>HTML</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>CSS</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>JavaScript</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>Node.js</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>Git</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>GitHub</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>AWS</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>Express.js</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>MUI</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>Axios</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>Jest/ React Testing Library</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div id='small-skills-bottom-row'>
                                    <h4>I love learning about and implementing powerful, sophisticated Web Development solutions.</h4>
                                    <p>I get a great satisfcation in becoming competant in something that requires a lot of skill, determination and passion. Whether it be Forex trading: where I've had over $200,000 AUM funded proprietary trading accounts that I've been paid from, competitive gaming where I achieved rank 256 online in Europe for Overwatch, or playing the drums (play at grade 7/8) - all of which displays grit, resiliance, high IQ and on the fly problem solving abilities in a landscape where a degree of variables are dynamically changing (characterisitic traits which transfer over nicely to software engineering). Now I plan to focus intently on Front End/ React Development, to improve everyday and create some amazing projects.</p>        
                                    <p>It seems like all intricate, yet simple well oiled parts of Web Dev and the challenge of the learning curve garnered my attention and I became devouted. Seeing my progression and skills increase quickly made me realise what is possible with code (front-end, back-end, or any other projects I have in mind) made me want to pursue this as a long term goal and be the best I can be at it.</p>          
                            </div>
                        </div>
                    ) : (
                        <div className={`skills-container ${skillsContainerHasZoomed ? 'show' : ''}`}>
                            <div id="coding-picture-column">
                                <img src={Coder} alt="person-coding" id="coding-img"/>
                            </div>
                            <div id="skills-column">
                                <div class="row" id="skills-box">
                                    <div class="skill-container">
                                        <p>React</p>
                                    </div>
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
                                        <p>Node.js</p>
                                    </div>
                                    <div class="skill-container">
                                        <p>Git</p>
                                    </div>
                                    <div class="skill-container">
                                        <p>GitHub</p>
                                    </div>
                                    <div class="skill-container">
                                        <p className='text-centre'>AWS</p>
                                    </div>
                                    <div class="skill-container">
                                        <p>Express.js</p>
                                    </div>
                                    <div class="skill-container">
                                        <p>MUI</p>
                                    </div>
                                    <div class="skill-container">
                                        <p>Axios</p>
                                    </div>
                                    <div class="skill-container">
                                        <p>Jest/ React Testing Library</p>
                                    </div>
                                </div>
                                <div class="row" id="small-about">
                                    <h4>I love learning about and implementing powerful, sophisticated Web Development solutions.</h4>
                                    <p>I get a great satisfcation in becoming competant in something that requires a lot of skill, determination and passion. Whether it be Forex trading: where I've had over $200,000 AUM funded proprietary trading accounts that I've been paid from, competitive gaming where I achieved rank 256 online in Europe for Overwatch, or playing the drums (play at grade 7/8) - all of which displays grit, resiliance, high IQ and on the fly problem solving abilities in a landscape where a degree of variables are dynamically changing (characterisitic traits which transfer over nicely to software engineering). Now I plan to focus intently on Front End/ React Development, to improve everyday and create some amazing projects.</p>        
                                    <p>It seems like all the intricate, yet simple well oiled parts of Web Development and the challenge of the learning curve garnered my attention and I became devouted. Seeing my progression and skills increase quickly made me realise what is possible with code (front-end, back-end, or any other projects I have in mind) made me want to pursue this as a long term goal and be the best I can be at it.</p>          
                                </div>
                            </div>
                        </div>
                    )}
                </animated.div>
            </div>

{/* Projects */}

            <div class="content-container-padding-fp" id='squiggle-divide-project'>
                
                <div class='slide-in-right-placeholder projects-h2-container' id='projects-nav'>
                    <h2 class='opposite-section-title'>
                        My <span class="h2-highlight">Projects</span>
                    </h2>
                </div>
                
                <animated.div style={zoomOutProjects}>
                    {windowWidth <= 1298 ? (
                        <div className={`small-projects-container ${projectsContainerHasZoomed ? 'show' : ''}`}>
                            <div id="projects-column-writting-small">
                                <h3 className='orange-projects'id='projects-h3'>Gmail Clone</h3>
                                <p class='projects-p'>The idea for this project was to create a fully functional, comprehensive real world React App. It would encompass the vast majority of the required technical aspects of what a competant Junior Front-End React Developer should know and be able to work with. </p>
                                <p class='projects-p'>I also added back-end implementation in the form of an Express.js server for custom API end points.</p>
                                <p class='projects-p'>In this endeavour I pushed myself and in turn was rewarded with the knowledge and ability to create with all of the skills listed in my skills section above and the following:</p>
                                <div id='gmail-list-container'> 
                                    <div class='gmail-list-half'>
                                        <ul id='gmail-list-left' class='projects-p'> 
                                            <li>React Router DOM</li>
                                            <li>React Hooks</li>
                                            <li>Asynchronous RESTful API's</li>
                                            <li>Promises</li>
                                            <li>.env Variables</li>
                                            <li>DOM Manipulation</li>
                                            <li>JSX injection</li>
                                            <li>Ternary Operators</li>
                                            <li>JS Short Circuits</li>
                                            <li>Dyanmic Rendering from nested object based on global state</li>
                                            <li>Folder/ file directory best practices</li>
                                            <li>Array methods and manipulation</li> 
                                            <li>Object Destructuring Assignment</li>                                             
                                        </ul>
                                    </div>
                                    <div class='gmail-list-half'>
                                        <ul id='gmail-list-right' class='projects-p'>
                                            <li>MUI</li>
                                            <li>Utilising and manipulting JSON</li>
                                            <li>React Select UI Component</li>
                                            <li>ARIA</li>
                                            <li>Responsivity</li>
                                            <li>Working with SVGS</li>
                                            <li>Regex</li>
                                            <li>Writing clean modular code (important to work with and test)</li>
                                            <li>Loops</li>
                                            <li>Express Server</li>
                                            <li>Custom API Endpoints</li>
                                            <li>Git</li>
                                            <li>GitHub</li>
                                            <li>Jest/ React Testing Library</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id='gmail-tech-svgs'>
                                    <img class='tech-icon-html tech-bottom' src={htmlIcon}></img>
                                    <img class='tech-icon tech-bottom' src={cssIcon}></img>
                                    <img class='tech-icon-js tech-bottom' src={jsIcon}></img>
                                    <img class='tech-icon tech-bottom' src={reactIcon}></img>
                                    <img class='tech-icon tech-bottom' src={restApiIcon}></img>
                                    <img class='tech-icon tech-bottom' src={nodeIcon}></img>
                                    <img class='tech-icon tech-bottom br-50' src={expressIcon}></img>
                                    <img class='tech-icon tech-bottom' src={axiosIcon}></img>
                                    <img class='tech-icon tech-bottom' src={gitIcon}></img>
                                    <svg class='tech-icon tech-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                    </svg>
                                    <img class='tech-icon tech-bottom br-50' src={jestIcon}></img>
                                    <img class='tech-icon tech-bottom' src={reactTLIcon}></img>
                                    <img class='tech-icon tech-bottom br-50' src={awsIcon}></img>
                                </div>
                                <div class='find-out-and-live-buttons'>
                                    <button class='standard-button' onClick={handleGMailFindOutMoreClick}>
                                        Find out more
                                    </button>  
                                    <button class='standard-button'>
                                        Live Site
                                    </button>               
                                </div>
                            </div>
                            <div id="projects-picture-column">
                                <img src={Gmail} alt="" id={ unBlurGmail ? 'gmail-img-unblur' : "gmail-img"}/>
                            </div>
                        </div>
                    ) : (
                        <div className={`projects-container ${projectsContainerHasZoomed ? 'show' : ''}`}>
                            <div id="projects-column-writting">
                                <h3 className='orange-projects'id='projects-h3'>Gmail Clone</h3>
                                <p class='projects-p'>The idea for this project was to create a fully functional, comprehensive real world React App. It would encompass the vast majority of the required technical aspects of what a competant Junior Front-End React Developer should know and be able to work with. </p>
                                <p class='projects-p'>I also added back-end implementation in the form of an Express.js server for custom API end points.</p>
                                <p class='projects-p'>In this endeavour I pushed myself and in turn was rewarded with the knowledge and ability to create with all of the skills listed in my skills section above and the following:</p>
                                <div id='gmail-list-container'> 
                                    <div class='gmail-list-half'>
                                        <ul id='gmail-list-left'> 
                                            <li>Git</li>
                                            <li>GitHub</li>
                                            <li>Asynchronous RESTful API's</li>
                                            <li>Promises</li>
                                            <li>.env Variables</li>
                                            <li>DOM Manipulation</li>
                                            <li>JSX injection</li>
                                            <li>Ternary Operators</li>
                                            <li>JS Short Circuits</li>
                                            <li>Dyanmic Rendering from nested object based on global state</li>
                                            <li>Folder/ file directory best practices</li>
                                            <li>Array methods and manipulation</li>  
                                            <li>Object Orientated Programming</li>                                            
                                        </ul>
                                    </div>
                                    <div class='gmail-list-half'>
                                        <ul id='gmail-list-right'>
                                            <li>MUI</li>
                                            <li>Utilising and manipulting JSON</li>
                                            <li>React Select UI Component</li>
                                            <li>ARIA</li>
                                            <li>Responsivity</li>
                                            <li>Working with SVGS</li>
                                            <li>Regex</li>
                                            <li>Writing clean modular code (important to work with and test)</li>
                                            <li>Loops</li>
                                            <li>Express Server</li>
                                            <li>Custom API Endpoints</li>
                                            <li>React Router DOM</li>
                                            <li>React Hooks</li>
                                            <li>Jest/ React Testing Library</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id='gmail-tech-svgs'>
                                    <img class='tech-icon-html tech-bottom' src={htmlIcon}></img>
                                    <img class='tech-icon tech-bottom' src={cssIcon}></img>
                                    <img class='tech-icon-js tech-bottom' src={jsIcon}></img>
                                    <img class='tech-icon tech-bottom' src={reactIcon}></img>
                                    <img class='tech-icon tech-bottom' src={restApiIcon}></img>
                                    <img class='tech-icon tech-bottom' src={nodeIcon}></img>
                                    <img class='tech-icon tech-bottom br-50' src={expressIcon}></img>
                                    <img class='tech-icon tech-bottom' src={axiosIcon}></img>
                                    <img class='tech-icon tech-bottom' src={gitIcon}></img>
                                    <svg class='tech-icon tech-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                    </svg>
                                    <img class='tech-icon tech-bottom br-50' src={jestIcon}></img>
                                    <img class='tech-icon tech-bottom' src={reactTLIcon}></img>
                                    <img class='tech-icon tech-bottom br-50' src={awsIcon}></img>
                                </div>
                                <div class='find-out-and-live-buttons'>
                                    <button class='standard-button' onClick={handleGMailFindOutMoreClick}>
                                        Find out more
                                    </button>  
                                    <button class='standard-button' onClick={handleGMailLiveSiteClick}>
                                        Live Site
                                    </button>               
                                </div>
                            </div>
                            <div id="projects-picture-column">
                                <img src={Gmail} alt="" id={unBlurGmail ? 'gmail-img-unblur' : "gmail-img"}/>
                            </div>
                        </div>
                    )}
                        
                </animated.div>
            </div>

            <div id='black-buffer'></div>
            
            <div id='black-background-project'>
                <div id='projects-grid'>
                    <div class='project-case' onClick={handleJammmingPanelClick}>
                        <div class='project-image-container'>
                            <img src={jammming} alt='Jammming' id='jammming'/>
                        </div>
                        <div class='project-description-container'>
                            <h3 class='project-desc-h3'>Jammming</h3>
                            <p class='project-desc-p'>An app that allows you to search for music on Spotify, preview tracks, create a playlist and then save that playlist to Spotify through the Spotify API.</p>
                            <div class='project-desc-svg-container'>
                                <img class='desc-svg-icon' src={htmlIcon}></img> 
                                <img class='desc-svg-icon' src={cssIcon}></img> 
                                <img class='desc-svg-icon' src={jsIcon}></img> 
                                <img class='desc-svg-icon' src={reactIcon}></img> 
                                <img class='desc-svg-icon' src={restApiIcon}></img> 
                                <img class='desc-svg-icon' src={gitIcon}></img>
                                <svg class='desc-svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class='project-case' onClick={handleAdoptAPetPanelClick}>
                        <div class='project-image-container'>
                            <img src={adopt} alt='Adopt a Pet' id='adopt'/>
                        </div>
                        <div class='project-description-container'>
                            <h3 class='project-desc-h3'>Adopt a Pet</h3>
                            <p class='project-desc-p'>A pet adoption website built with React that searches a database of pets and displays their information accordingly.</p>
                            <div class='project-desc-svg-container'>
                                <img class='desc-svg-icon' src={htmlIcon}></img> 
                                <img class='desc-svg-icon' src={cssIcon}></img> 
                                <img class='desc-svg-icon' src={jsIcon}></img> 
                                <img class='desc-svg-icon' src={reactIcon}></img> 
                                <img class='desc-svg-icon' src={restApiIcon}></img> 
                                <img class='desc-svg-icon' src={gitIcon}></img>
                                <svg class='desc-svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class='project-case' onClick={handleTechNewsPanelClick}>
                        <div class='project-image-container'>
                            <img src={techNews} alt='Tech News' id='tech-news'/>
                        </div>
                        <div class='project-description-container'>
                            <h3 class='project-desc-h3'>Tech News</h3>
                            <p class='project-desc-p'>A Tech News App built with React that allows for navigation of tech articles. Also uses Redux that dispatches payloads to create, edit and log out of your user profile.</p>
                            <div class='project-desc-svg-container'>
                                <img class='desc-svg-icon' src={htmlIcon}></img> 
                                <img class='desc-svg-icon' src={cssIcon}></img> 
                                <img class='desc-svg-icon' src={jsIcon}></img> 
                                <img class='desc-svg-icon' src={reactIcon}></img> 
                                <img class='desc-svg-icon' src={gitIcon}></img>
                                <svg class='desc-svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                <img class='desc-svg-icon' src={reduxIcon}></img> 
                                <img class='desc-svg-icon' src={reactTLIcon}></img> 
                                <img class='desc-svg-icon br-50' src={awsIcon}></img> 
                            </div>
                        </div>
                    </div>
                    <div class='project-case' onClick={appointmentPlannerPanelClick}>
                        <div class='project-image-container-appointment'>
                            <img src={appointment} alt='Appointment Planner' id='appointment'/>
                        </div>
                        <div class='project-description-container'>
                            <h3 class='project-desc-h3'>Appointment Planner</h3>
                            <p class='project-desc-p'>An appointment planner app built with React, that can generate new contact client profiles, which can then be assigned to specific appointments.</p>
                            <div class='project-desc-svg-container'>
                                <img class='desc-svg-icon' src={htmlIcon}></img> 
                                <img class='desc-svg-icon' src={cssIcon}></img> 
                                <img class='desc-svg-icon' src={jsIcon}></img> 
                                <img class='desc-svg-icon' src={reactIcon}></img> 
                                <img class='desc-svg-icon' src={gitIcon}></img>
                                <svg class='desc-svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                <img class='desc-svg-icon br-50' src={awsIcon}></img> 
                            </div>
                        </div>
                    </div>
                    <div class='project-case' onClick={numberGuesserPanelClick}>
                        <div class='project-image-container'>
                            <img src={numberGuesser} alt='Number Guesser' id='number-guesser'/>
                        </div>
                        <div class='project-description-container'>
                            <h3 class='project-desc-h3'>Number Guesser</h3>
                            <p class='project-desc-p'>A number guesser game vs the Computer where whoever gets closest to randomly generated target wins!</p>
                            <div class='project-desc-svg-container'>
                                <img class='desc-svg-icon' src={htmlIcon}></img> 
                                <img class='desc-svg-icon' src={cssIcon}></img> 
                                <img class='desc-svg-icon' src={jsIcon}></img> 
                                <img class='desc-svg-icon' src={gitIcon}></img>
                                <svg class='desc-svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                <img class='desc-svg-icon br-50' src={awsIcon}></img> 
                            </div>
                        </div>
                    </div>
                    <div id='grid-buffer'></div>
                </div>
            </div>

{/* Future Plans */}

            <div class="content-container-padding-future" id='opposite-squiggle-divide-project'>

                <h2 class="section-title slide-in-left-placeholder h2-margin-top" id='future-plans-nav'>
                    My <span class="h2-highlight">Future Plans</span>
                </h2> 

                <animated.div style={zoomOutFuturePlans}> 
                    <div className={`future-plans-container ${futurePlansContainerHasZoomed ? 'show' : ''}`}>
                        <p class='future-plans-p'>
                            After nearly 2 years of devoting most of my free time to improving as predominantly a Front-End React Developer, I feel like I could comfortably take on Front-End projects with minimal supervision and thrive. This is because of my plethora of experience - through learning the skill via Codecademy's premium course and then applying attained knowledge through projects to retain it indefinitely. It's also a benefit in my favour that I am an astonishingly quick learner, I possess incredible memory recall and I innately have a lot of drive and passion for things I want to run with and excel in.               
                        </p>
                        <p class='future-plans-p-2'>
                            Whilst I now know how to implement a large bulk of what is needed to be successfully independent in this field, there are still a handful of desirable skills I want to master going forwards that I feel would make me even more valuable and useful:                
                        </p>
                        <div id='marquee'>
                            <div class='marquee-row'>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                                <h3 class="marquee-word">
                                    Next.JS <svg class='next-svg' width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
                                            </svg>
                                </h3>
                            </div>
                            <div class='marquee-row'>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript 
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                                <h3 class="marquee-word-opposite">
                                    <svg xmlns="http://www.w3.org/2000/svg" class='ts-top' viewBox="0 0 48 48" width="40px" height="40px"><linearGradient id="atmafua87GAY-Q3DVUuwga" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"/><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"/><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"/><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"/><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"/></svg> TypeScript
                                </h3>
                            </div>
                            <div class='marquee-row'>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                                <h3 class="marquee-word-big-slow">
                                    SQL <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
            width="42px" height="35px" viewBox="0 0 550.801 550.801"
            >
        <g>
            <g>
                <path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
            </g>
        </g>
                                        </svg>
                                </h3>
                            </div>
                            <div class='marquee-row'>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                                <h3 class="marquee-word-opposite-smaller">
                                    <svg width="30px" height="30px" viewBox="0 -6 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z" fill="#764ABC">

        </path>
            </g>
        </svg> Redux
                                </h3>
                            </div>
                        </div>
                        <p class='future-plans-p-2'>
                            I have already started to learn about TypeScript about how it provides typing of JS to ensure the robustness and reliability of the code. In my next project(s) I build will be encorporating Next.js, TS and SQL. Redux is a more longer time frame skill I want to pick up.
                        </p>
                    </div>    
                </animated.div> 
            </div>

{/* Contact me */} 

            <div class="content-container-padding-fp" id='squiggle-divide-project'>
                <div class='contact-title-margin slide-in-right-placeholder projects-h2-container' id='contact-me-nav'>
                    <h2 class='opposite-section-title'>
                        <span class="h2-highlight">Contact Me</span>
                    </h2>
                </div>
                
                <animated.div style={zoomOutContact}>
                    <div class={`contact-container ${contactContainerHasZoomed ? 'show-contact' : ''} contact-outer-margin-top py-3 sm:max-w-xl sm:mx-auto`}>
                        <div class="outside-bg background-image absolute inset-0 from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div class="inside-bg text-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="text-center pb-6">
                                <h1 class="text-3xl">Get in Touch</h1>
                                <p class="">I look forward to speaking with you.</p>
                                <p id="contact-email-p">Or contact me via your preferred method: <u>jacmatthews7@gmail.com</u></p>
                            </div>
                            <form id='contact-form' onSubmit={handleSubmit}>
                                <input
                                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Subject"
                                    name="_subject"
                                    value={formData._subject}
                                    onChange={handleChange}
                                />
                                <textarea
                                    className="no-resize shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Type your message here..."
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ height: '171px' }}
                                ></textarea>
                                <div class="contact-buttons-container">
                                    <div class='button-fix'>
                                        <button className="btn-5" type='submit'>
                                            <div className="outline"></div>
                                            <div className="state state--default">
                                            <div className="icon">
                                                <svg
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <g style={{ filter: 'url(#shadow)' }}>
                                                    <path
                                                    d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                                                    fill="currentColor"
                                                    ></path>
                                                    <path
                                                    d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                                    fill="currentColor"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <filter id="shadow">
                                                    <feDropShadow
                                                        dx="0"
                                                        dy="1"
                                                        stdDeviation="0.6"
                                                        floodOpacity="0.5"
                                                    ></feDropShadow>
                                                    </filter>
                                                </defs>
                                                </svg>
                                            </div>
                                            <p>
                                                <span style={{ '--i': 0 }}>S</span>
                                                <span style={{ '--i': 1 }}>e</span>
                                                <span style={{ '--i': 2 }}>n</span>
                                                <span style={{ '--i': 3 }}>d</span>
                                            </p>
                                            </div>
                                            <div className="state state--sent">
                                            <div className="icon">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                strokeWidth="0.5px"
                                                stroke="black"
                                                >
                                                <g style={{ filter: 'url(#shadow)' }}>
                                                    <path
                                                    fill="rgb(255, 98, 0)"
                                                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                                    ></path>
                                                    <path
                                                    fill="rgb(255, 98, 0)"
                                                    d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                                                    ></path>
                                                </g>
                                                </svg>
                                            </div>
                                            <p>
                                                <span style={{ '--i': 5 }}>S</span>
                                                <span style={{ '--i': 6 }}>e</span>
                                                <span style={{ '--i': 7 }}>n</span>
                                                <span style={{ '--i': 8 }}>t</span>
                                            </p>
                                            </div>
                                        </button>
                                    </div>    
                                    <div class='button-fix' onClick={handleReset}>
                                        <a class="btn-1"><span>Reset</span></a>  
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </animated.div>
                
            </div>

        </>
    );
}
