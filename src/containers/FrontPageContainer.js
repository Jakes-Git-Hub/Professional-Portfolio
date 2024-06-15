import React, { useEffect, useState } from "react";
import { FrontPageComponent } from "../components/FrontPageComponent";
import 'intersection-observer';
import { useSpring } from 'react-spring';
import { useNavigate } from "react-router-dom";

export const FrontPageContainer = () => {

    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [unBlurGmail, setUnBlurGmail] = useState(false);
    const [isMouseOverProjectCase, setIsMouseOverProjectCase] = useState(false);

    const navigate = useNavigate();

// Page Hero SVG's

    const handleGitHubClick = () => {
        window.open('https://github.com/Jakes-Git-Hub?tab=repositories', '_blank');
    }

// Animations

// Skills Tittle Slide In Animation

    useEffect(() => {
        const divs = document.querySelectorAll('.skills-placeholder');

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
    }, []);

// Skills Container Zoom Animation

    useEffect(() => {
        const container = document.querySelector('#skills-container');

        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {  
                // If the element is visible
                if (entry.isIntersecting) {
                    setShowSkills(true);
                    entry.target.classList.add('show-skills');
                } 
            });
        }, { threshold: 1 });

        // Observe the container
        observer.observe(container);
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
        const divs = document.querySelectorAll('.projects-placeholder');

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
    }, []);

// Projects Container Zoom Animation

    useEffect(() => {
        const container = document.querySelector('#projects-container');

        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {  
                // If the element is visible
                if (entry.isIntersecting) {
                    setShowProjects(true);
                    entry.target.classList.add('show-projects');
                    setTimeout(() => {
                        setUnBlurGmail(true);
                    }, 1000);
                } 
            });
        }, { threshold: 1 });

        // Observe the container
        observer.observe(container);
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

    const handleGMailFindOutMoreClick = () => {
        window.scrollTo(0, 0);
        navigate('/gmail-more');
    }

// H3 Animation 

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

        // Observe each div
        h3Showcase.forEach(div => observer.observe(div));
    }, []);

    return (
        <>
            <FrontPageComponent 
                handleGitHubClick={handleGitHubClick}
                zoomOutSkills={zoomOutSkills}
                zoomOutProjects={zoomOutProjects}
                unBlurGmail={unBlurGmail}
                handleGMailFindOutMoreClick={handleGMailFindOutMoreClick}
            />
        </>
    );
}