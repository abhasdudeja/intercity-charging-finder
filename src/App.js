import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Map from './components/Map';
import ChargingRecommendation from './components/ChargingRecommendation';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/recommend" element={<ChargingRecommendation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
