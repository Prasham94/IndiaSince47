// war_1967_nathuChoLa.js

export const warOps_1967 = [
  {
    id: "67_d1_nathula",
    warId: "nathula-cho-la",
    domain: "ground",
    subType: "border-clash",
    day: 1,
    date: "1967-09-11",
    time: "07:00",
    label: "Nathu La fencing sparks PLA fire",
    summary:
      "Indian troops began laying wire along the border at Nathu La. PLA troops opened fire with machine guns and mortars, escalating into a full-scale firefight.",
    locations: [
      {
        lat: 27.4000,
        lon: 88.8800,
        subType: "pass",
        fatalities: 62,
        injuries: 145,
        note: "Casualties occurred on both sides over three days of fighting."
      }
    ],
    fatalities: 62,
    injuries: 145,
    sources: ["https://en.wikipedia.org/wiki/Nathu_La_and_Cho_La_clashes"]
  },
  {
    id: "67_d3_artillery",
    warId: "nathula-cho-la",
    domain: "ground",
    subType: "artillery-duel",
    day: 3,
    date: "1967-09-13",
    time: "08:30",
    label: "Indian artillery silences PLA positions",
    summary:
      "Indian Army brought in heavy artillery to retaliate; PLA bunkers and mortar positions were destroyed after 2 days of shelling.",
    locations: [
      {
        lat: 27.4050,
        lon: 88.8700,
        subType: "ridge",
        fatalities: 143,
        injuries: 230,
        note: "Estimated 143 Chinese fatalities reported."
      }
    ],
    fatalities: 143,
    injuries: 230,
    sources: ["https://en.wikipedia.org/wiki/Nathu_La_and_Cho_La_clashes"]
  },
  {
    id: "67_d17_chola",
    warId: "nathula-cho-la",
    domain: "ground",
    subType: "infantry-engagement",
    day: 17,
    date: "1967-10-01",
    time: "06:15",
    label: "Cho La clash breaks out",
    summary:
      "PLA troops intruded into Indian territory at Cho La ridge; Indian forces mounted a counter-attack, forcing a withdrawal within 72 hours.",
    locations: [
      {
        lat: 27.3833,
        lon: 88.9783,
        subType: "ridge",
        fatalities: 88,
        injuries: 163,
        note: "Chinese suffered heavy casualties; Indian side held ground."
      }
    ],
    fatalities: 88,
    injuries: 163,
    sources: ["https://en.wikipedia.org/wiki/Nathu_La_and_Cho_La_clashes"]
  },
  {
    id: "67_d20_standoff_ends",
    warId: "nathula-cho-la",
    domain: "multi",
    subType: "disengagement",
    day: 20,
    date: "1967-10-04",
    time: "10:00",
    label: "Chinese troops withdraw from Cho La",
    summary:
      "PLA units withdrew from the Cho La ridge after diplomatic talks and Indian military pressure; standoff officially ended.",
    locations: [
      {
        lat: 27.3800,
        lon: 88.9700,
        subType: "border-zone",
        fatalities: 0,
        injuries: 0,
        note: "Border calm restored; no further skirmishes in this sector."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Nathu_La_and_Cho_La_clashes"]
  }
];

// Non-day-specific images
warOps_1967.images = [
  "https://tse1.mm.bing.net/th?id=OIP.CHEFbaH2O1tVtMrN0h3nUAHaE-&pid=Api",
  "https://imrmedia.in/wp-content/uploads/2020/06/07-The-Nathu-La-Skirmish-1967-01-1.jpg",
  "https://images.firstpost.com/uploads/2023/09/NL-1-1.jpg?im=FitAndFill%3D%281200%2C675%29",
  "https://medalsandribbons.com/wp-content/uploads/2023/09/Screenshot-2023-09-22-at-5.11.28-PM.png"
];

export default warOps_1967;
