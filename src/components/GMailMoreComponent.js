
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
    videoRef7,
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
                        <h3 class='bottom-h3'>Translation Feature</h3>
                        <p class='p-showcase'>
                            This feature allows the user to translate the whole of the text in the app to a multitude of languages - this is done by having a text object that has nested values for each language. 
                        </p>
                        <p class='p-showcase'>
                            When a language is chose this then updates the userin app.js by altering userData.language which then dyanmically renders the translated text. This is an imporvement on running the text through a translation API as it translated instantly improving UX and saves money.
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
                        <h3>Twilio API SMS Authorisation</h3>
                        <p class='p-showcase'>
                            This authorisation method uses Twilio and a custom API end point in my Express.js server - which recieves a formatted phone number. It then creates a random 6 digit verification code which is sent to the user via SMS to either confirm they are not a robot and continue the form or log in if they have forgotten their password.
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
                        <h3 id='SGH3'>Send Grid API Email Authorisation</h3>
                        <p class='p-showcase'>
                            This authorisation method uses Send Grid and a custom API end point in my Express.js server - which takes in an inputted email. It then creates a random 6 digit verification code which is sent to the user via email and if they enter it correctly they can continue the form, or log in if they have forgotten their password.
                        </p>
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
                        <h3 id='geo-h3'>Custom IP Grabber API Paired with IP Geolocation API</h3>
                        <p class='p-showcase'>
                            In my server there is a custom end point that uses either the forwardedFor request header or the remoteAddress request socket to return the users IP. We then have a grabUserIPHook, which makes a request to that end point to return the users Ip.
                        </p>
                        <p class='p-showcase'>
                            Then in App.js we can use object destructuring to call the hook and save the users IP into a variable to be passed to Confirm You're not a Robot.
                        </p>
                        <p class='p-showcase'>
                            Which allows us to set the users country flag as the initial placeholder flag for the dropdown menu, and to have the first country option in the list to always be their country, which helps improve UX.
                        </p>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1' id='geo-highlight-half-1'>
                        <h3>Google Translation API</h3>
                        <p class='geo-p-showcase'>
                            Initially for the translation for the entirety of my app, I was going to use Google translation API. However, when i implemented i found that the load time for translating the whole of the app was incredibly slow and ruined ux (also increased costs). So I instead opted for the approach described above.
                        </p>
                        <p class='geo-p-showcase'>
                            When I was implementing the React select component for the drop down I did so initially with a country object which had a lot of logic applied to it to filter and sort countries, also when i mapped through the object to render it into the select component there was also a lot of assoicated code. So instead of transfering the object with translated countries, to the text object. I instead used the google translation API to translate the country object and then saved it translatedCountries. 
                        </p>
                        <p class='geo-p-showcase'>
                            This was a good learning experience and I going forward I would translate the countries manually and store to the text object to translate instantly with no API. 
                        </p>
                    </div>
                    <div class='highlight-half-2'>
                        <video 
                            ref={videoRef7}
                            class='show-case-video' 
                            controls 
                            loop
                            muted
                        >
                            <source src='./videos/Google Translation API.mp4' type="video/mp4">
                            </source>
                        </video>
                    </div>
                </div>
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-container white-background'>
                    <div class='highlight-half-1'>
                        <h3 id='responsivity-h3'>Responsivity</h3>
                        <p class='p-showcase'>
                            The app is fully responsive, using media queries to apply optimal layouts or sophisticatedly hide aspects of the page fluidly depending on screen size.
                        </p>
                        <p class='p-showcase'>
                            Responsivty is also used for the MUI language changer menu where the extent of the menu height is calculated depending on the height of the screen.
                        </p>
                        <p class='p-showcase'>
                            It also uses responsive css formats to dyanmically render elements of the page. This improves UI and UX for all different hardware users.
                        </p>
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
