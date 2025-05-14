// war_1999_kargil.js

export const warOps_1999 = [
  {
    id: "99_d1_shepherds_alert",
    warId: "kargil",
    domain: "ground",
    subType: "patrol-discovery",
    day: 1,
    date: "1999-05-03",
    time: "10:00",
    label: "Infiltration reported by shepherds",
    summary:
      "Local shepherds in the Batalik and Kargil sectors reported suspicious movement; Indian Army patrols confirmed intrusion.",
    locations: [
      {
        lat: 34.5500,
        lon: 76.1300,
        subType: "ridge",
        fatalities: 0,
        injuries: 0,
        note: "Beginning of Operation Vijay."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Kargil_War"]
  },
  {
    id: "99_d6_patrol_killed",
    warId: "kargil",
    domain: "ground",
    subType: "ambush",
    day: 6,
    date: "1999-05-06",
    time: "07:00",
    label: "Patrol led by Capt. Saurabh Kalia ambushed",
    summary:
      "Capt. Saurabh Kalia and five soldiers were captured during a patrol in the Kaksar sector and later killed in captivity.",
    locations: [
      {
        lat: 34.5700,
        lon: 76.2000,
        subType: "patrol-zone",
        fatalities: 6,
        injuries: 0,
        note: "Widely condemned as a war crime."
      }
    ],
    fatalities: 6,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Kargil_War"]
  },
  {
    id: "99_d24_tololing",
    warId: "kargil",
    domain: "ground",
    subType: "peak-assault",
    day: 24,
    date: "1999-06-20",
    time: "02:30",
    label: "Tololing captured by Indian Army",
    summary:
      "2 Rajputana Rifles captured Tololing peak after fierce combat, opening the Dras sector for further operations.",
    locations: [
      {
        lat: 34.3000,
        lon: 75.2800,
        subType: "peak",
        fatalities: 23,
        injuries: 48,
        note: "Crucial morale boost after weeks of heavy casualties."
      }
    ],
    fatalities: 23,
    injuries: 48,
    sources: ["https://en.wikipedia.org/wiki/Kargil_War"]
  },
  {
    id: "99_d38_point_5140",
    warId: "kargil",
    domain: "ground",
    subType: "peak-assault",
    day: 38,
    date: "1999-07-02",
    time: "03:00",
    label: "Point 5140 captured",
    summary:
      "13 JAK Rifles under Capt. Vikram Batra captured Point 5140 with the iconic war cry 'Yeh Dil Maange More'.",
    locations: [
      {
        lat: 34.3800,
        lon: 75.4200,
        subType: "peak",
        fatalities: 12,
        injuries: 18,
        note: "Key tactical height overlooking National Highway 1D."
      }
    ],
    fatalities: 12,
    injuries: 18,
    sources: ["https://en.wikipedia.org/wiki/Kargil_War"]
  },
  {
    id: "99_d47_batra_martyrdom",
    warId: "kargil",
    domain: "ground",
    subType: "hand-to-hand",
    day: 47,
    date: "1999-07-11",
    time: "05:15",
    label: "Capt. Vikram Batra martyred during Point 4875 assault",
    summary:
      "Capt. Batra was killed while rescuing an injured soldier during the capture of Point 4875 in Mushkoh Valley.",
    locations: [
      {
        lat: 34.4700,
        lon: 75.5600,
        subType: "ridge",
        fatalities: 17,
        injuries: 30,
        note: "Posthumously awarded Param Vir Chakra."
      }
    ],
    fatalities: 17,
    injuries: 30,
    sources: ["https://en.wikipedia.org/wiki/Vikram_Batra"]
  },
  {
    id: "99_d55_victory",
    warId: "kargil",
    domain: "ground",
    subType: "complete-eviction",
    day: 55,
    date: "1999-07-26",
    time: "12:00",
    label: "Vijay Diwas – Kargil War ends",
    summary:
      "Indian Army announced clearance of all Pakistani intrusions; Prime Minister declared victory in Parliament.",
    locations: [
      {
        lat: 34.5200,
        lon: 75.9600,
        subType: "district",
        fatalities: 0,
        injuries: 0,
        note: "527 Indian soldiers martyred; 700+ Pakistani soldiers killed."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Kargil_War"]
  }
];

// Non-day-specific image gallery
warOps_1999.images = [
  "https://s3.scoopwhoop.com/anj/kargil/29440891.jpg",
  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/07/26/709688-638418-kargil-010218.jpg",
  "https://newsroompost.com/wp-content/uploads/2022/07/BeFunky-collage-5-1.jpg",
  "https://mediaindia.eu/wp-content/uploads/2019/07/Kargil1.jpg"
];

export default warOps_1999;
