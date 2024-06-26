import React, { useEffect, useState } from "react";
import { FrontPageComponent } from "../components/FrontPageComponent";
import 'intersection-observer';
import { useSpring } from 'react-spring';
import { useNavigate } from "react-router-dom";

export const FrontPageContainer = () => {

    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [unBlurGmail, setUnBlurGmail] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [skillsContainerHasZoomed, setSkillsContainerHasZoomed] = useState(false);
    const [projectsContainerHasZoomed, setProjectsContainerHasZoomed] = useState(false);

    const navigate = useNavigate();

// Page Hero SVG's

    const handleGitHubClick = () => {
        window.open('https://github.com/Jakes-Git-Hub?tab=repositories', '_blank');
    }

// Animations

// Skills Tittle Slide In Animation

    useEffect(() => {
        const divs = document.querySelectorAll('.slide-in-left-placeholder');

        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {  
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('slide-in-left');
                } 
            });
        });

        // Observe each div
        divs.forEach(div => observer.observe(div));

        return () => {
            divs.forEach(div => observer.unobserve(div));
        };
    }, []);

// Skills Container Zoom Animation

    useEffect(() => {
        const container = document.querySelector('.skills-container, .small-skills-container');

        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {  
                // If the element is visible
                if (entry.isIntersecting) {
                    setShowSkills(true);
                    setSkillsContainerHasZoomed(true);
                    entry.target.classList.add('show');
                } 
            });
        }, { threshold: 0.75 });

        // Observe the container
        observer.observe(container);

        return () => observer.unobserve(container);
    }, []);

    const zoomOutSkills = useSpring({
        from: { scale: 0.4 },
        to: { scale: showSkills ? 1 : 0.4 },
        config: {
            duration: 1000,
            tension: 170,
            friction: 20,
        },
    });

// Projects

// Projects Tittle Slide In Animation

    useEffect(() => {
        const divs = document.querySelectorAll('.projects-h2-container');

        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {  
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('slide-in-right');
                } 
            });
        }, { threshold: 1 });

        // Observe each div
        divs.forEach(div => observer.observe(div));

        return () => {
            divs.forEach(div => observer.unobserve(div));
        };
    }, []);

// Projects Container Zoom Animation

    useEffect(() => {
        const container = document.querySelector('.projects-container, .small-projects-container');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {  
                if (entry.isIntersecting) {
                    setShowProjects(true);
                    setProjectsContainerHasZoomed(true);
                    entry.target.classList.add('show');
                    setTimeout(() => {
                        setUnBlurGmail(true);
                    }, 1000);
                } 
            });
        }, { threshold: 0.35 });

        observer.observe(container);

        return () => observer.unobserve(container);
    }, []);

    const zoomOutProjects = useSpring({
        from: { scale: 0.4 },
        to: { scale: showProjects ? 1 : 0.4 },
        config: {
            duration: 1000,
            tension: 170,
            friction: 20,
        },
    });

// Find out more Logic

    const handleGMailFindOutMoreClick = () => {
        window.scrollTo(0, 0);
        navigate('/gmail-more');
    }

    const handleJammmingPanelClick = () => {
        window.scrollTo(0, 0);
        navigate('/Jammming');
    }

// H3 Animation 

    useEffect(() => {
        const h3Showcase = document.querySelectorAll('.orange-projects');

        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {  
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                    }, 750);
                } 
            });
        }, { threshold: 1 });

        // Observe each h3
        h3Showcase.forEach(h3 => observer.observe(h3));

        return () => {
            h3Showcase.forEach(h3 => observer.unobserve(h3));
        }
    }, []);

    useEffect(() => {
        const h3Showcase = document.querySelectorAll('.orange');

        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {  
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('fade-in');
                } 
            });
        }, { threshold: 1 });

        // Observe each h3
        h3Showcase.forEach(h3 => observer.observe(h3));

        return () => {
            h3Showcase.forEach(h3 => observer.unobserve(h3));
        }
    }, []);

// New Layout For Smaller Screens

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <FrontPageComponent 
                handleGitHubClick={handleGitHubClick}
                zoomOutSkills={zoomOutSkills}
                zoomOutProjects={zoomOutProjects}
                unBlurGmail={unBlurGmail}
                handleGMailFindOutMoreClick={handleGMailFindOutMoreClick}
                windowWidth={windowWidth}
                handleJammmingPanelClick={handleJammmingPanelClick}
                skillsContainerHasZoomed={skillsContainerHasZoomed}
                projectsContainerHasZoomed={projectsContainerHasZoomed}
            />
        </>
    );
}