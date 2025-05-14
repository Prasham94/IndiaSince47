// src/components/MapView.jsx
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapView.css';

import airstrikeIcon    from '../assets/icons/airstrike.png';
import explosionIcon    from '../assets/icons/explosion.png';
import infiltrationIcon from '../assets/icons/infiltration.png';
import shipMissileIcon  from '../assets/icons/ship-missile.png';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2hhbWphaW45NCIsImEiOiJjbWFpdDZ2ZW4wbjA4MmxzN3hja3F3YTJhIn0.fHqy6LcE-Pq3WymNlu8LtQ';

const ICON_ENTRIES = [
  ['airstrike',    airstrikeIcon],
  ['explosion',    explosionIcon],
  ['infiltration', infiltrationIcon],
  ['ship-missile', shipMissileIcon],
];

// Pick an icon name purely by event.domain, defaulting to 'multi'
function getIconKey(evt) {
  const d = (evt.domain || 'multi').toLowerCase();
  if (d === 'air')    return 'airstrike';
  if (d === 'naval')  return 'ship-missile';
  if (d === 'ground') return 'infiltration';
  // multi covers both multi-domain and any unknown (including terrorism)
  return 'explosion';
}

export default function MapView({ flyTo, events = [], onMarkerClick }) {
  const container = useRef(null);
  const mapRef    = useRef(null);
  const eventsRef = useRef(events);

  // keep eventsRef up to date & update source data
  useEffect(() => {
    eventsRef.current = events;
    const map = mapRef.current;
    if (map && map.isStyleLoaded()) {
      map.getSource('events').setData(buildGeoJSON(events));
    }
  }, [events]);

  // one-time map & image setup
  useEffect(() => {
    if (mapRef.current) return;

    const map = new mapboxgl.Map({
      container: container.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [78.9629, 22.5937],
      zoom: 4,
      dragRotate: false,
      pitchWithRotate: false,
    });

    map.on('load', () => {
      // preload icons
      Promise.all(
        ICON_ENTRIES.map(([name, url]) =>
          new Promise(resolve =>
            map.loadImage(url, (err, img) => {
              if (!err && img) map.addImage(name, img);
              resolve();
            })
          )
        )
      ).then(() => {
        // add events source & layer
        map.addSource('events', {
          type: 'geojson',
          data: buildGeoJSON(eventsRef.current),
        });
        map.addLayer({
          id: 'events-layer',
          type: 'symbol',
          source: 'events',
          layout: {
            'icon-image': ['get', 'iconName'],
            'icon-size': 0.2,
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
          }
        });

        // click & hover
        map.on('click', 'events-layer', e => {
          const { id } = e.features[0].properties;
          const clicked = eventsRef.current.find(evt => evt.id === id);
          clicked && onMarkerClick(clicked);
        });
        map.on('mouseenter','events-layer',() => map.getCanvas().style.cursor = 'pointer');
        map.on('mouseleave','events-layer',() => map.getCanvas().style.cursor = '');
      });
    });

    mapRef.current = map;
  }, [onMarkerClick]);

  // flyTo effect
  useEffect(() => {
    const map = mapRef.current;
    if (map && flyTo) {
      map.flyTo({ center: [flyTo.lon, flyTo.lat], zoom: 10, duration: 2000, essential: true });
    }
  }, [flyTo]);

  return <div ref={container} className="map-container" />;
}

function buildGeoJSON(events) {
  return {
    type: 'FeatureCollection',
    features: events.map(evt => {
      const loc = evt.locations?.[0] || {};
      if (loc.lat == null || loc.lon == null) return null;
      return {
        type: 'Feature',
        properties: {
          id: evt.id,
          iconName: getIconKey(evt),
        },
        geometry: {
          type: 'Point',
          coordinates: [loc.lon, loc.lat],
        }
      };
    }).filter(Boolean),
  };
}
