// war_1984_bluestar.js

export const warOps_1984 = [
  {
    id: "84_d1_artillery",
    warId: "blue-star",
    domain: "ground",
    subType: "encirclement",
    day: 1,
    date: "1984-06-01",
    time: "08:00",
    label: "Army surrounds Golden Temple",
    summary:
      "Punjab Police and Army units cordoned off the Golden Temple complex. Firing from within the shrine led to initial casualties.",
    locations: [
      {
        lat: 31.6199,
        lon: 74.8765,
        subType: "religious-complex",
        fatalities: 8,
        injuries: 24,
        note: "Initial fire exchanged from Akal Takht."
      }
    ],
    fatalities: 8,
    injuries: 24,
    sources: ["https://en.wikipedia.org/wiki/Operation_Blue_Star"]
  },
  {
    id: "84_d4_sniper_fire",
    warId: "blue-star",
    domain: "ground",
    subType: "urban-skirmish",
    day: 4,
    date: "1984-06-04",
    time: "11:00",
    label: "Militants open sniper fire",
    summary:
      "Sniper fire from within the temple complex escalated into heavier fighting; military responded with return fire and loudspeakers urging surrender.",
    locations: [
      {
        lat: 31.6202,
        lon: 74.8769,
        subType: "courtyard",
        fatalities: 22,
        injuries: 48,
        note: "Heavy civilian presence inside the complex."
      }
    ],
    fatalities: 22,
    injuries: 48,
    sources: ["https://en.wikipedia.org/wiki/Operation_Blue_Star"]
  },
  {
    id: "84_d5_storming_begins",
    warId: "blue-star",
    domain: "ground",
    subType: "temple-assault",
    day: 5,
    date: "1984-06-05",
    time: "22:30",
    label: "Army begins assault on Harmandir Sahib",
    summary:
      "Indian Army commandos began an overnight assault on the sanctum; tanks were positioned outside Akal Takht.",
    locations: [
      {
        lat: 31.6203,
        lon: 74.8772,
        subType: "sanctum",
        fatalities: 125,
        injuries: 180,
        note: "Assault continued into early morning; high casualties reported."
      }
    ],
    fatalities: 125,
    injuries: 180,
    sources: ["https://en.wikipedia.org/wiki/Operation_Blue_Star"]
  },
  {
    id: "84_d6_akal_takht_breach",
    warId: "blue-star",
    domain: "ground",
    subType: "bunker-clearance",
    day: 6,
    date: "1984-06-06",
    time: "05:00",
    label: "Akal Takht stormed",
    summary:
      "The final assault was launched against Akal Takht where militants, including Jarnail Singh Bhindranwale, were fortified. Heavy artillery used.",
    locations: [
      {
        lat: 31.6201,
        lon: 74.8771,
        subType: "religious-structure",
        fatalities: 493,
        injuries: 220,
        note: "Bhindranwale killed; structure heavily damaged."
      }
    ],
    fatalities: 493,
    injuries: 220,
    sources: ["https://en.wikipedia.org/wiki/Operation_Blue_Star"]
  },
  {
    id: "84_d10_cleanup",
    warId: "blue-star",
    domain: "ground",
    subType: "post-op-secure",
    day: 10,
    date: "1984-06-10",
    time: "12:00",
    label: "Operation ends; complex secured",
    summary:
      "Army announced full control of the complex; bodies recovered and militants apprehended or killed.",
    locations: [
      {
        lat: 31.6198,
        lon: 74.8770,
        subType: "entire-complex",
        fatalities: 0,
        injuries: 0,
        note: "Civilian toll remains disputed; curfew extended."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/Operation_Blue_Star"]
  }
];

// Non-day-specific image gallery
warOps_1984.images = [
  "https://static.toiimg.com/thumb/msid-100792024%2Cwidth-1070%2Cheight-580%2Cimgsize-111994%2Cresizemode-75%2Coverlay-toi_sw%2Cpt-32%2Cy_pad-40/photo.jpg",
  "https://sundayguardianlive.com/wp-content/uploads/2019/06/5-June-is-the-35th-anniversary-of-Operation-Blue-Star-which-involved-the-Army-storming-the-Golden-Temple-on-the-night-of-5-June-1984..jpg",
  "https://www.sikh24.com/wp-content/uploads/akal-takht-in-1984.jpg",
  "https://tse4.mm.bing.net/th?id=OIP.h8vGID_-8Lo9GaAleilkLgHaEd&pid=Api"
];

export default warOps_1984;
