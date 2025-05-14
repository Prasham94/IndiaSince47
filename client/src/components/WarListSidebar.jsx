import React, { useState } from 'react'
import { warList }            from '../data/wars'
import terroristEvents        from '../data/terroristEvents'
import './WarListSidebar.css'

export default function WarListSidebar({ onSelectWar, onSelectEvent }) {
  const [expandedCat, setExpandedCat]   = useState({ war: true, terror: true })
  const [expandedYear, setExpandedYear] = useState({})

  // group wars by year
  const warsByYear = warList.reduce((acc, w) => {
    (acc[w.year] = acc[w.year] || []).push(w)
    return acc
  }, {})
  const warYears = Object.keys(warsByYear).sort()

  // group terrorist events by year
  const terrorByYear = terroristEvents.reduce((acc, e) => {
    const y = e.date.slice(0,4)
    ;(acc[y] = acc[y] || []).push(e)
    return acc
  }, {})
  const terrorYears = Object.keys(terrorByYear).sort()

  const toggleCat  = key => setExpandedCat(c => ({ ...c, [key]: !c[key] }))
  const toggleYear = key => setExpandedYear(y => ({ ...y, [key]: !y[key] }))

  return (
    <nav className="sidebar-nav">
      {/* WAR */}
      <div className="category">
        <div
          className="category-header"
          onClick={() => toggleCat('war')}
        >
          {expandedCat.war ? '▾' : '▸'} <span>War</span>
        </div>
        {expandedCat.war && warYears.map(year => {
          const key = `war-${year}`
          return (
            <div key={year} className="year-block">
              <div
                className="year-header"
                onClick={() => toggleYear(key)}
              >
                {expandedYear[key] ? '▾' : '▸'} <span>{year}</span>
              </div>
              {expandedYear[key] && (
                <ul className="item-list">
                  {warsByYear[year].map(w => (
                    <li key={w.id}>
                      <div
                        className="item"
                        onClick={() => onSelectWar(w.id)}
                      >
                        {w.name}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>

      {/* TERRORIST EVENTS */}
      <div className="category">
        <div
          className="category-header"
          onClick={() => toggleCat('terror')}
        >
          {expandedCat.terror ? '▾' : '▸'} <span>Terrorist Events</span>
        </div>
        {expandedCat.terror && terrorYears.map(year => {
          const key = `terror-${year}`
          return (
            <div key={year} className="year-block">
              <div
                className="year-header"
                onClick={() => toggleYear(key)}
              >
                {expandedYear[key] ? '▾' : '▸'} <span>{year}</span>
              </div>
              {expandedYear[key] && (
                <ul className="item-list">
                  {terrorByYear[year].map(evt => (
                    <li key={evt.date}>
                      <div
                        className="item"
                        onClick={() => onSelectEvent(evt)}
                      >
                        {evt.title}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
