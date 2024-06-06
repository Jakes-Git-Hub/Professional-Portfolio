
import React from 'react';
import gmailCode from '../images/gmail-code.png';

export const GMailMoreComponent = ({

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

            <div class="content-container-projects" id='squiggle-divide-breakdown'>
                
                <h2 class="section-title">
                    Gmail Clone <span class="h2-highlight">Highlights</span>
                </h2>

                <img src={gmailCode} alt="gmail-code" id="gmail-code"/>
                
            </div>

            <div id='black-background-highlights'>
                <div class="content-container-projects">
                    
                </div>
            </div>

        </>
    );
}
