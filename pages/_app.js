import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css"; // Global CSS (you can create a custom file for your styles)
import "leaflet/dist/leaflet.css"; // Include Leaflet CSS globally

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Preventing default icon issues in Leaflet
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OutbreakX | Disease Visualization</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
