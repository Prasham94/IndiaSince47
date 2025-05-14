// war_1965_indoPak.js

export const warOps_1965 = [
  {
    id: "65_d1_gibraltar",
    warId: "indo-pak-1965",
    domain: "ground",
    subType: "infiltration",
    day: 1,
    date: "1965-08-05",
    time: "00:00",
    label: "Operation Gibraltar begins",
    summary:
      "Pakistan initiates Operation Gibraltar, sending infiltrators into Jammu and Kashmir to incite insurgency against Indian rule.",
    locations: [
      {
        lat: 34.0837,
        lon: 74.7973,
        subType: "region",
        fatalities: 0,
        injuries: 0,
        note: "Infiltrators aimed to blend with local population."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1965"]
  },
  {
    id: "65_d27_hajipir",
    warId: "indo-pak-1965",
    domain: "ground",
    subType: "assault",
    day: 27,
    date: "1965-08-28",
    time: "06:00",
    label: "Capture of Haji Pir Pass",
    summary:
      "Indian forces captured the strategic Haji Pir Pass to cut off infiltration routes used by Pakistani forces.",
    locations: [
      {
        lat: 34.1000,
        lon: 74.0500,
        subType: "mountain-pass",
        fatalities: 36,
        injuries: 120,
        note: "Pass was later returned after Tashkent Agreement."
      }
    ],
    fatalities: 36,
    injuries: 120,
    sources: ["https://en.wikipedia.org/wiki/Hajipir_Pass"]
  },
  {
    id: "65_d33_grandslam",
    warId: "indo-pak-1965",
    domain: "ground",
    subType: "offensive",
    day: 33,
    date: "1965-09-01",
    time: "03:30",
    label: "Pakistan launches Operation Grand Slam",
    summary:
      "Pakistan attacked Akhnoor in Jammu aiming to sever Indian communication lines; initial gains made before being repelled.",
    locations: [
      {
        lat: 32.8667,
        lon: 74.7333,
        subType: "town",
        fatalities: 200,
        injuries: 500,
        note: "Operation failed to achieve strategic objectives."
      }
    ],
    fatalities: 200,
    injuries: 500,
    sources: ["https://en.wikipedia.org/wiki/Operation_Grand_Slam_(1965)"]
  },
  {
    id: "65_d38_lahore",
    warId: "indo-pak-1965",
    domain: "ground",
    subType: "offensive",
    day: 38,
    date: "1965-09-06",
    time: "06:00",
    label: "India crosses international border towards Lahore",
    summary:
      "Indian Army crossed the border and advanced towards Lahore, capturing key positions before halting advance.",
    locations: [
      {
        lat: 31.5497,
        lon: 74.3436,
        subType: "city",
        fatalities: 300,
        injuries: 1000,
        note: "Advance halted to avoid escalation."
      }
    ],
    fatalities: 300,
    injuries: 1000,
    sources: ["https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1965"]
  },
  {
    id: "65_d39_dwarka",
    warId: "indo-pak-1965",
    domain: "naval",
    subType: "bombardment",
    day: 39,
    date: "1965-09-07",
    time: "22:30",
    label: "Pakistan Navy shells Dwarka",
    summary:
      "Pakistani naval vessels bombarded the coastal town of Dwarka aiming to disable radar installations.",
    locations: [
      {
        lat: 22.2394,
        lon: 68.9678,
        subType: "town",
        fatalities: 0,
        injuries: 0,
        note: "Minor damage reported; no casualties."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Operation_Dwarka"]
  },
  {
    id: "65_d45_dograi",
    warId: "indo-pak-1965",
    domain: "ground",
    subType: "battle",
    day: 45,
    date: "1965-09-21",
    time: "04:00",
    label: "Battle of Dograi",
    summary:
      "Indian forces recaptured Dograi village near Lahore after intense fighting, just before the ceasefire.",
    locations: [
      {
        lat: 31.6100,
        lon: 74.5000,
        subType: "village",
        fatalities: 220,
        injuries: 600,
        note: "Significant casualties on both sides."
      }
    ],
    fatalities: 220,
    injuries: 600,
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Dograi"]
  },
  {
    id: "65_d47_ceasefire",
    warId: "indo-pak-1965",
    domain: "multi",
    subType: "ceasefire",
    day: 47,
    date: "1965-09-23",
    time: "00:00",
    label: "UN-mandated ceasefire takes effect",
    summary:
      "A ceasefire brokered by the United Nations came into effect, ending active hostilities between India and Pakistan.",
    locations: [
      {
        lat: 30.0000,
        lon: 70.0000,
        subType: "region",
        fatalities: 0,
        injuries: 0,
        note: "Ceasefire followed by the Tashkent Agreement in January 1966."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Tashkent_Agreement"]
  }
];

// Image gallery (non-day-specific)
warOps_1965.images = [
  "https://www.newsr.in/en/knowledge/Indo-Pakistani-War-of-_20191014.jpg",
  "https://static.toiimg.com/photo/65400203.cms?imgsize=710268",
  "https://photogallery.indiatimes.com/photo/49010085.cms",
  "https://i.imgur.com/sJpvH4w.jpg"
];

export default warOps_1965;
