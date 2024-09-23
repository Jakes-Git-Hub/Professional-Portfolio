import React, { useState, useEffect} from "react";
import { AdoptAPetComponent } from "../components/AdoptAPetComponent";

export const AdoptAPetContainer = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// New Layout For Smaller Screens

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

// h2 Animation 

useEffect(() => {
    const h2Highlight = document.querySelectorAll('.slide-in-left-placeholder');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-left');
            } 
        });
    }, { threshold: 1 });

    h2Highlight.forEach(h2 => observer.observe(h2));
}, [windowWidth]);

// GitHub Click

    const handleGHSVGClick = () => {
        window.open('https://github.com/Jakes-Git-Hub/Adopt-A-Pet-React', '_blank');
    }

// Live site Click

const handleLiveSiteClick = () => {
    window.open('https://adopt-a-pet112.surge.sh/', '_blank');
}

// h3 Intersection Observer

useEffect(() => {
    const h3Showcase = document.querySelectorAll('.orange');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } 
        });
    }, { threshold: 1 });

    h3Showcase.forEach(h3 => observer.observe(h3));
}, [windowWidth]);

    return (
        <>
            <AdoptAPetComponent 
                handleGHSVGClick={handleGHSVGClick}
                handleLiveSiteClick={handleLiveSiteClick}
                windowWidth={windowWidth}
            />
        </>
    );
}