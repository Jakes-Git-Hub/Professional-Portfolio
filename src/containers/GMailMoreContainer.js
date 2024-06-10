import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GMailMoreComponent } from "../components/GMailMoreComponent";

export const GMailMoreContainer = () => {

    const navigate = useNavigate();
    const videoRef = useRef(null);

// GitHub Click

    const handleGHSVGClick = () => {
        window.open('https://github.com/Jakes-Git-Hub/Gmail-Log-In-And-Create-Account-React', '_blank');
    }

// Videos 

useEffect(() => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        },
        {
            threshold: 1
        }
    );

    // Start observing the video
    observer.observe(videoRef.current);

    // Clean up on unmount
    return () => {
        observer.unobserve(videoRef.current);
    };
}, []);


    return (
        <>
            <GMailMoreComponent 
                handleGHSVGClick={handleGHSVGClick}
                videoRef={videoRef}
            />
        </>
    );
}