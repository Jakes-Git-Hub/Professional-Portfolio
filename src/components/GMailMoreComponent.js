
import React from 'react';
import gmailCode from '../images/gmail-code.png';

export const GMailMoreComponent = ({
    handleGHSVGClick,
}) => {

    return (

        <>

            <div class="header">
                <header>
                    <p id='name'>Jake Matthews</p>
                    <ul>
                        <li class="underline">Skills</li>
                        <li class="underline">Projects</li>
                        <li class="underline">Future Plans</li>
                        <li class="underline">Contact</li>
                    </ul>
                </header>
            </div>

            <div class="content-container-padding" id='squiggle-divide-breakdown'>
                
                <h2 class="section-title">
                    Gmail Clone <span class="h2-highlight">Showcase</span>
                </h2>

                <div id ='gmail-code-container'>
                    <img src={gmailCode} alt="gmail-code" id="gmail-code"/>
                </div>
                
                
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-desc-container white-background'>
                    <p id='hightlight-desc-p'>As well as the panels below that show some of the impressive features of this project, there is a lot more intelligent code under the hood that is worth looking at also.</p>
                    <svg 
                        id='hightlight-desc-svg' 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        onClick={handleGHSVGClick}
                    >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <p>google translation api</p>
                    </div>
                    <div class='highlight-half-2'>
                        <video class='show-case-video' controls>
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-2'>
                        <video class='show-case-video' controls>
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                    <div class='highlight-half-1'>
                        <p>Twilio SMS auth</p>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <p>google translation api</p>
                    </div>
                    <div class='highlight-half-2'>
                        <video class='show-case-video' controls>
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-2'>
                        <video class='show-case-video' controls>
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                    <div class='highlight-half-1'>
                        <p>google translation api</p>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <p>google translation api</p>
                    </div>
                    <div class='highlight-half-2'>
                        <video class='show-case-video' controls>
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-2'>
                        <video class='show-case-video' controls>
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                    <div class='highlight-half-1'>
                        <p>google translation api</p>
                    </div>
                </div>
            </div>



        </>
    );
}
