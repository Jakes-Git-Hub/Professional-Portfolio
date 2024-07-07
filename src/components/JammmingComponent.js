
import React from 'react';
import { HeaderContainer } from '../containers/HeaderContainer';
import largeJammmingCode from '../images/jammming-showcase/Jammming Code Large.png';
import smallJammmingCode from '../images/jammming-showcase/Jammming Code Small.png'; 
import surgeProof from '../images/jammming-showcase/surge-site-jammming.png';


export const JammmingComponent = ({
    handleGHSVGClick,
    videoRef,
    videoRef1,
    windowWidth,
    handleLiveSiteClick,
}) => {

    return (

        <>

            <HeaderContainer/>

            <div class="content-container-padding" id='squiggle-divide-breakdown'>
                <h2 class="section-title-fom slide-in-left-placeholder">
                    <span class="h2-highlight-gmail">Jammming</span> 
                </h2>
                { windowWidth > 1492 ? (
                    <div id ='gmail-code-container'>
                        <img src={largeJammmingCode} alt="small-jammming-code" id="small-gmail-code"/>
                    </div>
                ) : (
                    <div id ='gmail-code-container'>
                        <img src={smallJammmingCode} alt="small-jammming-code" id="smaller-jammming-code"/>
                    </div>
                )}
                
            </div>

            <div class='content-container-padding black-background-highlights'>
                <div class='highlight-desc-container white-background'>
                    <p id='highlight-desc-p'>I enjoyed using the Spotify API and React Player to build this project - It is an app that allows users to search, preview, add/ remove tracks to/ from a playlist and then finally save their playlist with a custom playlist name to Spotify. Mostly done through the spotify API.</p>
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
                            <svg 
                                className='hightlight-desc-svg'
                                onClick={handleLiveSiteClick}
                                title='Jammming live site'
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
                                <h3 class='orange'>Spotify API</h3>
                                <p class='p-showcase'>
                                    The users search input triggers the search method, which populates the results tracklist with tracks and associated info derived from the returned JSON results.  
                                </p>
                                <p class='p-showcase'>
                                    The user can then add or remove tracks to their playlist from the tracklist results with the +/ - buttons. Once the user has curated their playlist and given it the name they desire, then they can save their playlist to spotify with the savePlaylist method and have it to listen anytime.     
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
                                    <source src='./videos/jammming/spotify-api-obj-jammming-code.mp4' type="video/mp4">
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
                                    <source src='./videos/jammming/react-player-preiview-track-code-jammming.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>React Player</h3>
                                <p class='p-showcase'>
                                    The project utilises React Player. I built out state and a conditional ternary to see if the state of the track is playing and if the tracks preview_url exists then the React Player component will be rendered, playing the tracks preview.   
                                </p>
                                <p class='p-showcase'>
                                    If the track preview isn't available then the nested ternary where the condition of the track is playing, but there is no preview_url will become true and the 'Preview-unavailable' text will show on the preview button where the 'Preview' text was. This improves UX and signage.   
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Deployed to Surge</h3>
                                <p class='p-showcase'>
                                    I have deployed Jammming to Surge. This involved running npm run build in the terminal so all code was compiled into optimised files and ready for deployment.
                                </p>
                                <p class='p-showcase'>
                                    Then I executed surge commands in the terminal to choose a domain name and get the app accessible to everyone via the web. 
                                </p>
                            </div>
                            <div class='highlight-half-2-surge'>
                                <img 
                                    class='show-case-img-surge' 
                                    src={surgeProof}
                                />
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-2'>
                                <img 
                                    class='show-case-img-legacy' 
                                    src={smallJammmingCode}
                                />
                            </div>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Legacy React Code</h3>
                                <p class='p-showcase'>
                                    Whilst learning React from Codecademy, one of the modules was teaching legacy React.
                                </p>
                                <p class='p-showcase'>
                                    I built this project after completing that module and put what I had learnt into practice.
                                </p>
                                <p class='p-showcase'>
                                    Knowing the latest React architecture alongside legacy React gives me several benefits: being able to work on older existing projects, being able to transition existing older code bases to modern hooks-based architecture, having a broader knowledge of the library, understanding the evolution of React's design philosophy and how hooks and functional components create better solutions and being more flexible in problem solving - by being versatile in both makes me more adaptable and able to contribute more effectively in a variety of development environments. 
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
                                <h3 class='orange'>Spotify API</h3>
                                <p class='p-showcase'>
                                    The users search term input triggers the search method from the Spotify object, which populates the results tracklist with tracks and associated info derived from the returned JSON results.  
                                </p>
                                <p class='p-showcase'>
                                The user can then add or remove tracks to their playlist from the tracklist results with the +/ - buttons. Once the user has curated their playlist and given it the name they desire, then they can save their playlist to spotify have it to listen anytime.     
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
                                    <source src='./videos/jammming/spotify-api-obj-jammming-code.mp4' type="video/mp4">
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
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
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Deployed to Surge</h3>
                                <p class='p-showcase'>
                                    I have deployed Jammming to Surge. This involved running npm run build in the terminal so all code was compiled into optimised files and ready for deployment.
                                </p>
                                <p class='p-showcase'>
                                    Then I executed surge commands in the terminal to choose a domain name and get the app accessible to everyone via the web. 
                                </p>
                            </div>
                            <div class='highlight-half-2-surge'>
                                <img 
                                    class='show-case-img-surge' 
                                    src={surgeProof}
                                />
                            </div>
                        </div>
                    </div>

                    <div class='content-container-padding black-background-highlights'>
                        <div class='highlight-container white-background'>
                            <div class='highlight-half-1'>
                                <h3 className='orange'>Legacy React Code</h3>
                                <p class='p-showcase'>
                                    Whilst learning React from Codecademy, one of the modules was teaching legacy React.
                                </p>
                                <p class='p-showcase'>
                                    I built this project after completing that module and put what I had learnt into practice.
                                </p>
                                <p class='p-showcase'>
                                    Knowing the latest React architecture alongside legacy React gives me several benefits: being able to work on older existing projects, being able to transition existing older code bases to modern hooks-based architecture, having a broader knowledge of the library, understanding the evolution of React's design philosophy and how hooks and functional components create better solutions and being more flexible in problem solving - by being versatile in both makes me more adaptable and able to contribute more effectively in a variety of development environments. 
                                </p>
                            </div>
                            <div class='highlight-half-2'>
                                <img 
                                    class='show-case-img-legacy' 
                                    src={smallJammmingCode}
                                />
                            </div>
                        </div>
                    </div>

                </>
            )}

        </>
    );
}
