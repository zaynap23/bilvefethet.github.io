import React from 'react';
import './Map.css'; // Assuming you will create a CSS file for styling
import turkeyMap from '../../assets/maps/turkey-14-regions.svg';

const Map = ({ regions, onRegionClick }) => {
    return (
        <div className="map-container">
            <img src={turkeyMap} alt="Map of Turkey" className="turkey-map" />
            <div className="regions">
                {regions.map((region, index) => (
                    <div
                        key={index}
                        className={`region ${region.color}`}
                        onClick={() => onRegionClick(region.name)}
                        style={{ position: 'absolute', top: region.top, left: region.left }}
                    >
                        {region.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Map;