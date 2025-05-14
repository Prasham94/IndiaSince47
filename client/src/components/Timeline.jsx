// src/components/Timeline.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Timeline.css';

export default function Timeline({
  events = [],
  selectedEventId,
  setSelectedEventId,
  onNavigate,
  autoPlayInterval = 2000
}) {
  // 1) sort all events by timestamp
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) =>
      new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
    );
  }, [events]);

  // 2) Hooks at top level
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);

  // 3) Cleanup on unmount
  useEffect(() => () => clearInterval(timerRef.current), []);

  // 4) whenever the `events` prop changes, stop playback
  useEffect(() => {
    clearInterval(timerRef.current);
    setPlaying(false);
  }, [events]);

  // 5) Early returns
  if (sortedEvents.length === 0) return null;
  if (sortedEvents.length === 1) {
    const evt = sortedEvents[0];
    return (
      <div className="timeline-bar">
        <div className="timeline-single">
          {evt.date} {evt.time}
        </div>
      </div>
    );
  }

  // 6) derive start/end labels
  const startEvt   = sortedEvents[0];
  const endEvt     = sortedEvents[sortedEvents.length - 1];
  const startLabel = `${startEvt.date} ${startEvt.time}`;
  const endLabel   = `${endEvt.date} ${endEvt.time}`;

  // 7) find current index
  const currentIndex = Math.max(
    0,
    sortedEvents.findIndex(e => e.id === selectedEventId)
  );

  // navigate to a given index
  const goToIndex = idx => {
    const evt = sortedEvents[idx];
    if (!evt) return;
    setSelectedEventId(evt.id);
    const loc = evt.locations?.[0];
    if (loc) onNavigate({ lat: loc.lat, lon: loc.lon });
  };

  // slider handler
  const onSlide = e => goToIndex(Number(e.target.value));

  // play/pause toggle
  const togglePlay = () => {
    if (playing) {
      clearInterval(timerRef.current);
      setPlaying(false);
    } else {
      setPlaying(true);
      timerRef.current = setInterval(() => {
        setSelectedEventId(prev => {
          const p = sortedEvents.findIndex(e => e.id === prev);
          const next = (p + 1) % sortedEvents.length;
          goToIndex(next);
          return sortedEvents[next].id;
        });
      }, autoPlayInterval);
    }
  };

  return (
    <div className="timeline-bar">
      <button
        className={`timeline-btn play${playing ? ' pause' : ''}`}
        onClick={togglePlay}
      >
        {playing ? '❚❚' : '▶️'}
      </button>

      <span className="timeline-label timeline-start">{startLabel}</span>

      <input
        type="range"
        className="timeline-slider"
        min={0}
        max={sortedEvents.length - 1}
        value={currentIndex}
        onChange={onSlide}
        style={{
          backgroundSize: `${(currentIndex / (sortedEvents.length - 1)) * 100}% 100%`
        }}
      />

      <span className="timeline-label timeline-end">{endLabel}</span>

      <div className="timeline-date">
        {sortedEvents[currentIndex].date} {sortedEvents[currentIndex].time}
      </div>
    </div>
  );
}
