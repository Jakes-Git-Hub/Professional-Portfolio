import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FrontPageContainer } from './containers/FrontPageContainer';
import { GMailMoreContainer } from './containers/GMailMoreContainer';

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
      </Routes>
    </Router>
  );
}

export default App;
