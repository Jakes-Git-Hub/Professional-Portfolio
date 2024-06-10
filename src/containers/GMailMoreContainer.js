import React from "react";
import { useNavigate } from "react-router-dom";
import { GMailMoreComponent } from "../components/GMailMoreComponent";

export const GMailMoreContainer = () => {
    const navigate = useNavigate();

    const handleGHSVGClick = () => {
        window.open('https://github.com/Jakes-Git-Hub/Gmail-Log-In-And-Create-Account-React', '_blank');
    }


    return (
        <>
            <GMailMoreComponent 
                handleGHSVGClick={handleGHSVGClick}
            />
        </>
    );
}