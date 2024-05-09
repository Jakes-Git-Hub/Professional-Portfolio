import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FrontPageContainer } from './containers/FrontPageContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <FrontPageContainer />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
