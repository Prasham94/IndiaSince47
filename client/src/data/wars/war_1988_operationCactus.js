// war_1988_operationCactus.js

export const warOps_1988 = [
  {
    id: "88_d1_coup_attempt",
    warId: "operation-cactus",
    domain: "ground",
    subType: "coup",
    day: 1,
    date: "1988-11-03",
    time: "03:30",
    label: "Coup attempt in Malé",
    summary:
      "Armed mercenaries of the PLOTE group stormed Malé, taking government buildings and holding President Gayoom hostage.",
    locations: [
      {
        lat: 4.1755,
        lon: 73.5093,
        subType: "capital",
        fatalities: 19,
        injuries: 35,
        note: "Initial resistance by Maldivian National Security Service failed."
      }
    ],
    fatalities: 19,
    injuries: 35,
    sources: ["https://en.wikipedia.org/wiki/Operation_Cactus"]
  },
  {
    id: "88_d1_india_airlift",
    warId: "operation-cactus",
    domain: "air",
    subType: "intervention",
    day: 1,
    date: "1988-11-03",
    time: "21:30",
    label: "Indian Para Commandos airlifted to Maldives",
    summary:
      "50 Para Brigade airlifted from Agra by IAF Il-76 aircraft and landed at Hulhulé airport within hours of the SOS.",
    locations: [
      {
        lat: 4.1910,
        lon: 73.5291,
        subType: "airport",
        fatalities: 0,
        injuries: 2,
        note: "Secured airfield without opposition; moved rapidly to Malé via boats."
      }
    ],
    fatalities: 0,
    injuries: 2,
    sources: ["https://en.wikipedia.org/wiki/Operation_Cactus"]
  },
  {
    id: "88_d2_president_rescued",
    warId: "operation-cactus",
    domain: "ground",
    subType: "rescue-operation",
    day: 2,
    date: "1988-11-04",
    time: "01:00",
    label: "President Gayoom rescued",
    summary:
      "Indian forces secured the National Defence HQ and freed President Gayoom unharmed. Most rebels were captured or fled.",
    locations: [
      {
        lat: 4.1753,
        lon: 73.5095,
        subType: "government-complex",
        fatalities: 0,
        injuries: 0,
        note: "Operation completed with minimal resistance inside Malé."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Operation_Cactus"]
  },
  {
    id: "88_d2_mv_progress_captured",
    warId: "operation-cactus",
    domain: "naval",
    subType: "interception",
    day: 2,
    date: "1988-11-04",
    time: "08:45",
    label: "MV Progress hijacked, rebels intercepted",
    summary:
      "Rebels fled on a freighter with hostages; INS Godavari and INS Betwa intercepted the ship, rescuing hostages and capturing mercenaries.",
    locations: [
      {
        lat: 1.8330,
        lon: 72.3330,
        subType: "at-sea",
        fatalities: 0,
        injuries: 0,
        note: "High-seas chase across the Indian Ocean; operation praised internationally."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Operation_Cactus"]
  }
];

// Non-day-specific image gallery
warOps_1988.images = [
  "https://images.thequint.com/thequint/2018-02/34f11b1e-2d2d-4832-89c7-9c3e8eb3db35/7022d6de-8b44-4946-b060-ccff9ab4f9c4.jpg?auto=format%2Ccompress&fmt=webp&rect=0%2C0%2C730%2C411&w=1200",
  "https://www.ptisidiastima.com/wp-content/uploads/2020/11/operation-cactus.jpg",
  "https://salute.co.in/wp-content/uploads/2020/05/Operation-Cactus.jpg",
  "https://tse2.mm.bing.net/th?id=OIP.vm2AFNR6_Ii4Rnqp_ZrsgAHaEK&pid=Api"
];

export default warOps_1988;
