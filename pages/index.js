import { useState } from "react";
import Map from "../components/Map"; // Import Map component

export default function Home() {
  const [showMap, setShowMap] = useState(false); // State to toggle map display
  const [position, setPosition] = useState([17.385, 78.4867]); // Default location (Hyderabad)
  const [zoomLevel, setZoomLevel] = useState(10);

  return (
    <div>
      <h2>OutbreakX - Disease Visualization</h2>
      <p>
        Track and predict disease outbreaks using geospatial analysis.
      </p>

      {/* Button to toggle map */}
      <button onClick={() => setShowMap(!showMap)}>
        {showMap ? "Hide Map" : "Navigate to Map"}
      </button>

      {/* Conditionally render Map component */}
      {showMap && <Map position={position} zoomLevel={zoomLevel} />}
    </div>
  );
}
