import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [evModel, setEvModel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the charging recommendation page with the inputs
    navigate('/recommend', { state: { origin, destination, evModel } });
  };

  return (
    <div>
      <h1>Find EV Charging Locations</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Origin:</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Destination:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div>
          <label>EV Model:</label>
          <input
            type="text"
            value={evModel}
            onChange={(e) => setEvModel(e.target.value)}
            required
          />
        </div>
        <button type="submit">Find Charging Locations</button>
      </form>
    </div>
  );
}

export default Home;
