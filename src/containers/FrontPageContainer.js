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
        }, { threshold: windowWidth <= 1298 ? 0.25 : 1});

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
        });

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
        }, { threshold: windowWidth <= 1298 ? 0.25 : 0.5 });

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

// Gmail Buttons Logic

    const handleGMailFindOutMoreClick = () => {
        window.scrollTo(0, 0);
        navigate('/gmail-more');
    }

    const handleGMailLiveSiteClick = () => {
        window.open('http://gmail-clone-trimmed.s3-website.eu-west-2.amazonaws.com/', '_blank');
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

// Projects Pannels Clicks

    const handleJammmingPanelClick = () => {
        window.scrollTo(0, 0);
        navigate('/Jammming');
    }

    const handleAdoptAPetPanelClick = () => {
        window.scrollTo(0, 0);
        navigate('/adopt-a-pet');
    }

    const handleTechNewsPanelClick = () => {
        window.scrollTo(0, 0);
        navigate('/tech-news');
    }

    const appointmentPlannerPanelClick = () => {
        window.scrollTo(0, 0);
        navigate('/appointment-planner');
    }

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
                handleGMailLiveSiteClick={handleGMailLiveSiteClick}
                windowWidth={windowWidth}
                handleJammmingPanelClick={handleJammmingPanelClick}
                handleAdoptAPetPanelClick={handleAdoptAPetPanelClick}
                handleTechNewsPanelClick={handleTechNewsPanelClick}
                appointmentPlannerPanelClick={appointmentPlannerPanelClick}
                skillsContainerHasZoomed={skillsContainerHasZoomed}
                projectsContainerHasZoomed={projectsContainerHasZoomed}
            />
        </>
    );
}