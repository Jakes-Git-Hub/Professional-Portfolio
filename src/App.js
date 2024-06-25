import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FrontPageContainer } from './containers/FrontPageContainer';
import { GMailMoreContainer } from './containers/GMailMoreContainer';
import { JammmingContainer } from './containers/JammmingContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <FrontPageContainer />
          } 
        />
        <Route path="/gmail-more" element={
            <GMailMoreContainer />
          } 
        />
        <Route path="/Jammming" element={
            <JammmingContainer />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
