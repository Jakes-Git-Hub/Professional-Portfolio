
import React from 'react';
import { HeaderContainer } from '../containers/HeaderContainer';
import largeAdoptAPet from '../images/adopt-a-pet-showcase/Adopt a Pet Large ss.png';
import smallAdoptAPet from '../images/adopt-a-pet-showcase/Adopt a Pet Large ss.png'; 
import MSWProof from '../images/adopt-a-pet-showcase/MSW Proof.png';

export const AdoptAPetComponent = ({
    handleGHSVGClick,
    windowWidth,
}) => {

    return (

        <>

            <HeaderContainer/>

            <div class="content-container-padding" id='squiggle-divide-breakdown'>
                <h2 class="section-title-fom slide-in-left-placeholder">
                    <span class="h2-highlight-gmail">Adopt a Pet</span> 
                </h2>
                { windowWidth > 1492 ? (
                    <div id ='gmail-code-container'>
                        <img src={largeAdoptAPet} alt="small-jammming-code" id="small-gmail-code"/>
                    </div>
                ) : (
                    <div id ='gmail-code-container'>
                        <img src={smallAdoptAPet} alt="small-jammming-code" id="smaller-adopt-code"/>
                    </div>
                )}
                
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-desc-container white-background'>
                    <p id='highlight-desc-p'>In this project I utiised a mock service worker with handlers to mock api requests to a server/ database. This allows the user to search through the animals object and then the results are mapped to the ui based on their input.</p>
                        <div className='highlight-svg-container'>
                            <svg 
                                className='hightlight-desc-svg' 
                                onClick={handleGHSVGClick}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                                title='Jammming Project Src Code'
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </div>
                </div>
            </div>

            {windowWidth > 1034 ? (
                <>
                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 class='orange'>Mapping UI From Animals Object</h3>
                                <p class='p-showcase'>
                                    Animal panels are displayed through mapping from a JSON object. The user can then narrow down the results based off of their search input, as this will trigger an api request that the mock service worker will intercept and mock a get request from the animals object, type object and details object.
                                </p>
                            </div>
                            <div class='highlight-half-2-pet'>
                                <img 
                                    class='msw-proof' 
                                    src={MSWProof}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 class='orange'>Mapping UI From Animals Object</h3>
                                <p class='p-showcase'>
                                    Animal panels are displayed through mapping from a JSON object. The user can then narrow down the results based off of their search input, as this will trigger an api request that the mock service worker will intercept and mock a get request from the animals object, type object and details object.
                                </p>
                            </div>
                            <div class='highlight-half-2-pet'>
                                <img 
                                    class='msw-proof' 
                                    src={MSWProof}
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>React Player</h3>
                                <p class='p-showcase'>
                                    The project utilises React Player. I built out state and a conditional ternary to see if the state of the track is playing and if the tracks preview_url exists then the React Player component will be rendered, playing the tracks preview.   
                                </p>
                                <p class='p-showcase'>
                                     
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
                                    <source src='./videos/jammming/react-player-preiview-track-code-jammming.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div> */}
                </>
            )}

        </>
    );
}
