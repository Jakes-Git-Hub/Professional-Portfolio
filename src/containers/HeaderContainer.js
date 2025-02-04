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
        navigate('/');
    
        setTimeout(() => {
            const skillsSection = document.getElementById('skills-nav');
            if (skillsSection) {
                skillsSection.scrollIntoView();
                    window.scrollBy(0, -83);
            }
        }, 0)
    }

    const handleProjectsClick = () => {
        navigate('/');
    
        setTimeout(() => {
            const projectsSection = document.getElementById('projects-nav');
            if (projectsSection) {
                projectsSection.scrollIntoView();
                if (windowWidth <= 1298) {
                    window.scrollBy(0, -10);
                } else {
                    window.scrollBy(0, -45);
                }
            }
        }, 0);
    }

    const handleFuturePlansClick = () => {
        navigate('/');

        setTimeout(() => {
            const futurePlansSection = document.getElementById('future-plans-nav');
            if (futurePlansSection) {
                futurePlansSection.scrollIntoView();
                window.scrollBy(0, -80);
            }
        }, 0);
    }

    const handleContactClick = () => {
        navigate('/');

        setTimeout(() => {
            const futurePlansSection = document.getElementById('contact-me-nav');
            if (futurePlansSection) {
                futurePlansSection.scrollIntoView();
                window.scrollBy(0, -80);
            }
        }, 0);
    }

    return (
        <HeaderComponent 
            handleSkillsClick={handleSkillsClick}
            handleProjectsClick={handleProjectsClick}
            handleFuturePlansClick={handleFuturePlansClick}
            handleContactClick={handleContactClick}
        />
    )
}