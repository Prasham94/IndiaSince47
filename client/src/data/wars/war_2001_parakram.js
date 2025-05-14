// war_2001_parakram.js

export const warOps_2001 = [
  {
    id: "01_d1_attack_trigger",
    warId: "operation-parakram",
    domain: "ground",
    subType: "terror-trigger",
    day: 1,
    date: "2001-12-13",
    time: "11:30",
    label: "Indian Parliament attacked",
    summary:
      "Five armed terrorists attacked the Indian Parliament complex in New Delhi, triggering national outrage and military response.",
    locations: [
      {
        lat: 28.6170,
        lon: 77.2080,
        subType: "parliament",
        fatalities: 14,
        injuries: 20,
        note: "Attack attributed to Jaish-e-Mohammed and Lashkar-e-Taiba."
      }
    ],
    fatalities: 14,
    injuries: 20,
    sources: ["https://en.wikipedia.org/wiki/2001_Indian_Parliament_attack"]
  },
  {
    id: "01_d5_mobilization",
    warId: "operation-parakram",
    domain: "multi",
    subType: "military-mobilization",
    day: 5,
    date: "2001-12-18",
    time: "08:00",
    label: "India begins massive troop mobilization",
    summary:
      "India initiated full-scale troop mobilization along the western border under Operation Parakram—the largest since 1971.",
    locations: [
      {
        lat: 29.9500,
        lon: 73.8800,
        subType: "border-sector",
        fatalities: 0,
        injuries: 0,
        note: "Nearly 500,000 troops moved toward Punjab, Rajasthan, and J&K sectors."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Operation_Parakram"]
  },
  {
    id: "02_d40_sundarbani_mineblast",
    warId: "operation-parakram",
    domain: "ground",
    subType: "accidental-blast",
    day: 40,
    date: "2002-01-22",
    time: "10:30",
    label: "Minefield explosion at Sundarbani",
    summary:
      "A miscommunication during patrolling caused a minefield blast, resulting in major casualties among Indian troops.",
    locations: [
      {
        lat: 33.6530,
        lon: 74.4650,
        subType: "minefield",
        fatalities: 20,
        injuries: 15,
        note: "One of the deadliest non-combat incidents of the operation."
      }
    ],
    fatalities: 20,
    injuries: 15,
    sources: ["https://en.wikipedia.org/wiki/Operation_Parakram"]
  },
  {
    id: "02_d165_kaluchak",
    warId: "operation-parakram",
    domain: "ground",
    subType: "terror-attack",
    day: 165,
    date: "2002-05-14",
    time: "07:15",
    label: "Kaluchak Massacre",
    summary:
      "Three militants attacked a bus and Army residential area near Kaluchak, killing families of personnel, including women and children.",
    locations: [
      {
        lat: 32.4345,
        lon: 75.0356,
        subType: "residential-camp",
        fatalities: 31,
        injuries: 47,
        note: "Attack reignited calls for retaliation."
      }
    ],
    fatalities: 31,
    injuries: 47,
    sources: ["https://en.wikipedia.org/wiki/Kaluchak_Massacre"]
  },
  {
    id: "03_d420_deescalation",
    warId: "operation-parakram",
    domain: "multi",
    subType: "stand-down",
    day: 420,
    date: "2003-10-16",
    time: "12:00",
    label: "De-escalation and withdrawal completed",
    summary:
      "After nearly 10 months of standoff and several diplomatic interventions, India began de-escalation and phased troop withdrawal.",
    locations: [
      {
        lat: 28.4000,
        lon: 74.8600,
        subType: "military-base",
        fatalities: 0,
        injuries: 0,
        note: "No major battle occurred; over 800 soldiers died in accidents and skirmishes during the standoff."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Operation_Parakram"]
  }
];

// Non-day-specific image gallery
warOps_2001.images = [
  "https://revisitingindia.com/wp-content/uploads/2013/07/tank-train-2.jpg?w=652",
  "https://static.theprint.in/wp-content/uploads/2019/01/2018_12img30_Dec_2018_PTI12_30_2018_000053B-1-e1546494267901-1024x547.jpg",
  "https://img.republicworld.com/rimages/Op-Parakram-1704109875774.webp?tr=w-1280",
  "https://upload.wikimedia.org/wikipedia/commons/a/aa/Indian_T72M_%27Ajeya%27_Main_Battle_Tank.jpg"
];

export default warOps_2001;
