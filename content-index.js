// content-index.js
// Single source of truth for cross-project topic browsing.
// Add one entry per notable section as you build each project page out.
// `url` should point to `page.html#some-id` — make sure that id actually
// exists on the corresponding <section> in that page.

const CONTENT_INDEX = [
  {
    title: "Open-loop gimbal control with derivative damping",
    project: "Quadcopter Payload",
    tags: ["control-systems", "electronics"],
    url: "Multirotor UAV group project.html#gimbal-control"
  },
  {
    title: "Complementary filtering for IMU drift",
    project: "Quadcopter Payload",
    tags: ["control-systems", "electronics", "filtering"],
    url: "Multirotor UAV group project.html#filtering"
  },
  {
    title: "ArduPilot flight computer / FBW setup",
    project: "Fixed-Wing UAV",
    tags: ["control-systems", "aero"],
    url: "uav-build.html#flight-computer"
  },
  {
    title: "PID-controlled 2-axis camera gimbal",
    project: "2-Axis Camera Gimbal",
    tags: ["control-systems", "electronics"],
    url: "gimbal.html#pid-control"
  },
  {
    title: "Wing CFD and stall delay via low aspect ratio",
    project: "Fixed-Wing UAV",
    tags: ["aero", "cfd"],
    url: "uav-build.html#cfd"
  },
  {
    title: "Leg design and drop test",
    project: "Starworks",
    tags: ["manufacture", "structures"],
    url: "starworks.html#leg-design"
  }

  // Add more entries here as you flesh out each project page, e.g.:
  // {
  //   title: "Short descriptive name of the section",
  //   project: "Which project this belongs to",
  //   tags: ["control-systems", "electronics"],   // any topics that apply
  //   url: "projectfile.html#matching-section-id"
  // },
];
