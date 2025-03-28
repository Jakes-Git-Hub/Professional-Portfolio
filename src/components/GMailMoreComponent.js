
import React from 'react';
import smallGmailCode from '../images/small-gmail-code.png';
import smallerGmailCode from '../images/smaller-gmail-code.png' 
import ebSS from '../images/gmail-clone-eb-ss.png';
import s3SS from '../images/gmail-clone-s3-ss.png';
import TSSS from '../images/TypeScript-ss.png';
import { HeaderContainer } from '../containers/HeaderContainer';


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
    videoRef8,
    videoRef9,
    muiRef,
    cycleMuiVideo,
    muiSources,
    currentMuiIndex,
    windowWidth,
    handleGMailLiveSiteClick,
}) => {

    return (

        <>

{/* Header */}

            <HeaderContainer />

            <div class="content-container-padding" id='squiggle-divide-breakdown'>
                <h2 class="section-title-fom slide-in-left-placeholder">
                    Gmail Clone <span class="h2-highlight-gmail">Showcase</span>
                </h2>
                { windowWidth > 1492 ? (
                    <div id ='code-container-gmail'>
                        <img src={smallGmailCode} alt="small-gmail-code" id="small-gmail-code"/>
                    </div>
                ) : (
                    <div id ='code-container-gmail'>
                        <img src={smallerGmailCode} alt="small-gmail-code" id="smaller-gmail-code"/>
                    </div>
                )}
                
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-desc-container white-background'>
                    <p id='highlight-desc-p'>As well as the panels below that feature impressive functionalities of this project, there is also a lot more intelligent code under the hood that I invite you to look at.</p>
                        <div className='highlight-svg-container'>
                            <svg 
                                className='hightlight-desc-svg' 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                                onClick={handleGHSVGClick}
                                title='Gmail Project Src Code'
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            <svg
                                onClick={handleGMailLiveSiteClick}
                                className='hightlight-desc-svg'
                                title='Gmail Clone live site'
                                viewBox="0 0 64 64" 
                                xmlns="http://www.w3.org/2000/svg" 
                                stroke-width="3" 
                                stroke="#000000" 
                                fill="none">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
                                    <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
                                    <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
                                    <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
                                    <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
                                    <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
                                    <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
                                    <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
                                    <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
                                </g>
                            </svg>
                        </div>
                </div>
            </div>

            {windowWidth > 1034 ? (
                <>
                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 class='orange'>Translation Feature</h3>
                                <p class='p-showcase'>
                                    This feature allows the user to translate the whole of the text in the app to a multitude of languages - this is done by having a text object that has nested values for each language. 
                                </p>
                                <p class='p-showcase'>
                                    When a language is chose this then updates the user in app.js by altering userData.language which then dynamically renders the translated text. This is an improvement on running the text through a translation API as it translated instantly improving UX and saves money.
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
                                <h3 className='orange'>Twilio API SMS Authorisation</h3>
                                <p class='p-showcase'>
                                    This authorisation method uses Twilio and a custom API end point in my Express.js server - which receives a formatted phone number. It then creates a random 6-digit verification code which is sent to the user via SMS to either confirm they are not a robot and continue the form or log in if they have forgotten their password.
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
                                <h3 className='orange'>Send Grid API Email Authorisation</h3>
                                <p class='p-showcase'>
                                    This authorisation method uses Send Grid and a custom API end point in my Express.js server - which takes in an inputted email. It then creates a random 6-digit verification code which is sent to the user via email and if they enter it correctly they can continue the form, or log in if they have forgotten their password.
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
                                <h3 className='orange'>Custom IP Grabber API Paired with IP Geolocation API</h3>
                                <p class='p-showcase'>
                                    In my server there is a custom end point that uses either the forwardedFor request header or the remoteAddress request socket to return the users IP. We then have a grabUserIPHook, which makes a request to that end point to return the users Ip.
                                </p>
                                <p class='p-showcase'>
                                    Then in App.js I used object destructuring assignment to call the hook and save the users IP as a variable to be passed to Confirm You're not a Robot.
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
                                <h3 className='orange'>Google Translation API</h3>
                                <p class='p-showcase'>
                                    Initially for the translation for the entirety of my app, I was going to use Google translation API. However, when i implemented  found that the load time for translating the whole of the app was incredibly slow and ruined ux (also increased costs). So I instead opted for the approach described above.
                                </p>
                                <p class='p-showcase'>
                                    When I was implementing the React select component for the drop down I did so initially with a country object which had a lot of logic applied to it to filter and sort countries, also when i mapped through the object to render it into the select component there was also a lot of assoicated code. So instead of transfering the object with translated countries, to the text object. I instead used the google translation API to translate the country object and then saved it translatedCountries. 
                                </p>
                                <p class='p-showcase'>
                                    This was a good learning experience and I going forward I would translate the countries manually and store to the text object to translate instantly with no API. 
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
                                    <source src='./videos/Google Translation API.mp4' type="video/mp4">
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
                                    <source src='./videos/Responsivity Showcase.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Responsivity</h3>
                                <p class='p-showcase'>
                                    The app is fully responsive, using media queries to apply optimal layouts or sophisticatedly hide aspects of the page fluidly depending on screen size.
                                </p>
                                <p class='p-showcase'>
                                    Responsivity is also used for the MUI language changer menu where the extent of the menu height is calculated depending on the height of the screen.
                                </p>
                                <p class='p-showcase'>
                                    It also uses responsive CSS formats to dynamically render elements positions and sizes in the browser. This improves UI and UX for all different screen sizes.
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Express Server</h3>
                                <p class='p-showcase'>
                                    The server is built using Express.js. I have custom API end points for each of the authorisation methods, and a custom end point to acquire the users IP.
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={videoRef6}
                                    class='show-case-video' 
                                    controls 
                                    loop
                                    muted
                                >
                                    <source src='./videos/Server Code Showcase.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-2'>
                            <video 
                                    ref={videoRef7}
                                    class='show-case-video' 
                                    controls 
                                    loop
                                    muted
                                >
                                    <source src='./videos/Security.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Security</h3>
                                <p class='p-showcase'>
                                    For security in the app, I have used client side and server side API limiters. Also I have utilised .env variables to store sensitive information.
                                </p>
                                <p class='p-showcase'>
                                    This ensures that the server cannot be overloaded with requests in a short time frame. Mitigating threats from DDoS or brute force login attempts.
                                </p>
                                <p class='p-showcase'>
                                    API limiters also make sure costs are controlled by preventing excessive use.
                                </p>
                                <p class='p-showcase'>
                                    By using .env variables it keeps sensitive information like API keys kept out of the code and hidden from the outside sources. This is crucial for security, as hard-coding such information can lead to exposure to unwanted entities. Which could result in leaked data, financial loss, disruption of service or reputational damage.
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>MUI</h3>
                                <p class='p-showcase'>
                                    For this project I leveraged Material UI. This allowed me to create professional polished elements with good efficiency.
                                </p>
                                <p class='p-showcase'>
                                    I created and added custom styles to get the appearance I wanted, instead of the default versions. I also had to pair the  MUI Modals with React Spring to get the animation onClose and onOpen that looked good.
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={muiRef}
                                    class='show-case-video' 
                                    controls 
                                    muted
                                    onEnded={cycleMuiVideo}
                                    onLoadedData={() => muiRef.current.play()}
                                >
                                    <source src={muiSources[currentMuiIndex]} type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>
                    
                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={videoRef8}
                                    class='show-case-video' 
                                    controls 
                                    loop
                                    muted
                                >
                                    <source src='./videos/Jest and RTL Showcase.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Jest & React Testing Library</h3>
                                <p class='p-showcase'>
                                    To ensure my code is robust and reliable I have used Jest and React Testing Library to test anything that handles logic i.e. all my container files utility files and hooks etc. This ensures everything is working as expected and ensures a smooth UX with no bugs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>AWS</h3>
                                <p class='p-showcase'>
                                    For this project I hosted the Express server using AWS Elastic Beanstalk. This allowed me to have a scalable server that could handle the traffic of the app.    
                                </p>
                                <p class='p-showcase'>
                                    For the front end I used AWS Simple Storage Server (s3) to host the static files and then I redirected my API requests base URL to the server domain name to allow access to send a receive data via the custom end points created there.   
                                </p>
                            </div>
                            <div class='highlight-half-2-ss'>
                                <img className='ss-half-40' src={ebSS}/>
                                <img className='ss-half-60' src={s3SS}/>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-2-ts-ss'>
                                <img className='TS-horizontal' src={TSSS}/>
                            </div>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>TypeScript</h3>
                                <p class='p-showcase'>
                                    This project was built using TypeScript to enhance code maintainability and scalability.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 class='orange'>Translation Feature</h3>
                                <p class='p-showcase'>
                                    This feature allows the user to translate the whole of the text in the app to a multitude of languages - this is done by having a text object that has nested values for each language. 
                                </p>
                                <p class='p-showcase'>
                                    When a language is chose this then updates the user in app.js by altering userData.language which then dynamically renders the translated text. This is an improvement on running the text through a translation API as it translated instantly improving UX and saves money.
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
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Twilio API SMS Authorisation</h3>
                                <p class='p-showcase'>
                                    This authorisation method uses Twilio and a custom API end point in my Express.js server - which receives a formatted phone number. It then creates a random 6-digit verification code which is sent to the user via SMS to either confirm they are not a robot and continue the form or log in if they have forgotten their password.
                                </p>
                                <p class='p-showcase'>
                                    The formatted number is created by a function that uses google-libphonenumber formatting. It is created based on user input and the region which is attained either through the users IP (Grabbed from my server), or their country selection choice. 
                                </p>
                            </div>
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
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Send Grid API Email Authorisation</h3>
                                <p class='p-showcase'>
                                    This authorisation method uses Send Grid and a custom API end point in my Express.js server - which takes in an inputted email. It then creates a random 6-digit verification code which is sent to the user via email and if they enter it correctly they can continue the form, or log in if they have forgotten their password.
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
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Custom IP Grabber API Paired with IP Geolocation API</h3>
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
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1' id='geo-highlight-half-1'>
                                <h3 className='orange'>Google Translation API</h3>
                                <p class='p-showcase'>
                                    Initially for the translation for the entirety of my app, I was going to use Google translation API. However, when i implemented  found that the load time for translating the whole of the app was incredibly slow and ruined ux (also increased costs). So I instead opted for the approach described above.
                                </p>
                                <p class='p-showcase'>
                                    When I was implementing the React select component for the drop down I did so initially with a country object which had a lot of logic applied to it to filter and sort countries, also when i mapped through the object to render it into the select component there was also a lot of assoicated code. So instead of transfering the object with translated countries, to the text object. I instead used the google translation API to translate the country object and then saved it translatedCountries. 
                                </p>
                                <p class='p-showcase'>
                                    This was a good learning experience and I going forward I would translate the countries manually and store to the text object to translate instantly with no API. 
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
                                    <source src='./videos/Google Translation API.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Responsivity</h3>
                                <p class='p-showcase'>
                                    The app is fully responsive, using media queries to apply optimal layouts or sophisticatedly hide aspects of the page fluidly depending on screen size.
                                </p>
                                <p class='p-showcase'>
                                    Responsivity is also used for the MUI language changer menu where the extent of the menu height is calculated depending on the height of the screen.
                                </p>
                                <p class='p-showcase'>
                                    It also uses responsive CSS formats to dynamically render elements positions and sizes in the browser. This improves UI and UX for all different screen sizes.
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={videoRef5}
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
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Express Server</h3>
                                <p class='p-showcase'>
                                    The server is built using Express.js. I have custom API end points for each of the authorisation methods, and a custom end point to acquire the users IP.
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={videoRef6}
                                    class='show-case-video' 
                                    controls 
                                    loop
                                    muted
                                >
                                    <source src='./videos/Server Code Showcase.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Security</h3>
                                <p class='p-showcase'>
                                    For security in the app, I have used client side and server side API limiters. Also I have utilised .env variables to store sensitive information.
                                </p>
                                <p class='p-showcase'>
                                    This ensures that the server cannot be overloaded with requests in a short time frame. Mitigating threats from DDoS or brute force login attempts.
                                </p>
                                <p class='p-showcase'>
                                    API limiters also make sure costs are controlled by preventing excessive use.
                                </p>
                                <p class='p-showcase'>
                                    By using .env variables it keeps sensitive information like API keys kept out of the code and hidden from the outside sources. This is crucial for security, as hard-coding such information can lead to exposure to unwanted entities. Which could result in leaked data, financial loss, disruption of service or reputational damage.
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
                                    <source src='./videos/Security.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>MUI</h3>
                                <p class='p-showcase'>
                                    For this project I leveraged Material UI. This allowed me to create professional polished elements with good efficiency.
                                </p>
                                <p class='p-showcase'>
                                    I created and added custom styles to get the appearance I wanted, instead of the default versions. I also had to pair the  MUI Modals with React Spring to get the animation onClose and onOpen that looked good.
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={muiRef}
                                    class='show-case-video' 
                                    controls 
                                    muted
                                    onEnded={cycleMuiVideo}
                                    onLoadedData={() => muiRef.current.play()}
                                >
                                    <source src={muiSources[currentMuiIndex]} type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>
                    
                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Jest & React Testing Library</h3>
                                <p class='p-showcase'>
                                    To ensure my code is robust and reliable I have used Jest and React Testing Library to test anything that handles logic i.e. all my container files utility files and hooks etc. This ensures everything is working as expected and ensures a smooth UX with no bugs.
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={videoRef8}
                                    class='show-case-video' 
                                    controls 
                                    loop
                                    muted
                                >
                                    <source src='./videos/Jest and RTL Showcase.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Express Server</h3>
                                <p class='p-showcase'>
                                    The server is built using Express.js. I have custom API end points for each of the authorisation methods, and a custom end point to acquire the users IP.
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <video 
                                    ref={videoRef6}
                                    class='show-case-video' 
                                    controls 
                                    loop
                                    muted
                                >
                                    <source src='./videos/Server Code Showcase.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>AWS</h3>
                                <p class='p-showcase'>
                                    For this project I hosted the Express server using AWS Elastic Beanstalk. This allowed me to have a scalable server that could handle the traffic of the app.
                                </p>
                                <p class='p-showcase'>
                                    For the front end I used AWS Simple Storage Server (s3) to host the static files and then I redirected my API requests base URL to the server domain name to allow access to send a receive data via the custom end points created there.   
                                </p>
                            </div>
                            <div class='highlight-half-2-ss'>
                                <img className='ss-half-40' src={ebSS}/>
                                <img className='ss-half-60' src={s3SS}/>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>TypeScript</h3>
                                <p class='p-showcase'>
                                    This project was built using TypeScript to enhance code maintainability and scalability.
                                </p>
                            </div>
                            <div class='highlight-half-2-ss-ts'>
                                <img className='ts-vertical' src={TSSS}/>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}
