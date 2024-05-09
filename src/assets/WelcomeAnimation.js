import React, { useEffect, useRef } from 'react';

const WelcomeAnimation = () => {
  const welcomeTextRef = useRef(null);
  const containerRef = useRef(null);
  const welcomeScreenRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
      const welcomeText = welcomeTextRef.current;
      const container = containerRef.current;
      const welcomeScreen = welcomeScreenRef.current;
      const portfolio = portfolioRef.current;
      const characters = welcomeText.textContent.split("");

      welcomeText.textContent = ""; // Clear the original text

      characters.forEach(function(char, index) {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.transitionDelay = index * 0.125 + "s"; // Delay each character's transition
          welcomeText.appendChild(span);
      });

      setTimeout(function() {
          welcomeText.classList.add("animate-color");
          setTimeout(function() {
              welcomeText.classList.add("animate-slide");
              container.style.height = welcomeText.offsetHeight + "px"; // Adjust container height dynamically
              setTimeout(function() {
                  welcomeText.style.opacity = "0"; // Set opacity to 0 to fade out the text
                  setTimeout(function() {
                      welcomeText.textContent = ""; // Clear the text content
                      welcomeText.style.opacity = "1"; // Set opacity back to 1
                      welcomeText.style.color = "rgb(57, 55, 55)"; // Change color back to the original color
                      welcomeScreen.style.zIndex = "-2"; // Hide the welcome screen
                      welcomeScreen.style.backgroundColor = "white"; // Hide the welcome screen
                      portfolio.style.display = "block"; // Show the hidden content
                  }, 600); // Delay for 0.3 seconds to complete the fading effect
              }, 500); // Delay the fading animation for 1 second
          }, characters.length * 0.125 * 1000); // Delay the slide animation until color transition is complete
      }, 0);
  }, []);

  return (
    <div id="welcome-screen" ref={welcomeScreenRef}>
      <div class="welcome-container" ref={containerRef}>
        <h1 id="welcome-text" ref={welcomeTextRef}>Welcome</h1>
      </div>
      <div id="portfolio" ref={portfolioRef} style={{display: 'none'}}>
        {/* Your portfolio content goes here */}
      </div>
    </div>
  );
}

export default WelcomeAnimation;