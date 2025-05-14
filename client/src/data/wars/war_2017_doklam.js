// war_2017_doklam.js

export const warOps_2017 = [
  {
    id: "17_d1_incursion_detected",
    warId: "doklam-2017",
    domain: "ground",
    subType: "border-incursion",
    day: 1,
    date: "2017-06-16",
    time: "10:00",
    label: "Chinese troops begin road construction in Doklam",
    summary:
      "PLA construction teams entered Doklam plateau and began extending a road southward, violating the Bhutanese claim line and security arrangements with India.",
    locations: [
      {
        lat: 27.3080,
        lon: 89.0875,
        subType: "plateau",
        fatalities: 0,
        injuries: 0,
        note: "Doklam is a tri-junction area between India, Bhutan, and China."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2017_China%E2%80%93India_border_standoff"]
  },
  {
    id: "17_d2_india_intervenes",
    warId: "doklam-2017",
    domain: "ground",
    subType: "deployment",
    day: 2,
    date: "2017-06-18",
    time: "06:00",
    label: "Indian troops cross into Doklam to stop PLA road-building",
    summary:
      "Indian Army personnel moved into Doklam to halt Chinese road construction, leading to a military face-off. Both sides established tents and forward observation posts.",
    locations: [
      {
        lat: 27.3140,
        lon: 89.0805,
        subType: "stand-off-zone",
        fatalities: 0,
        injuries: 0,
        note: "Face-off lasted over two months without exchange of fire."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2017_China%E2%80%93India_border_standoff"]
  },
  {
    id: "17_d20_buildup",
    warId: "doklam-2017",
    domain: "ground",
    subType: "force-buildup",
    day: 20,
    date: "2017-07-05",
    time: "00:00",
    label: "Troop buildup continues on both sides",
    summary:
      "India deployed over 270 troops in defensive posture while China moved in construction units and forward observation patrols.",
    locations: [
      {
        lat: 27.3195,
        lon: 89.0920,
        subType: "ridge",
        fatalities: 0,
        injuries: 0,
        note: "Military diplomacy initiated through Bhutanese mediation."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2017_China%E2%80%93India_border_standoff"]
  },
  {
    id: "17_d50_warnings",
    warId: "doklam-2017",
    domain: "multi",
    subType: "verbal-escalation",
    day: 50,
    date: "2017-08-05",
    time: "12:00",
    label: "China issues public warnings",
    summary:
      "Chinese state media issued strong warnings to India to withdraw, stating consequences of escalation, while Indian media called for diplomatic resolution.",
    locations: [
      {
        lat: 27.3100,
        lon: 89.0830,
        subType: "forward-post",
        fatalities: 0,
        injuries: 0,
        note: "Public posturing peaked during this period."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2017_China%E2%80%93India_border_standoff"]
  },
  {
    id: "17_d73_disengagement",
    warId: "doklam-2017",
    domain: "multi",
    subType: "stand-down",
    day: 73,
    date: "2017-08-28",
    time: "08:00",
    label: "Both sides withdraw from standoff positions",
    summary:
      "India and China agreed to mutually disengage from Doklam; troops stepped back and road-building halted.",
    locations: [
      {
        lat: 27.3085,
        lon: 89.0844,
        subType: "disengagement-zone",
        fatalities: 0,
        injuries: 0,
        note: "No casualties; standoff resolved diplomatically without armed conflict."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2017_China%E2%80%93India_border_standoff"]
  }
];

// Non-day-specific image gallery
warOps_2017.images = [
  "https://www.spsnavalforces.com/experts-speak/images/Doklam-map.jpg",
  "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/07/indian-soldiers-china-border-650x400-81498504474-1499595655.jpg",
  "https://images.indianexpress.com/2017/07/doklam-7591.jpg",
  "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/08/indianarmy-1502465876.jpg"
];

export default warOps_2017;
