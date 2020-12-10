// all attacks, moves, abilities have a colldown
// build: can build,
// dig: can harvest gold from mountains
// research: can unlock unit upgrades
// charge: attack bonus if initiating attack,
// retreat: can withdraw from battle-lock
// skirmish: can also move to any square adjacent to an adjacent ally.
// trample: overkill is assigned to adjacent enemies, if any.
// escort: may only move to space adjacent to allies.
const unitBuilder = ({
  name,
  icon,
  css = "standard",
  attack = 1,
  defense = 0,
  speed = 1,
  range = 1,
  cap = 50,
  cooldown = 2.5,
  abilities = [],
}) => {
  if (!name || !icon) throw Error("Unit is missing a name or icon");
  return {
    name,
    icon,
    css,
    attack,
    defense,
    speed,
    range,
    cap,
    cooldown,
    abilities,
  };
};
export const units = {
  c: unitBuilder({
    name: "conscript",
    icon: "🗡️",
    css: "dagger",
    defense: 1,
    abilities: ["labor", "miner", "soldier"],
  }),
  l: unitBuilder({
    name: "laborer",
    icon: "🛠️",
    css: "standard",
    attack: 1,
    defense: 0,
    speed: 1,
    cap: 50,
    abilities: ["build", "conscript"],
  }),
  m: unitBuilder({
    name: "miner",
    icon: "⛏️",
    css: "standard",
    attack: 1,
    defense: 0,
    speed: 1,
    cap: 50,
    abilities: ["dig", "conscript", "alchemist"],
  }),
  a: unitBuilder({
    name: "alchemist",
    icon: "⚗️",
    css: "standard",
    attack: 1,
    defense: 0,
    speed: 1,
    cap: 50,
    abilities: ["research", "miner"],
  }),
  s: unitBuilder({
    name: "soldier",
    icon: "🛡️",
    css: "standard",
    attack: 1,
    defense: 2,
    speed: 0,
    cap: 50,
    abilities: ["bowman", "rider"],
  }),
  r: unitBuilder({
    name: "rider",
    icon: "🐎",
    css: "standard",
    attack: 2,
    defense: 2,
    speed: 3,
    cap: 36,
    abilities: ["charge", "retreat", "soldier"],
  }),
  e: unitBuilder({
    name: "war-elephant",
    icon: "🐘",
    css: "standard",
    attack: 4,
    defense: 6,
    speed: 1,
    cap: 24,
    abilities: ["charge", "trample", "rider"],
  }),
  b: unitBuilder({
    name: "bowman",
    icon: "🏹",
    css: "standard",
    attack: 1,
    defense: 1,
    range: 2,
    speed: 1,
    cap: 50,
    abilities: ["soldier", "retreat", "skirmish"],
  }),
  t: unitBuilder({
    name: "trebuchet",
    icon: "☄️",
    css: "standard",
    attack: 4,
    defense: 1,
    range: 4,
    speed: 1,
    cap: 12,
    abilities: ["trample", "escort", "bowman"],
  }),
};
const mapBuilder = () => (size) => {
  let features = ["⛰️", "⛰️", "⛰️", "⛰️", "🌲", "🌲", "🌳", "🌳", "🌲", "🌲"];
  let d = Number(size);
  let indices = [
    (d) => d - 1,
    (d) => d ** 2 - d,
    (d) => d * 2,
    (d) => d ** 2 - d * 2 - 1,
    (d) => Math.floor(d / 2 - 1),
    (d) => d ** 2 - Math.floor(d / 2 + 1),
    (d) => Math.floor(d * 2.5),
    (d) => d ** 2 - Math.floor(d * 2.5),
    (d) => Math.floor(d * 4 - 1),
    (d) => d ** 2 - Math.floor(d * 4),
  ];
  return indices
    .map((f) => f(d))
    .reduce((acc, cur, i) => {
      acc[cur] = features[i];
      return acc;
    }, {});
};
// const mapData = [
//     {type: '⛰️', pos: d => d - 1},
//     {type: '⛰️', pos: d => d**2 - d -1},
//     {type: '⛰️', pos: d => d*2},
//     {type: '⛰️', pos: d => d**2 - d*2},
//     {type: '🌲', pos: d => Math.floor(d/2)},
//     {type: '🌲', pos: d => d**2 - Math.floor(d/2)},
//     {type: '🌳', pos: d => Math.floor(d*2.5)},
//     {type: '🌳', pos: d => d**2 - Math.floor(d*2.5)},
//     {type: '🌳', pos: d => d**2 - Math.floor(d*2.5)},
//     {type: '🌲', pos: d => Math.floor(d*3)},
//     {type: '🌲', pos: d => d**2 - Math.floor(d*3)},
// ]
export const resources = mapBuilder();

export const places = {
  stable: "🏟️",
  university: "🏛️",
  house: "🏠",
  castle: "🏰",
  mine: "⛰️",
  construction: "🏗️",
  crops: "🌾",
  crops2: "🌱",
  pasture: "🐑",
  forest: "🌳",
};
