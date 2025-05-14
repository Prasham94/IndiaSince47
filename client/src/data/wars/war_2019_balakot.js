// war_2019_balakot.js

export const warOps_2019 = [
  {
    id: "19_d1_balakot_strike",
    warId: "balakot-2019",
    domain: "air",
    subType: "deep-strike",
    day: 1,
    date: "2019-02-26",
    time: "03:45",
    label: "IAF airstrike on Balakot terrorist camp",
    summary:
      "IAF Mirage-2000 jets crossed the LoC and struck a JeM training facility in Balakot, deep inside Pakistani territory. India claimed high militant casualties.",
    locations: [
      {
        lat: 34.5360,
        lon: 73.3680,
        subType: "camp",
        fatalities: null,
        injuries: null,
        note: "Pakistan denied major damage; India asserted significant terrorist losses."
      }
    ],
    fatalities: null,
    injuries: null,
    sources: ["https://en.wikipedia.org/wiki/2019_Balakot_airstrike"]
  },
  {
    id: "19_d2_dogfight",
    warId: "balakot-2019",
    domain: "air",
    subType: "aerial-engagement",
    day: 2,
    date: "2019-02-27",
    time: "10:15",
    label: "Aerial dogfight over Nowshera–Rajouri sector",
    summary:
      "PAF launched a retaliatory airstrike. An IAF MiG-21 Bison, piloted by Wing Commander Abhinandan Varthaman, shot down a PAF F-16 but was also downed and captured in PoK.",
    locations: [
      {
        lat: 33.8224,
        lon: 74.0911,
        subType: "aerial-zone",
        fatalities: 0,
        injuries: 1,
        note: "Abhinandan's MiG crashed in PoK; he was taken captive by Pakistan."
      }
    ],
    fatalities: 0,
    injuries: 1,
    sources: ["https://en.wikipedia.org/wiki/2019_India%E2%80%93Pakistan_standoff"]
  },
  {
    id: "19_d3_pilot_returned",
    warId: "balakot-2019",
    domain: "multi",
    subType: "diplomatic-release",
    day: 3,
    date: "2019-03-01",
    time: "17:20",
    label: "Wing Commander Abhinandan released",
    summary:
      "Pakistan released Wing Commander Abhinandan as a 'peace gesture' amid international pressure. He returned through the Wagah-Attari border.",
    locations: [
      {
        lat: 31.6119,
        lon: 74.8570,
        subType: "border-crossing",
        fatalities: 0,
        injuries: 0,
        note: "Event defused tensions between the two nations."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2019_India%E2%80%93Pakistan_standoff"]
  }
];

// Non-day-specific image gallery
warOps_2019.images = [
  "https://www.oneindia.com/img/1200x80/2019/02/air-strike-1551242276.jpg",
  "https://english.iswnews.com/wp-content/uploads/2019/10/Muzafar-abad.jpg",
  "https://static.india.com/wp-content/uploads/2023/02/Air-force.jpg",
  "https://gumlet.assettype.com/nationalherald/2019-03/60812af7-5fad-43d5-864a-bbb25cfd7ef0/Mig_21_vs_F_16.jpg?auto=format%2Ccompress&enlarge=true&ogImage=true&rect=0%2C29%2C784%2C412&w=1200"
];

export default warOps_2019;
