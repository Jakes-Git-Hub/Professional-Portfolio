import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FrontPageContainer } from './containers/FrontPageContainer';
import { GMailMoreContainer } from './containers/GMailMoreContainer';
import { JammmingContainer } from './containers/JammmingContainer';
import { AdoptAPetContainer } from './containers/AdoptAPetContainer';

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
        <Route path="/adopt-a-pet" element={
            <AdoptAPetContainer />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
