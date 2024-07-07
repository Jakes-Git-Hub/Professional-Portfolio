import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { JammmingComponent } from "../components/JammmingComponent";

export const JammmingContainer = () => {

    const [currentMuiIndex, setCurrentMuiIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const navigate = useNavigate();

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
        window.open('https://github.com/Jakes-Git-Hub/Spotify-API-Project-React', '_blank');
    }

// Live site Click

    const handleLiveSiteClick = () => {
        window.open('https://1122jammming-12323.surge.sh', '_blank');
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

// Video Intersection Observer

const videoRef = useRef(null);
const videoRef1 = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        },
        {
            threshold: windowWidth > 1034 ? 0.5 : 0.25,
        }
    );

    observer.observe(videoRef.current);
    observer.observe(videoRef1.current);

}, []);

    return (
        <>
            <JammmingComponent 
                handleGHSVGClick={handleGHSVGClick}
                handleLiveSiteClick={handleLiveSiteClick}
                videoRef={videoRef}
                videoRef1={videoRef1}
                windowWidth={windowWidth}
            />
        </>
    );
}