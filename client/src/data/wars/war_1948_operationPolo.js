// war_1948_operationPolo.js

export const warOps_1948 = [
  {
    id: "48_d1_entry",
    warId: "operation-polo",
    domain: "ground",
    subType: "annexation",
    day: 1,
    date: "1948-09-13",
    time: "04:00",
    label: "Operation Polo begins",
    summary:
      "Indian Army columns under Maj Gen J.N. Chaudhuri crossed into Hyderabad State at Sholapur to compel the Nizam’s accession.",
    locations: [
      {
        lat: 17.66,
        lon: 75.91,
        subType: "border-entry",
        fatalities: 2,
        injuries: 5,
        note: "Initial skirmishes with Razakar irregulars at the border."
      }
    ],
    fatalities: 2,
    injuries: 5,
    sources: ["https://en.wikipedia.org/wiki/Annexation_of_Hyderabad"]
  },
  {
    id: "48_d3_osmanabad",
    warId: "operation-polo",
    domain: "ground",
    subType: "town-capture",
    day: 3,
    date: "1948-09-15",
    time: "12:00",
    label: "Osmanabad falls",
    summary:
      "Indian infantry secured Osmanabad, severing one of Hyderabad’s main supply routes.",
    locations: [
      {
        lat: 18.17,
        lon: 76.03,
        subType: "town",
        fatalities: 0,
        injuries: 0
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Annexation_of_Hyderabad"]
  },
  {
    id: "48_d4_secunderabad",
    warId: "operation-polo",
    domain: "ground",
    subType: "encirclement",
    day: 4,
    date: "1948-09-16",
    time: "18:00",
    label: "Secunderabad encircled",
    summary:
      "Indian forces encircled the twin cities of Hyderabad–Secunderabad; Razakar resistance began to crumble.",
    locations: [
      {
        lat: 17.44,
        lon: 78.50,
        subType: "city",
        fatalities: 0,
        injuries: 0
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Annexation_of_Hyderabad"]
  },
  {
    id: "48_d5_surrender",
    warId: "operation-polo",
    domain: "ground",
    subType: "surrender",
    day: 5,
    date: "1948-09-17",
    time: "16:00",
    label: "Nizam signs Instrument of Accession",
    summary:
      "Mir Osman Ali Khan signed the Instrument of Accession at King Kothi Palace, formally ending hostilities.",
    locations: [
      {
        lat: 17.42,
        lon: 78.47,
        subType: "palace",
        fatalities: 32,
        injuries: 97,
        note: "Total Indian casualties."
      }
    ],
    fatalities: 32,
    injuries: 97,
    sources: ["https://en.wikipedia.org/wiki/Annexation_of_Hyderabad"]
  }
];

// Non-day-wise image gallery
warOps_1948.images = [
  "https://cdn.siasat.com/wp-content/uploads/2022/09/Hyderabad-state-map.jpg",
  "https://maktoobmedia.com/wp-content/uploads/2021/09/Hyderabad_state_from_the_Imperial_Gazetteer_of_India_1909.jpg",
  "https://cdn.siasat.com/wp-content/uploads/2022/09/Operation-Polo_1.jpg",
  "https://1.bp.blogspot.com/-f_sWuy9ls_0/UT3s7wjF1RI/AAAAAAAADe0/-dLkA0jdgu8/s1600/operation-polo-hyderabad-police-action-1948-photos%2B%2815%29.jpg"
];

export default warOps_1948;
