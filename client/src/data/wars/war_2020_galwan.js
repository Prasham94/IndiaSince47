// war_2020_galwan.js

export const warOps_2020 = [
  {
    id: "20_d1_chinese_movement_detected",
    warId: "ladakh-standoff",
    domain: "ground",
    subType: "border-incursion",
    day: 1,
    date: "2020-04-15",
    time: "06:00",
    label: "Chinese troops detected near Pangong Tso",
    summary:
      "Indian patrols observed Chinese PLA troop movement and construction activity along Finger 4–8 area of Pangong Tso lake.",
    locations: [
      {
        lat: 33.7683,
        lon: 78.6188,
        subType: "lakefront",
        fatalities: 0,
        injuries: 0,
        note: "Trigger point of Eastern Ladakh standoff."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2020%E2%80%932021_China%E2%80%93India_skirmishes"]
  },
  {
    id: "20_d2_multiple_standoff_points",
    warId: "ladakh-standoff",
    domain: "ground",
    subType: "multi-front-standoff",
    day: 2,
    date: "2020-05-05",
    time: "10:00",
    label: "Face-offs reported at Galwan, Hot Springs & Pangong",
    summary:
      "Tensions escalated as PLA established tents and posts at multiple friction points, blocking Indian patrols.",
    locations: [
      {
        lat: 34.5039,
        lon: 78.2600,
        subType: "valley",
        fatalities: 0,
        injuries: 11,
        note: "Minor skirmishes occurred between both sides."
      }
    ],
    fatalities: 0,
    injuries: 11,
    sources: ["https://en.wikipedia.org/wiki/2020%E2%80%932021_China%E2%80%93India_skirmishes"]
  },
  {
    id: "20_d62_galwan_clash",
    warId: "ladakh-standoff",
    domain: "ground",
    subType: "hand-to-hand-clash",
    day: 62,
    date: "2020-06-15",
    time: "23:00",
    label: "Deadly clash at Galwan Valley",
    summary:
      "Indian and Chinese troops engaged in a violent hand-to-hand battle in Galwan Valley, leading to the deaths of 20 Indian and at least 4 Chinese soldiers.",
    locations: [
      {
        lat: 34.7417,
        lon: 78.1836,
        subType: "patrolling-point",
        fatalities: 24,
        injuries: 76,
        note: "First fatalities in India-China border conflict in 45 years."
      }
    ],
    fatalities: 24,
    injuries: 76,
    sources: ["https://en.wikipedia.org/wiki/2020%E2%80%932021_China%E2%80%93India_skirmishes"]
  },
  {
    id: "20_d90_diplomatic_engagement",
    warId: "ladakh-standoff",
    domain: "multi",
    subType: "ceasefire-talks",
    day: 90,
    date: "2020-07-13",
    time: "17:00",
    label: "Military-level talks and disengagement begin",
    summary:
      "India and China held Corps Commander-level talks; temporary disengagement initiated in Galwan and Hot Springs sectors.",
    locations: [
      {
        lat: 34.7400,
        lon: 78.2000,
        subType: "engagement-zone",
        fatalities: 0,
        injuries: 0,
        note: "Disengagement was partial and frequently violated."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2020%E2%80%932021_China%E2%80%93India_skirmishes"]
  },
  {
    id: "21_d300_disengagement_fingers",
    warId: "ladakh-standoff",
    domain: "ground",
    subType: "mutual-disengagement",
    day: 300,
    date: "2021-02-11",
    time: "10:00",
    label: "Mutual disengagement at Pangong Tso",
    summary:
      "Both armies agreed to withdraw tanks and troops from north and south banks of Pangong Tso. Restoration of pre-April 2020 positions initiated.",
    locations: [
      {
        lat: 33.7695,
        lon: 78.6180,
        subType: "lakefront",
        fatalities: 0,
        injuries: 0,
        note: "Viewed as a breakthrough after a prolonged standoff."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2020%E2%80%932021_China%E2%80%93India_skirmishes"]
  }
];

// Non-day-specific image gallery
warOps_2020.images = [
  "https://ichef.bbci.co.uk/news/1024/branded_news/154AE/production/_112941278_gettyimages-1220444788.jpg",
  "https://ichef.bbci.co.uk/news/624/cpsprodpb/0EB4/production/_112946730_kashmir_military_clash_x2_640-nc.png",
  "https://i.redd.it/2x2dfgav53y71.jpg",
  "https://tse3.mm.bing.net/th?id=OIP.dEpSsVWp8K_n0ICdMRVu7AHaEJ&pid=Api"
];

export default warOps_2020;
