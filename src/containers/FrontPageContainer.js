import React, { useEffect, useState } from "react";
import { FrontPageComponent } from "../components/FrontPageComponent";
import 'intersection-observer';
import { useSpring } from 'react-spring';

export const FrontPageContainer = () => {

    const [show, setShow] = useState(false);

// Skills Slide Animation

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

    const animation = useSpring({
        from: { scale: 0.4 },
        to: { scale: show ? 1 : 0.4 },
        config: scale => ({
            duration: 1250,
            tension: scale < 0.8 ? 300 : 170,
            friction: scale < 0.8 ? 40 : 20,
        }),
    });
    
    const scale = animation.scale.to(s => s < 0.8 ? s : 0.8 + (s - 0.8) * 0.2 / 0.2);
    
    return (
        <>
            <FrontPageComponent 
                animation={animation}
                scale={scale}
            />
        </>
    );
}