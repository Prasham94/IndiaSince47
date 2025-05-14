// war_1971_bangladeshLiberation.js

export const warOps_1971 = [
  {
    id: "71_d1_chengizkhan",
    warId: "indo-pak-1971",
    domain: "air",
    subType: "pre-emptive-strike",
    day: 1,
    date: "1971-12-03",
    time: "17:45",
    label: "Operation Chengiz Khan – Pakistani airstrikes",
    summary:
      "Pakistan launched pre-emptive air raids on 11 Indian airfields in the Western sector including Pathankot, Amritsar, and Agra.",
    locations: [
      {
        lat: 31.64,
        lon: 74.87,
        subType: "airbase",
        fatalities: 5,
        injuries: 15,
        note: "IAF responded within hours; limited damage reported."
      }
    ],
    fatalities: 5,
    injuries: 15,
    sources: ["https://en.wikipedia.org/wiki/Operation_Chengiz_Khan"]
  },
  {
    id: "71_d2_east_push",
    warId: "indo-pak-1971",
    domain: "ground",
    subType: "multi-front-advance",
    day: 2,
    date: "1971-12-04",
    time: "08:00",
    label: "Indian Army advances into East Pakistan",
    summary:
      "Indian forces launched simultaneous thrusts from Tripura, Assam and West Bengal into East Pakistan, targeting key communication hubs.",
    locations: [
      {
        lat: 24.1346,
        lon: 91.9996,
        subType: "region",
        fatalities: 12,
        injuries: 40,
        note: "Rapid initial gains with minimal resistance."
      }
    ],
    fatalities: 12,
    injuries: 40,
    sources: ["https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1971"]
  },
  {
    id: "71_d3_navy_trident",
    warId: "indo-pak-1971",
    domain: "naval",
    subType: "missile-boat-strike",
    day: 3,
    date: "1971-12-04",
    time: "22:30",
    label: "Operation Trident – Strike on Karachi Harbour",
    summary:
      "Indian Navy's missile boats attacked and sank Pakistani ships near Karachi and set oil tanks ablaze, in a landmark naval victory.",
    locations: [
      {
        lat: 24.81,
        lon: 66.98,
        subType: "harbour",
        fatalities: 500,
        injuries: 700,
        note: "PNS Khyber and other ships destroyed; heavy losses."
      }
    ],
    fatalities: 500,
    injuries: 700,
    sources: ["https://en.wikipedia.org/wiki/Operation_Trident_(1971)"]
  },
  {
    id: "71_d6_tangail_drop",
    warId: "indo-pak-1971",
    domain: "air",
    subType: "paratroop-drop",
    day: 6,
    date: "1971-12-11",
    time: "09:30",
    label: "Tangail Airdrop – Indian paratroopers land near Dhaka",
    summary:
      "Indians executed a heli-borne paratroop operation behind enemy lines at Tangail, cutting off retreat routes to Dhaka.",
    locations: [
      {
        lat: 24.25,
        lon: 89.92,
        subType: "airdrop-zone",
        fatalities: 24,
        injuries: 65,
        note: "Critical turning point in Dhaka siege."
      }
    ],
    fatalities: 24,
    injuries: 65,
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Tangail"]
  },
  {
    id: "71_d9_dhaka_encircled",
    warId: "indo-pak-1971",
    domain: "ground",
    subType: "siege",
    day: 9,
    date: "1971-12-14",
    time: "15:00",
    label: "Dhaka encircled – Indian troops at the gates",
    summary:
      "Indian forces and Mukti Bahini surrounded Dhaka from all directions; shelling began on key military installations.",
    locations: [
      {
        lat: 23.81,
        lon: 90.41,
        subType: "city",
        fatalities: 70,
        injuries: 200,
        note: "Pakistani command broke into disarray."
      }
    ],
    fatalities: 70,
    injuries: 200,
    sources: ["https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1971"]
  },
  {
    id: "71_d10_surrender",
    warId: "indo-pak-1971",
    domain: "ground",
    subType: "capitulation",
    day: 10,
    date: "1971-12-16",
    time: "16:31",
    label: "Pakistani Eastern Command surrenders",
    summary:
      "Lt Gen A. A. K. Niazi of Pakistan signed the Instrument of Surrender before Lt Gen Jagjit Singh Aurora at Ramna Race Course, ending the war.",
    locations: [
      {
        lat: 23.73,
        lon: 90.39,
        subType: "parade-ground",
        fatalities: 0,
        injuries: 0,
        note: "93,000 Pakistani troops surrendered; Bangladesh born."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Instrument_of_Surrender_(1971)"]
  }
];

// Non-day-specific image gallery
warOps_1971.images = [
  "https://images.indianexpress.com/2021/12/Bangladesh-50-1.jpg",
  "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/23/Pictures/conflict-between-india-birth-bangladesh-west-pakistan_8860b5c6-0fde-11e7-be49-55692bf38950.jpg",
  "https://preview.redd.it/ss47z58j51k21.jpg?auto=webp&s=5d624abbe885e6cf5bee861972bee50e4b30e25a",
  "https://tse2.mm.bing.net/th?id=OIP.47XY0dJ_djtZKtxAw1ODiAHaGs&pid=Api"
];

export default warOps_1971;
