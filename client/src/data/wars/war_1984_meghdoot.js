// war_1984_meghdoot.js

export const warOps_1984 = [
  {
    id: "84_d1_deployment",
    warId: "meghdoot",
    domain: "ground",
    subType: "high-altitude-deployment",
    day: 1,
    date: "1984-04-13",
    time: "05:45",
    label: "Indian Army occupies Siachen Glacier",
    summary:
      "Troops of the Kumaon Regiment were airlifted and deployed on key passes in the Siachen region, preempting Pakistani occupation.",
    locations: [
      {
        lat: 35.30,
        lon: 77.00,
        subType: "glacier",
        fatalities: 3,
        injuries: 7,
        note: "World's first high-altitude conflict operation; extreme weather claimed early casualties."
      }
    ],
    fatalities: 3,
    injuries: 7,
    sources: ["https://en.wikipedia.org/wiki/Operation_Meghdoot"]
  },
  {
    id: "84_d5_bilafondla",
    warId: "meghdoot",
    domain: "ground",
    subType: "mountain-assault",
    day: 5,
    date: "1984-04-17",
    time: "07:20",
    label: "Bilafond La secured by Indian troops",
    summary:
      "After 5 days of movement and patrolling, Indian forces secured Bilafond La, one of the main strategic passes on the glacier.",
    locations: [
      {
        lat: 35.205,
        lon: 76.870,
        subType: "pass",
        fatalities: 0,
        injuries: 2,
        note: "Skirmishes broke out intermittently after this point."
      }
    ],
    fatalities: 0,
    injuries: 2,
    sources: ["https://en.wikipedia.org/wiki/Operation_Meghdoot"]
  },
  {
    id: "84_d10_saltoro",
    warId: "meghdoot",
    domain: "ground",
    subType: "strategic-occupation",
    day: 10,
    date: "1984-04-22",
    time: "06:30",
    label: "Saltoro Ridge occupied",
    summary:
      "Indian Army consolidated control of Saltoro Ridge including Sia La and Gyong La, denying Pakistani movement beyond the west.",
    locations: [
      {
        lat: 35.358,
        lon: 76.825,
        subType: "ridge",
        fatalities: 4,
        injuries: 11,
        note: "Most casualties due to frostbite and high-altitude sickness."
      }
    ],
    fatalities: 4,
    injuries: 11,
    sources: ["https://en.wikipedia.org/wiki/Siachen_conflict"]
  },
  {
    id: "84_d90_hold_line",
    warId: "meghdoot",
    domain: "multi",
    subType: "territorial-hold",
    day: 90,
    date: "1984-07-12",
    time: "00:00",
    label: "Control line established",
    summary:
      "India held key peaks and passes above 20,000 feet. Pakistan failed to dislodge Indian troops despite multiple attempts.",
    locations: [
      {
        lat: 35.290,
        lon: 76.960,
        subType: "mountain-combat-zone",
        fatalities: 0,
        injuries: 0,
        note: "Unofficial LoC extension along Saltoro Ridge remained status quo."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Operation_Meghdoot"]
  }
];

// Non-day-specific image gallery
warOps_1984.images = [
  "https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2024/4/15/14/18/34/Operation_Meghdoot.jpg",
  "https://www.financialexpress.com/wp-content/uploads/2024/04/Operation-Meghdoot.jpg?w=1024",
  "https://images.indianexpress.com/2024/03/army-in-siachen.jpg",
  "https://i.redd.it/1984-operation-meghdoot-india-gains-control-over-siachen-v0-frob40niuynb1.png?s=b8b74b6c6a55fdea7dd09ed8fd23a683583a8f0b"
];

export default warOps_1984;
