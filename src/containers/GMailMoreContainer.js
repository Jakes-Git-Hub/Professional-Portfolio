import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GMailMoreComponent } from "../components/GMailMoreComponent";

export const GMailMoreContainer = () => {

    const navigate = useNavigate();
    

// GitHub Click

    const handleGHSVGClick = () => {
        window.open('https://github.com/Jakes-Git-Hub/Gmail-Log-In-And-Create-Account-React', '_blank');
    }

// h3 Intersection Observer

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

// Video Intersection Observer

const videoRef = useRef(null);
const videoRef1 = useRef(null);
const videoRef2 = useRef(null);
const videoRef3 = useRef(null);
const videoRef4 = useRef(null);
const videoRef5 = useRef(null);
const videoRef6 = useRef(null);
const videoRef7 = useRef(null);

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
            threshold: 1
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

    return () => {
        observer.unobserve(videoRef.current);
        observer.unobserve(videoRef1.current);
        observer.unobserve(videoRef2.current);
        observer.unobserve(videoRef3.current);
        observer.unobserve(videoRef4.current);
        observer.unobserve(videoRef5.current);
        observer.unobserve(videoRef6.current);
        observer.unobserve(videoRef7.current);
    };
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
            />
        </>
    );
}