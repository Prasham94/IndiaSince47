// war_1962_sinoIndianWar.js

export const warOps_1962 = [
  {
    id: "62_d1_namkha",
    warId: "sino-indian-1962",
    domain: "ground",
    subType: "coordinated-assault",
    day: 1,
    date: "1962-10-20",
    time: "05:14",
    label: "PLA breakthrough at Namka Chu",
    summary:
      "Chinese 154th Division attacked Indian forward companies along the Namka Chu river in NEFA, overrunning defenses by midday.",
    locations: [
      {
        lat: 27.58,
        lon: 92.09,
        subType: "river-bank",
        fatalities: 184,
        injuries: 107
      }
    ],
    fatalities: 184,
    injuries: 107,
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Namka_Chu"]
  },
  {
    id: "62_d4_bumlapass",
    warId: "sino-indian-1962",
    domain: "ground",
    subType: "defensive-skirmish",
    day: 4,
    date: "1962-10-23",
    time: "09:30",
    label: "Battle of Bum La Pass",
    summary:
      "Subedar Joginder Singh and his company held off a PLA advance at the high-altitude Bum La Pass, inflicting heavy casualties before being overrun.",
    locations: [
      {
        lat: 27.73,
        lon: 91.84,
        subType: "pass",
        fatalities: 0,
        injuries: 0,
        note: "Casualty figures disputed; Singh was posthumously awarded the Param Vir Chakra."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Bum_La_Pass"]
  },
  {
    id: "62_d17_walong",
    warId: "sino-indian-1962",
    domain: "ground",
    subType: "counterattack",
    day: 17,
    date: "1962-11-05",
    time: "10:00",
    label: "Battle of Walong begins",
    summary:
      "Indian troops launched a rare counterattack at Walong in eastern NEFA, temporarily pushing back Chinese forces before being overwhelmed.",
    locations: [
      {
        lat: 28.17,
        lon: 97.00,
        subType: "valley",
        fatalities: 111,
        injuries: 90
      }
    ],
    fatalities: 111,
    injuries: 90,
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Walong"]
  },
  {
    id: "62_d24_rezangla",
    warId: "sino-indian-1962",
    domain: "ground",
    subType: "last-stand",
    day: 24,
    date: "1962-11-18",
    time: "04:35",
    label: "Battle of Rezang La",
    summary:
      "Charlie Company of 13 Kumaon made a final stand against overwhelming PLA numbers on a high mountain pass in Ladakh.",
    locations: [
      {
        lat: 33.41,
        lon: 78.55,
        subType: "pass",
        fatalities: 114,
        injuries: 6
      }
    ],
    fatalities: 114,
    injuries: 6,
    sources: [
      "https://en.wikipedia.org/wiki/Battle_of_Rezang_La",
      "https://en.wikipedia.org/wiki/Rezang_La"
    ]
  },
  {
    id: "62_d33_ceasefire",
    warId: "sino-indian-1962",
    domain: "multi",
    subType: "ceasefire",
    day: 33,
    date: "1962-11-21",
    time: "00:00",
    label: "China declares unilateral ceasefire",
    summary:
      "China announced a unilateral ceasefire and withdrew troops from the NEFA and Aksai Chin sectors.",
    locations: [
      {
        lat: 34.00,
        lon: 78.00,
        subType: "ceasefire-line",
        fatalities: 0,
        injuries: 0,
        note: "Approximate central sector coordinate."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Sino-Indian_War"]
  }
];

// Non-day-specific image gallery
warOps_1962.images = [
  "https://c8.alamy.com/comp/2YRYJKD/rifle-toting-indian-soldiers-on-patrol-during-the-brief-bloody-1962-sino-indian-border-war-2YRYJKD.jpg",
  "https://i.redd.it/nicc10oibn551.jpg",
  "https://www.geographicus.com/mm5/graphics/00000001/L/SinoIndianWar-pekingreview-1962-image2.jpg",
  "https://i0.wp.com/china-underground.com/wp-content/uploads/2020/06/china-india-war-images-053.jpg?fit=855%2C700&ssl=1"
];

export default warOps_1962;
