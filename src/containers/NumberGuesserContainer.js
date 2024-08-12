import React, { useState, useEffect} from "react";
import { NumberGuesserComponent } from "../components/NumberGuesserComponent";

export const NumberGuesserContainer = () => {

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
        window.open('https://github.com/Jakes-Git-Hub/Number-Guesser', '_blank');
    }

// Live Site Click

    const handleLiveSiteClick = () => {
        window.open('http://number-guesser.s3-website.eu-west-2.amazonaws.com/', '_blank');
    }

// h3 Intersection Observer

useEffect(() => {
    const h3Showcase = document.querySelectorAll('.orange-reg');

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
            <NumberGuesserComponent 
                handleGHSVGClick={handleGHSVGClick}
                handleLiveSiteClick={handleLiveSiteClick}
                windowWidth={windowWidth}
            />
        </>
    );
}