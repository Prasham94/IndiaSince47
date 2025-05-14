// war_2016_surgicalStrikes.js

export const warOps_2016 = [
  {
    id: "16_d1_uri_attack",
    warId: "surgical-strikes-2016",
    domain: "ground",
    subType: "terror-trigger",
    day: 1,
    date: "2016-09-18",
    time: "05:30",
    label: "Terror attack on Indian Army base in Uri",
    summary:
      "Four heavily armed terrorists attacked an Indian Army camp near Uri, killing 19 soldiers. This led to nationwide outrage and planning of retaliatory action.",
    locations: [
      {
        lat: 34.0748,
        lon: 74.0511,
        subType: "military-camp",
        fatalities: 19,
        injuries: 30,
        note: "One of the deadliest terror attacks on Indian forces in a decade."
      }
    ],
    fatalities: 19,
    injuries: 30,
    sources: ["https://en.wikipedia.org/wiki/2016_Uri_attack"]
  },
  {
    id: "16_d11_surgical_strikes",
    warId: "surgical-strikes-2016",
    domain: "ground",
    subType: "cross-loc-raid",
    day: 11,
    date: "2016-09-29",
    time: "00:30",
    label: "India conducts surgical strikes across LoC",
    summary:
      "Indian Para SF commandos crossed the Line of Control and destroyed seven terrorist launch pads in Pakistan-occupied Kashmir.",
    locations: [
      {
        lat: 34.1500,
        lon: 73.9800,
        subType: "launch-pad",
        fatalities: 38,
        injuries: 0,
        note: "Operation lasted 4 hours; first-ever publicly acknowledged cross-border raid by India."
      }
    ],
    fatalities: 38,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2016_Indian_Line_of_Control_strike"]
  },
  {
    id: "16_d12_media_briefing",
    warId: "surgical-strikes-2016",
    domain: "multi",
    subType: "declaration",
    day: 12,
    date: "2016-09-29",
    time: "12:00",
    label: "DGMO confirms strikes in official briefing",
    summary:
      "Director General of Military Operations (DGMO) Lt. Gen. Ranbir Singh publicly confirmed the operation and its objectives during a press conference.",
    locations: [
      {
        lat: 28.6144,
        lon: 77.1996,
        subType: "press-conference",
        fatalities: 0,
        injuries: 0,
        note: "Strikes marked a new strategic shift in Indian response to terror."
      }
    ],
    fatalities: 0,
    injuries: 0,
    sources: ["https://en.wikipedia.org/wiki/2016_Indian_Line_of_Control_strike"]
  }
];

// Non-day-specific image gallery
warOps_2016.images = [
  "https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2016September/infographic_093016082119.jpg",
  "https://feeds.abplive.com/onecms/images/uploaded-images/2022/09/29/518060eaf147d6bab754b6a50fe9bf261664440541629379_original.jpg",
  "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/06/28/Pictures/_bc815be0-7aa3-11e8-8d5f-3f0c905295d2.jpg",
  "https://images.indianexpress.com/2016/10/use.jpg"
];

export default warOps_2016;
