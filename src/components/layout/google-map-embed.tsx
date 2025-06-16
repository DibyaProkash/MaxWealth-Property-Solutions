// src/components/layout/google-map-embed.tsx
"use client";

import React from 'react';

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
  mapId = "DEMO_MAP_ID",
  markerTitle = "Office Location",
  className,
}) => {
  const centerString = `${latitude},${longitude}`;

  // The gmp-map element will take its dimensions from the parent via className
  // and the global CSS rule `gmp-map { height: 100%; width: 100% }`
  return (
    <gmp-map
      center={centerString}
      zoom={zoom.toString()}
      map-id={mapId}
      class={className} // Use 'class' for web components, React handles mapping 'className' for native HTML
    >
      <gmp-advanced-marker position={centerString} title={markerTitle}></gmp-advanced-marker>
    </gmp-map>
  );
};

export default GoogleMapEmbed;
