import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Map() {
  const location = useLocation();
  const { origin, destination } = location.state;
  const [route, setRoute] = useState([]);
  const [chargingStations, setChargingStations] = useState([]);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await axios.post('/api/route', { origin, destination });
        setRoute(response.data.route);
        setChargingStations(response.data.chargingStations);
      } catch (error) {
        console.error('Error fetching route', error);
      }
    };
    fetchRoute();
  }, [origin, destination]);

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={route} color="blue" />
        {chargingStations.map((station, index) => (
          <Marker key={index} position={[station.lat, station.lng]} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
