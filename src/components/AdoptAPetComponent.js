
import React from 'react';
import { HeaderContainer } from '../containers/HeaderContainer';
import largeAdoptAPet from '../images/adopt-a-pet-showcase/Adopt a Pet Large ss.png';
import smallAdoptAPet from '../images/adopt-a-pet-showcase/Adopt a Pet Small ss.png'; 
import MSWProof from '../images/adopt-a-pet-showcase/MSW Proof.png';
import TSSS from '../images/TypeScript-ss.png';


export const AdoptAPetComponent = ({
    handleGHSVGClick,
    windowWidth,
    handleLiveSiteClick,
}) => {

    return (

        <>

            <HeaderContainer/>

            <div class="content-container-padding" id='squiggle-divide-breakdown'>
                <h2 class="section-title-fom slide-in-left-placeholder">
                    <span class="h2-highlight-gmail">Adopt a Pet</span> 
                </h2>
                { windowWidth > 1492 ? (
                    <div id ='code-container-adopt-a-pet'>
                        <img src={largeAdoptAPet} alt="small-adopt-a-pet-code" id="small-gmail-code"/>
                    </div>
                ) : (
                    <div id ='code-container-adopt-a-pet'>
                        <img src={smallAdoptAPet} alt="small-adopt-a-pet-code" id="smaller-code"/>
                    </div>
                )}
                
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-desc-container white-background'>
                    <p id='highlight-desc-p'>In this project I utilised a mock service worker with handlers to mock API requests to a server/ database. This allows the user to search through the animals object and then the results are mapped to the ui based on their input.</p>
                        <div className='highlight-svg-container'>
                            <svg 
                                className='hightlight-desc-svg' 
                                onClick={handleGHSVGClick}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                                title='Adopt a Pet Project Src Code'
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            <svg 
                                className='hightlight-desc-svg'
                                onClick={handleLiveSiteClick}
                                title='Adopt a Pet live site'
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
                                <h3 class='orange'>Mapping UI From Animals Object</h3>
                                <p class='p-showcase'>
                                    Animal panels and associated data are displayed from utilisation of an API request and using a mock service worker. This worker will intercept get requests and mock a get API call to get associated data based on the users input query parameter and display results through mapping the relevant objects grabbed from the arrays.
                                </p>
                                <p class='p-showcase'>
                                    This worker will intercept get requests and mock a get API call to get associated data based on the users input query parameters and display results through mapping the relevant objects grabbed from the arrays.
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
                                <h3 class='orange'>Mapping UI From Animals Object</h3>
                                <p class='p-showcase'>
                                    Animal panels and associated data are displayed from utilisation of an API request and using a mock service worker. This worker will intercept get requests and mock a get API call to get associated data based on the users input query parameter and display results through mapping the relevant objects grabbed from the arrays.
                                </p>
                                <p class='p-showcase'>
                                    This worker will intercept get requests and mock a get API call to get associated data based on the users input query parameters and display results through mapping the relevant objects grabbed from the arrays.
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
