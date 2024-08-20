import React from "react";

export const HeaderComponent = ({
    handleSkillsClick,
    handleProjectsClick,
    handleFuturePlansClick,
    handleContactClick
}) => {
    return (
        <div class="header">
                <header>
                    <p id='name'>Jake Matthews</p>
                    <ul>
                        <li class="underline" onClick={handleSkillsClick}>Skills</li>
                        <li class="underline" onClick={handleProjectsClick}>Projects</li>
                        <li class="underline" onClick={handleFuturePlansClick}>Future Plans</li>
                        <li class="underline" onClick={handleContactClick}>Contact</li>
                    </ul>
                </header>
            </div>
    )
}