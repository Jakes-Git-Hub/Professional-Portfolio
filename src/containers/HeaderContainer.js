import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";

export const HeaderContainer = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

// Calc Screen Width

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

// Hanlde Header Option Click

    const handleSkillsClick = () => {
        navigate('/'); // Navigate to the home page.
    
        // Wait for the navigation to complete and the page to render.
        setTimeout(() => {
            // Check if the element exists.
            const skillsSection = document.getElementById('skills-nav');
            if (skillsSection) {
                // Scroll to the skills section.
                skillsSection.scrollIntoView();
                    window.scrollBy(0, -83);
            }
        }, 0)
    }

    const handleProjectsClick = () => {
        navigate('/'); // Navigate to the home page.
        console.log('projects Clicked');
    
        // Wait for the navigation to complete and the page to render.
        setTimeout(() => {
            // Check if the element exists.
            const skillsSection = document.getElementById('projects-h2-container');
            if (skillsSection) {
                // Scroll to the skills section.
                skillsSection.scrollIntoView();
                if (windowWidth <= 1212) {
                    window.scrollBy(0, -10);
                } else {
                    window.scrollBy(0, -45);
                }
            }
        }, 0); // A timeout of 0 ensures this runs after navigation has completed.
    }

    // const handleFuturePlansClick = () => {
    //     navigate('/');
    // }

    // const handleContactClick = () => {
    //     navigate('/');
    // }

    return (
        <HeaderComponent 
            handleSkillsClick={handleSkillsClick}
            handleProjectsClick={handleProjectsClick}
            // handleFuturePlansClick={handleFuturePlansClick}
            // handleContactClick={handleContactClick}
        />
    )
}