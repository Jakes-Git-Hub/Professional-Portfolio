import React, { useEffect, useState } from "react";
import { FrontPageComponent } from "../components/FrontPageComponent";
import 'intersection-observer';
import { useSpring } from 'react-spring';

export const FrontPageContainer = () => {

    const [show, setShow] = useState(false);
    const [hoveredGmail, setHoveredGmail] = useState(false);

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
                    setShow(true);
                    entry.target.classList.add('show-skills');
                } 
            });
        }, { threshold: 1 });

        // Observe the container
        observer.observe(container);
    }, []);

    const zoomOut = useSpring({
        from: { scale: 0.4 },
        to: { scale: show ? 1 : 0.4 },
        config: {
            duration: 1000,
            tension: 170,
            friction: 20,
        },
    });

// Projects

// Projects Container Zoom Animation

useEffect(() => {
    const container = document.querySelector('#projects-container');

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {  
            // If the element is visible
            if (entry.isIntersecting) {
                setShow(true);
                entry.target.classList.add('show-projects');
            } 
        });
    }, { threshold: 1 });

    // Observe the container
    observer.observe(container);
}, []);
    
// Gmail Hover 

    const handleGmailMouseEnter = () => {
        setHoveredGmail(true);
    };

    return (
        <>
            <FrontPageComponent 
                zoomOut={zoomOut}
                hoveredGmail={hoveredGmail}
                handleGmailMouseEnter={handleGmailMouseEnter}
            />
        </>
    );
}