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
        attack: 1,
        defense: 1,
        speed: 1,
        cap: 50,
        abilities: ['labor', 'miner', 'soldier']
    },
    l: {
        name: 'laborer',
        icon: '🛠️',
        css: 'standard',
        attack: 1,
        defense: 0,
        speed: 1,
        cap: 50,
        abilities: ['build', 'conscript']
    },
    m: {
        name: 'miner',
        icon: '⛏️',
        css: 'standard',
        attack: 1,
        defense: 0,
        speed: 1,
        cap: 50,
        abilities: ['dig', 'conscript', 'alchemist']
    },
    a: {
        name: 'alchemist',
        icon: '⚗️',
        css: 'standard',
        attack: 1,
        defense: 0,
        speed: 1,
        cap: 50,
        abilities: ['research', 'miner']
    },
    s: {
        name: 'soldier',
        icon: '🛡️',
        css: 'standard',
        attack: 1,
        defense: 2,
        speed: 0,
        cap: 50,
        abilities: ['bowman', 'rider']
    },
    r: {
        name: 'rider',
        icon: '🐎',
        css: 'standard',
        attack: 2,
        defense: 2,
        speed: 3,
        cap: 36,
        abilities: ['charge', 'retreat', 'soldier']
    },
    e: {
        name: 'war-elephant',
        icon: '🐘',
        css: 'standard',
        attack: 4,
        defense: 6,
        speed: 1,
        cap: 24,
        abilities: ['charge', 'trample', 'rider']
    },
    b: {
        name: 'bowman',
        icon: '🏹',
        css: 'standard',
        attack: 1,
        defense: 1,
        range: 2,
        speed: 1,
        cap: 50,
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
        cap: 12,
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