// src/components/layout/google-map-embed.tsx
"use client";

import React, { useState, useEffect } from 'react';

interface GoogleMapEmbedProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  mapId?: string;
  markerTitle?: string;
  className?: string; 
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  latitude,
  longitude,
  zoom = 14,
  mapId = "DEMO_MAP_ID", // Default Map ID
  markerTitle = "Office Location",
  className,
}) => {
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    // Check if API is already loaded (e.g., on fast navigations)
    if ((window as any).googleMapsApiInitialized) {
      setIsApiLoaded(true);
      return;
    }

    // Listen for the custom event
    const handleApiReady = () => {
      setIsApiLoaded(true);
    };
    window.addEventListener('google-maps-api-ready', handleApiReady);

    // Cleanup
    return () => {
      window.removeEventListener('google-maps-api-ready', handleApiReady);
    };
  }, []);

  if (!isApiLoaded) {
    return (
      <div className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
        Loading Map...
      </div>
    );
  }

  const centerString = `${latitude},${longitude}`;
  
  return (
    <gmp-map
      center={centerString}
      zoom={zoom.toString()}
      map-id={mapId}
      class={className}
    >
      <gmp-advanced-marker position={centerString} title={markerTitle}></gmp-advanced-marker>
    </gmp-map>
  );
};

export default GoogleMapEmbed;
