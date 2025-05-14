import React, { useState } from 'react';
import './UserNote.css';

export default function UserNote() {
  const [open, setOpen] = useState(false);

  const disclaimer = `
This material is intended solely for educational purposes and does not constitute professional, legal, or medical advice. All information is provided “as is,” without warranty of any kind, express or implied. All dates, email addresses, and images have been sourced from publicly available internet resources; no ownership is claimed.

If you believe any content infringes on your rights or is otherwise inappropriate, please contact prashamjain94@gmail.com, and it will be promptly reviewed and addressed.

Author
Prasham Jain
SRM University

Jai Hind, Jai Bharat!
  `.trim();

  return (
    <>
      <button
        className="user-note-tab"
        onClick={() => setOpen(true)}
        aria-label="Show disclaimer"
      >👤</button>

      {open && (
        <div className="user-note-panel">
          <div className="user-note-header">
            <span>Disclaimer</span>
            <button
              className="user-note-close"
              onClick={() => setOpen(false)}
              aria-label="Close disclaimer"
            >✕</button>
          </div>
          <div className="user-note-content">
            {disclaimer.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
