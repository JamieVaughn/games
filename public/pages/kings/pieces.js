// all attacks, moves, abilities have a colldown
// build: can build, 
// dig: can harvest gold from mountains
// research: can unlock unit upgrades
// charge: attack bonus if initiating attack, 
// retreat: can withdraw from battle-lock
// skirmish: can also move to any square adjacent to an adjacent ally.
// trample: overkill is assigned to adjacent enemies, if any. 
// escort: may only move to space adjacent to allies.
export const units = {
    c: {
        name: 'conscript',
        icon: '🗡️',
        css: 'dagger',
        abilities: ['labor', 'miner', 'soldier'],
        attack: 1,
        defense: 1,
        speed: 1
    },
    l: {
        name: 'laborer',
        icon: '🛠️',
        css: 'standard',
        attack: 1,
        defense: 0,
        speed: 1,
        abilities: ['build', 'conscript']
    },
    m: {
        name: 'miner',
        icon: '⛏️',
        css: 'standard',
        attack: 1,
        defense: 0,
        speed: 1,
        abilities: ['dig', 'conscript', 'alchemist']
    },
    a: {
        name: 'alchemist',
        icon: '⚗️',
        css: 'standard',
        attack: 1,
        defense: 0,
        speed: 1,
        abilities: ['research', 'miner']
    },
    s: {
        name: 'soldier',
        icon: '🛡️',
        css: 'standard',
        attack: 1,
        defense: 2,
        speed: 0,
        abilities: ['bowman', 'cavalry']
    },
    r: {
        name: 'rider',
        icon: '🐎',
        css: 'standard',
        attack: 2,
        defense: 2,
        speed: 3,
        abilities: ['charge', 'retreat', 'soldier']
    },
    e: {
        name: 'war-elephant',
        icon: '🐘',
        css: 'standard',
        attack: 4,
        defense: 6,
        speed: 1,
        abilities: ['charge', 'trample', 'cavalry']
    },
    b: {
        name: 'bowman',
        icon: '🏹',
        css: 'standard',
        attack: 1,
        defense: 1,
        range: 2,
        speed: 1,
        abilities: ['soldier', 'retreat', 'skirmish']
    },
    t: {
        name: 'trebuchet',
        icon: '☄️',
        css: 'standard',
        attack: 4,
        defense: 1,
        range: 4,
        speed: 1,
        abilities: ['trample', 'escort', 'bowman']
    }
}
export const places = {
    stable: '🏟️',
    university: '🏛️',
    house: '🏠',
    castle: '🏰',
    mine: '⛰️', 
    construction: '🏗️',
    crops: '🌾',
    crops2: '🌱',
    pasture: '🐑',
    forest: '🌳'
}