import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ChargingRecommendation() {
  const location = useLocation();
  const { origin, destination, evModel } = location.state;
  const [chargingLocations, setChargingLocations] = useState([]);
  useEffect(() => {
    const fetchChargingLocations = async () => {
      try {
        const response = await axios.post('https://your-heroku-app.herokuapp.com/api/recommend-charging', {
          origin,
          destination,
          evModel,
        });
        setChargingLocations(response.data);
      } catch (error) {
        console.error('Error fetching charging locations', error);
      }
    };
    fetchChargingLocations();
  }, [origin, destination, evModel]);
  
  return (
    <div>
      <h1>Recommended Charging Locations</h1>
      <ul>
        {chargingLocations.map((station, index) => (
          <li key={index}>{station.name} at {station.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChargingRecommendation;
