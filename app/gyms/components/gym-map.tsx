import GoogleMapReact from "google-map-react";

export default function GymMap() {
  const defaultProps = {
    center: {
      lat: 7.067948,
      lng: 125.590094,
    },
    zoom: 14,
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
