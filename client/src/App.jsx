// src/App.jsx
import React, { useState, useCallback } from 'react';
import Header           from './components/header';
import WarListSidebar   from './components/WarListSidebar';
import WarDetailSidebar from './components/WarDetailSidebar';
import MapView          from './components/MapView';
import Timeline         from './components/Timeline';
import UserNote         from './components/UserNote';
import { loadWarData }  from './data/wars';
import './App.css';

export default function App() {
  const [events,          setEvents]          = useState([]);   // current list in sidebar
  const [images,          setImages]          = useState([]);   // gallery images
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [flyTo,           setFlyTo]           = useState(null);

  // pan & zoom helper
  const panAndSelect = useCallback(evt => {
    setSelectedEventId(evt.id);
    const loc = evt.locations?.[0];
    if (loc) {
      setFlyTo({ lat: loc.lat, lon: loc.lon, zoom: 10, duration: 2000 });
    }
  }, []);

  // load a war's full events
  const handleSelectWar = useCallback(id => {
    loadWarData(id).then(mod => {
      const warEvents = mod.default || [];
      const warImgs   = mod.default.images || [];
      setEvents(warEvents);
      setImages(warImgs);
      if (warEvents.length) {
        panAndSelect(warEvents[0]);
      }
    });
  }, [panAndSelect]);

  // select any single event (war or terror)
  const handleSelectEvent = useCallback(evt => {
    setSelectedEventId(evt.id);

    // if this event is already in current events list (a war event),
    // leave the list intact; otherwise replace with just this event
    setEvents(prev => 
      prev.some(e => e.id === evt.id) 
        ? prev 
        : [evt]
    );

    // update gallery if the event carries its own images
    setImages(evt.images || []);

    // pan map
    const loc = evt.locations?.[0];
    if (loc) {
      setFlyTo({ lat: loc.lat, lon: loc.lon, zoom: 10, duration: 2000 });
    }
  }, []);

  return (
    <div className="app-wrapper">
      <MapView
        flyTo={flyTo}
        events={events}
        onMarkerClick={handleSelectEvent}
      />

      <Header />

      <div className="main-content">
        <div className="sidebar left">
          <WarListSidebar
            onSelectWar={handleSelectWar}
            onSelectEvent={handleSelectEvent}
          />
        </div>

        {events.length > 0 && (
          <div className="sidebar right">
            <WarDetailSidebar
              events={events}
              images={images}
              selectedEventId={selectedEventId}
              onClose={() => {
                setEvents([]);
                setImages([]);
                setSelectedEventId(null);
              }}
              onNavigate={coord =>
                setFlyTo({ ...coord, zoom: 10, duration: 2000 })
              }
              onSelectEvent={handleSelectEvent}
            />
          </div>
        )}
      </div>

      {events.length > 0 && (
        <Timeline
          events={events}
          selectedEventId={selectedEventId}
          setSelectedEventId={setSelectedEventId}
          onNavigate={coord =>
            setFlyTo({ ...coord, zoom: 10, duration: 2000 })
          }
          autoPlayInterval={2000}
        />
      )}

      {/* User Note widget */}
      <UserNote />
    </div>
  );
}
