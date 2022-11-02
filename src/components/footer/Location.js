import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Box } from "@mui/material";

const defaultMapConfig = {
  gestureHandling: "greedy",
  options: {
    fullscreenControl: true,
  },
  mapContainerStyle: {
    height: "150px",
    width: "100%",
    borderRadius: "7px",
  },
};

export default function Location() {
  const position = {
    lat: 41.3106176,
    lng: 69.2518912,
  };


  return (
    <Box>
        <Box
          sx={{
            borderRadius: 1,
          }}
        >
          <LoadScript
            googleMapsApiKey={"AIzaSyDYp1te-bQEhWE9P9yehRE3biB7LpSEh4U"}
            loadingElement={<div />}
            containerElement={<div />}
            mapElement={<div />}
          >
            <GoogleMap {...defaultMapConfig} zoom={13} center={position}>
            <Marker
          position={position}
        >
        </Marker>
            </GoogleMap>
          </LoadScript>
        </Box>
    </Box>
  );
}
