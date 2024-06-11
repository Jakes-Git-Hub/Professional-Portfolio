
import React from 'react';
import gmailCode from '../images/gmail-code.png';

export const GMailMoreComponent = ({
    handleGHSVGClick,
    videoRef,
    videoRef1,
    videoRef2,
    videoRef3,
    videoRef4,
    videoRef5,
    videoRef6,
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
                    <p id='hightlight-desc-p'>As well as the panels below that feature impressive functionalities of this project, there is also a lot more intelligent code under the hood that is worth looking at.</p>
                        <svg 
                            id='hightlight-desc-svg' 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                            onClick={handleGHSVGClick}
                            title='Gmail Project Src Code'
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <h3 class='bottom-h3'>Google Translation Api</h3>
                        <p class='p-showcase'>
                            This feature allows the user to translate the whole of the text in the app to a multitude of languages - this is done by having a text object that has nested values for each language. 
                        </p>
                        <p class='p-showcase'>
                            When a language is chose this then updates the user by altering userData.language which then dyanmically renders the translated text, this is better than running the text through a translation API as it translated instantly improving UX and saves money.
                        </p>
                    </div>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef1}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/Twilio-Api-Showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                    <div class='highlight-half-1'>
                        <h3>Twilio SMS Authorisation</h3>
                        <p class='p-showcase'>
                            This authorisation method uses Twilio and a custom API end point in my Express.js server - which recieves a formatted phone number. It then creates a random 6 digit verification code which is sent to the user via SMS and if they enter it correctly they can continue the form.
                        </p>
                        <p class='p-showcase'>
                            Twilio Integration is done for confirming a user is not a robot. Also it is used for if a user has forgotten their password, we can verify them through Twilio alongside other correct matching information.
                        </p>
                        <p class='p-showcase'>
                            The formatted number is created by a function that uses google-libphonenumber formatting. It is created based on user input and the region which is attained either through the users IP (Grabbed from my server), or their country selection choice. 
                        </p>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <h3>Send Grid Email Authorisation</h3>
                    </div>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef2}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/Send Grid Example.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef3}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/IP Geo Location IP Showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                    <div class='highlight-half-1'>
                        <h3>Geo Locatio Ip Grabber</h3>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <h3>Responsivity</h3>
                    </div>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef4}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/Responsivity Showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef5}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/Server Code Showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                    <div class='highlight-half-1'>
                        <h3>Express Server</h3>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <h3>Security</h3>
                    </div>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef6}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/translation-showcase.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                    
                </div>
            </div>



        </>
    );
}
