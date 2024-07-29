import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GMailMoreComponent } from "../components/GMailMoreComponent";

export const GMailMoreContainer = () => {

    const [currentMuiIndex, setCurrentMuiIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const navigate = useNavigate();

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

    // Observe each h3
    h2Highlight.forEach(h2 => observer.observe(h2));
}, [windowWidth]);

// GitHub Click

    const handleGHSVGClick = () => {
        window.open('https://github.com/Jakes-Git-Hub/Gmail-Log-In-And-Create-Account-React', '_blank');
    }

// h3 Intersection Observer

useEffect(() => {
    const h3Showcase = document.querySelectorAll('.orange');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, 150);
            } 
        });
    }, { threshold: 1 });

    h3Showcase.forEach(h3 => observer.observe(h3));
}, [windowWidth]);

// Video Intersection Observer

const videoRef = useRef(null);
const videoRef1 = useRef(null);
const videoRef2 = useRef(null);
const videoRef3 = useRef(null);
const videoRef4 = useRef(null);
const videoRef5 = useRef(null);
const videoRef6 = useRef(null);
const videoRef7 = useRef(null);
const videoRef8 = useRef(null);
const muiRef = useRef(null);

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
            threshold: windowWidth > 1034 ? 0.9 : 0.25,
        }
    );

    observer.observe(videoRef.current);
    observer.observe(videoRef1.current);
    observer.observe(videoRef2.current);
    observer.observe(videoRef3.current);
    observer.observe(videoRef4.current);
    observer.observe(videoRef5.current);
    observer.observe(videoRef6.current);
    observer.observe(videoRef7.current);
    observer.observe(videoRef8.current);
    observer.observe(muiRef.current);

}, []);

// MUI Videos

    const muiSources = [
        './videos/mui/MUI Modal.mp4',
        './videos/mui/MUI Menu Select Window.mp4',
        './videos/mui/MUI Custom Buttons 1.mp4',
        './videos/mui/MUI Custom Buttons 2.mp4',
    ];

// Function to play the next video

    const cycleMuiVideo = () => {
        const nextVideoIndex = (currentMuiIndex + 1) % muiSources.length;
        setCurrentMuiIndex(nextVideoIndex);
        if (currentMuiIndex === 3) {
            setCurrentMuiIndex(0);
        }
    };

// Effect to update the video source and play the video

    useEffect(() => {
        if (muiRef.current) {
            muiRef.current.load();
        }
    }, [currentMuiIndex]);

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
            <GMailMoreComponent 
                handleGHSVGClick={handleGHSVGClick}
                videoRef={videoRef}
                videoRef1={videoRef1}
                videoRef2={videoRef2}
                videoRef3={videoRef3}
                videoRef4={videoRef4}
                videoRef5={videoRef5}
                videoRef6={videoRef6}
                videoRef7={videoRef7}
                videoRef8={videoRef8}
                muiRef={muiRef}
                cycleMuiVideo={cycleMuiVideo}
                muiSources={muiSources}
                currentMuiIndex={currentMuiIndex}
                windowWidth={windowWidth}
            />
        </>
    );
}