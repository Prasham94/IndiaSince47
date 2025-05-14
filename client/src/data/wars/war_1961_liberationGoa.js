// war_1961_liberationGoa.js

export const warOps_1961 = [
  {
    id: "61_d1_airstrike",
    warId: "liberation-goa",
    domain: "air",
    subType: "airstrike",
    day: 1,
    date: "1961-12-18",
    time: "06:00",
    label: "IAF strikes Dabolim Airfield",
    summary:
      "Indian Air Force fighters bombed runway, fuel dumps and anti-aircraft emplacements at Dabolim, degrading Portuguese air capability.",
    locations: [
      {
        lat: 15.3891,
        lon: 73.8278,
        subType: "airfield",
        fatalities: 0,
        injuries: 0,
        note: "Runway cratered; no Indian losses."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Liberation_of_Goa"]
  },
  {
    id: "61_d1_naval",
    warId: "liberation-goa",
    domain: "naval",
    subType: "naval-bombardment",
    day: 1,
    date: "1961-12-18",
    time: "07:30",
    label: "INS Betwa bombards Mormugao harbour",
    summary:
      "Indian Navy’s destroyer and frigate bombarded harbour batteries and Portuguese naval vessels, enforcing a blockade.",
    locations: [
      {
        lat: 15.4067,
        lon: 73.8228,
        subType: "harbour",
        fatalities: 0,
        injuries: 22,
        note: "22 Indian sailors wounded by return fire."
      }
    ],
    fatalities: 0,
    injuries: 22,
    sources: ["https://en.wikipedia.org/wiki/Liberation_of_Goa"]
  },
  {
    id: "61_d1_amphibious",
    warId: "liberation-goa",
    domain: "ground",
    subType: "amphibious-landing",
    day: 1,
    date: "1961-12-18",
    time: "09:00",
    label: "Maratha LI lands at Majali",
    summary:
      "Two companies of Maratha Light Infantry landed near Majali, seizing the south Goa coast and cutting off Portuguese defenders.",
    locations: [
      {
        lat: 15.2520,
        lon: 73.9876,
        subType: "landing-beach",
        fatalities: 0,
        injuries: 5,
        note: "Five soldiers lightly wounded by beach mines."
      }
    ],
    fatalities: 0,
    injuries: 5,
    sources: ["https://en.wikipedia.org/wiki/Liberation_of_Goa"]
  },
  {
    id: "61_d2_panjim_surrender",
    warId: "liberation-goa",
    domain: "ground",
    subType: "surrender",
    day: 2,
    date: "1961-12-19",
    time: "11:00",
    label: "Portuguese governor surrenders at Panaji",
    summary:
      "Governor General Manuel António Vassalo e Silva signed the Instrument of Surrender in Panaji, ending 451 years of colonial rule.",
    locations: [
      {
        lat: 15.4924,
        lon: 73.8279,
        subType: "city",
        fatalities: 0,
        injuries: 0,
        note: "Ceremony held at Government House."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Liberation_of_Goa"]
  },
  {
    id: "61_d3_final_linkup",
    warId: "liberation-goa",
    domain: "ground",
    subType: "occupation",
    day: 3,
    date: "1961-12-20",
    time: "14:00",
    label: "Indian columns link up across Goa",
    summary:
      "Indian Army columns advancing from north, east, and south converged near Panaji and Vasco, establishing full control of Goa, Daman and Diu.",
    locations: [
      {
        lat: 15.45,
        lon: 73.82,
        subType: "linkup-point",
        fatalities: 1,
        injuries: 3,
        note: "Final clashes with isolated Portuguese units."
      }
    ],
    fatalities: 1,
    injuries: 3,
    sources: ["https://en.wikipedia.org/wiki/Liberation_of_Goa"]
  }
];

// Image gallery (non-day-specific)
warOps_1961.images = [
  
  "https://raksha-anirveda.com/wp-content/uploads/2022/12/map1-1.webp",
  "https://i0.wp.com/allaboutbelgaum.com/content/uploads/2021/05/WhatsApp-Image-2021-05-21-at-9.09.41-PM.jpeg",
  "https://historyguild.org/wp-content/uploads/2024/01/indian-m4-sherman-tank.jpg"
];

export default warOps_1961;
