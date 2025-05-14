// src/components/WarDetailSidebar.jsx
import React, { useEffect, useState } from 'react';
import './WarDetailSidebar.css';

const ICONS = {
  air:    '✈️',
  naval:  '🚢',
  ground: '🔫',
  multi:  '💥',
};

export default function WarDetailSidebar({
  events = [],
  selectedEventId,
  onClose,
  onNavigate,
  onSelectEvent,
  images = []
}) {
  const [modalIdx, setModalIdx] = useState(null);

  // group by date
  const byDate = events.reduce((acc, e) => {
    (acc[e.date] = acc[e.date] || []).push(e);
    return acc;
  }, {});
  const dates = Object.keys(byDate).sort();

  // scroll into view
  useEffect(() => {
    if (!selectedEventId) return;
    const el = document.getElementById(selectedEventId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selectedEventId]);

  // pick gallery: event-specific or war-level
  const selectedEvent = events.find(e => e.id === selectedEventId);
  const gallery = selectedEvent?.images?.length
    ? selectedEvent.images
    : images;

  // index bounds helpers
  const hasPrev = modalIdx > 0;
  const hasNext = modalIdx < gallery.length - 1;

  return (
    <aside className="detail-sidebar">
      <header className="detail-header">
        <h2>Details</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </header>

      <div className="detail-body">
        {dates.map(date => (
          <section key={date} className="date-group">
            <div className="date-header">{date}</div>
            {byDate[date].map(evt => {
              const coord = evt.locations?.[0];
              const isSel = evt.id === selectedEventId;
              return (
                <article
                  key={evt.id}
                  id={evt.id}
                  className={`event-card${isSel ? ' selected' : ''}`}
                  onClick={() => {
                    onSelectEvent(evt);
                    coord && onNavigate({ lat: coord.lat, lon: coord.lon });
                  }}
                >
                  <div className="event-time">
                    <span className="event-icon">{ICONS[evt.domain]||ICONS.multi}</span>
                    {evt.time}
                  </div>
                  <div className="event-title">{evt.label}</div>
                  <p className="event-summary">{evt.summary}</p>
                  <div className="event-meta">
                    {coord && (
                      <span className="meta-item">
                        [{coord.lat.toFixed(2)}, {coord.lon.toFixed(2)}]
                      </span>
                    )}
                    <span className="meta-item">
                      Killed: {evt.fatalities}  Injured: {evt.injuries}
                    </span>
                  </div>
                  {evt.sources?.length > 0 && (
                    <div className="event-sources">
                      Source:
                      <ul>
                        {evt.sources.map((u,i)=>(
                          <li key={i}>
                            <a href={u} target="_blank" rel="noreferrer">{u}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        ))}
      </div>

      {gallery.length > 0 && (
        <div className="image-gallery">
          {gallery.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`img ${idx+1}`}
              className="image-thumb"
              onClick={() => setModalIdx(idx)}
            />
          ))}
        </div>
      )}

      {modalIdx != null && (
        <div className="image-modal" onClick={() => setModalIdx(null)}>
          <button className="modal-close" onClick={() => setModalIdx(null)}>✕</button>
          {hasPrev && (
            <button
              className="modal-nav prev"
              onClick={e => { e.stopPropagation(); setModalIdx(modalIdx-1); }}
            >‹</button>
          )}
          <img src={gallery[modalIdx]} alt="Full view" className="modal-img" />
          {hasNext && (
            <button
              className="modal-nav next"
              onClick={e => { e.stopPropagation(); setModalIdx(modalIdx+1); }}
            >›</button>
          )}
        </div>
      )}
    </aside>
  );
}
