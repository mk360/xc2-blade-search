import Blade from "../interfaces/blade";

/**
 * Example Blades dataset for quick runs.
 */
const ExampleBlades: Blade[] = [{
    name: 'Midori',
    species: 'humanoid',
    element: 'Fire',
    fieldSkills: [
        { name: 'Fire Mastery', level: 1 },
        { name: 'Ichthyology', level: 1 },
        { name: 'Expeditionist', level: 1 }
    ],
    gender: 'female',
    weapon: 'Bitball',
}, {
    name: 'Godfrey',
    species: 'humanoid',
    element: 'Ice',
    fieldSkills: [
        { name: 'Kind Soul', level: 1 },
        { name: 'Passionate Soul', level: 3 },
        { name: 'Justice-Loving Soul', level: 2 }
    ],
    weapon: 'Shield Hammer',
    gender: 'male',
}, {
    name: 'Roc',
    species: 'humanoid',
    element: 'Wind',
    weapon: 'Dual Scythes',
    gender: 'male',
    fieldSkills: [
        { name: 'Miasma Dispersal', level: 1, },
        { name: 'Wind Mastery', level: 1 },
        { name: 'Lockpicking', level: 1 }
    ],
},
{
    name: 'Agate',
    species: 'humanoid',
    element: 'Earth',
    gender: 'female',
    weapon: 'Greataxe',
    fieldSkills: [
        { name: 'Mineralogy', level: 1 },
        { name: 'Keen Eye', level: 1 }
    ],
},
{
    name: 'Gorg',
    gender: 'male',
    weapon: 'Greataxe',
    element: 'Water',
    fieldSkills: [
        { name: 'Fortitude', level: 1 },
        { name: 'Keen Eye', level: 1 }
    ],
    species: 'humanoid',
}, {
    name: 'Rinnia',
    gender: 'female',
    element: 'Fire',
    weapon: 'Shield Hammer',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Fire Mastery', level: 1 }
    ],
},
{
    name: 'Perun',
    element: 'Ice',
    gender: 'female',
    weapon: 'Megalance',
    fieldSkills: [
        { name: 'Ice Mastery', level: 1 },
        { name: 'Ancient Wisdom', level: 1 },
        { name: 'Chivalry', level: 1 }
    ],
    species: 'humanoid',
},
{
    name: 'Floren',
    element: 'Earth',
    weapon: 'Bitball',
    fieldSkills: [
        { name: 'Botany', level: 1 },
        { name: 'Earth Mastery', level: 1 },
        { name: 'Beguiling Charm', level: 1 }
    ],
    species: 'humanoid',
    gender: 'male',
},
{
    name: 'Kirim',
    gender: 'male',
    element: 'Wind',
    weapon: 'Ether Cannon',
    fieldSkills: [
        { name: 'Wind Mastery', level: 1 }
    ],
    species: 'humanoid',
},
{
    name: 'Kojiro',
    gender: 'male',
    element: 'Water',
    weapon: 'Shield Hammer',
    fieldSkills: [
        { name: 'Water Mastery', level: 1 },
        { name: 'Mineralogy', level: 1 }
    ],
    species: 'humanoid',
},
{
    name: 'Shichisei',
    species: 'humanoid',
    element: 'Darkness',
    weapon: 'Ether Cannon',
    fieldSkills: [
        { name: 'Dark Mastery', level: 1 },
        { name: 'Entomology', level: 1 }
    ],
    gender: 'male',
},
{
    name: 'Misaki',
    species: 'humanoid',
    weapon: 'Knuckle Claws',
    element: 'Earth',
    fieldSkills: [
        { name: 'Earth Mastery', level: 1 },
        { name: 'Ichthyology', level: 1 },
        { name: 'Salvaging Mastery', level: 1 }
    ],
    gender: 'female',
},
{
    name: 'Orochi',
    gender: 'male',
    weapon: 'Ether Cannon',
    element: 'Electric',
    fieldSkills: [
        { name: 'Electric Mastery', level: 1 },
        { name: 'Entomology', level: 1 },
        { name: 'Production Mastery', level: 1 }
    ],
    species: 'humanoid',
},
{
    name: 'Hasu',
    gender: 'female',
    fieldSkills: [
        { name: 'Earth Mastery', level: 1 }
    ],
    weapon: 'Knuckle Claws',
    element: 'Earth',
    species: 'humanoid',
},
{
    name: 'Tenku',
    gender: 'male',
    element: 'Ice',
    weapon: 'Bitball',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Ice Mastery', level: 1 },
        { name: 'Botany', level: 1 }
    ],
},
{
    name: 'Shura',
    gender: 'male',
    species: 'humanoid',
    element: 'Wind',
    weapon: 'Ether Cannon',
    fieldSkills: [
        { name: 'Wind Mastery', level: 2 },
        { name: 'Transport Mastery', level: 2 }
    ]
},
{
    name: 'Hei',
    gender: 'male',
    element: 'Electric',
    species: 'humanoid',
    weapon: 'Bitball',
    fieldSkills: [
        { name: 'Electric Mastery', level: 1 },
        { name: 'Salvaging Mastery', level: 1 },
        { name: 'Mineralogy', level: 1 }
    ]
},
{
    name: 'Hagan',
    gender: 'male',
    element: 'Darkness',
    weapon: 'Bitball',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Dark Mastery', level: 1 },
        { name: 'Botany', level: 1 }
    ]
},
{
    name: 'Himawari',
    gender: 'female',
    element: 'Electric',
    weapon: 'Shield Hammer',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Electric Mastery', level: 1 }
    ]
},
{
    name: 'Lin',
    gender: 'female',
    weapon: 'Greataxe',
    element: 'Earth',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Earth Mastery', level: 1 },
        { name: 'Entomology', level: 1 },
        { name: 'Botany', level: 1 }
    ]
},
{
    name: 'Harusa',
    element: 'Wind',
    weapon: 'Bitball',
    gender: 'female',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Wind Mastery', level: 1 }
    ]
},
{
    name: 'Shigura',
    element: 'Darkness',
    weapon: 'Greataxe',
    gender: 'female',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Dark Mastery', level: 1 }
    ]
},
{
    name: 'Goro',
    element: 'Fire',
    weapon: 'Twin Rings',
    species: 'animal',
    gender: 'male',
    fieldSkills: [
        { name: 'Fire Mastery', level: 1 }
    ]
},
{
    name: 'Mika',
    element: 'Wind',
    species: 'humanoid',
    gender: 'female',
    weapon: 'Bitball',
    fieldSkills: [
        { name: 'Wind Mastery', level: 1 },
        { name: 'Forestry', level: 1 }
    ]
},
{
    name: 'Hatsuyuki',
    element: 'Wind',
    gender: 'female',
    weapon: 'Knuckle Claws',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Wind Mastery', level: 1 },
        { name: 'Mineralogy', level: 1 }
    ]
},
{
    name: 'Hukut',
    element: 'Wind',
    weapon: 'Chroma Katana',
    gender: 'male',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Transport Mastery', level: 1 },
        { name: 'Wind Mastery', level: 1 }
    ]
},
{
    name: 'Tadar',
    element: 'Wind',
    weapon: 'Megalance',
    gender: 'male',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Wind Mastery', level: 1 }
    ]
},
{
    name: 'Sohaya',
    element: 'Fire',
    weapon: 'Shield Hammer',
    gender: 'male',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Fire Mastery', level: 1 }
    ]
},
{
    name: 'Kuzan',
    element: 'Wind',
    weapon: 'Knuckle Claws',
    species: 'humanoid',
    gender: 'male',
    fieldSkills: [
        { name: 'Wind Mastery', level: 3 }
    ]
},
{
    name: 'Gokuto',
    element: 'Earth',
    weapon: 'Megalance',
    species: 'humanoid',
    gender: 'male',
    fieldSkills: [
        { name: 'Earth Mastery', level: 1 },
        { name: 'Mineralogy', level: 1 }
    ]
},
{
    name: 'Mizuchi',
    element: 'Fire',
    weapon: 'Bitball',
    species: 'humanoid',
    gender: 'male',
    fieldSkills: [
        { name: 'Fire Mastery', level: 1 },
        { name: 'Entomology', level: 1 },
        { name: 'Mineralogy', level: 1 }
    ],
},
{
    name: 'Ai',
    gender: 'female',
    species: 'humanoid',
    weapon: 'Megalance',
    element: 'Wind',
    fieldSkills: [
        { name: 'Wind Mastery', level: 1 }
    ],
},
{
    name: 'Sazami',
    gender: 'female',
    weapon: 'Knuckle Claws',
    element: 'Earth',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Earth Mastery', level: 1 }
    ],
},
{
    name: 'Kouru',
    gender: 'male',
    weapon: 'Chroma Katana',
    element: 'Ice',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Ice Mastery', level: 1 }
    ],
},
{
    name: 'Kibitsu',
    gender: 'male',
    weapon: 'Shield Hammer',
    element: 'Fire',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Fire Mastery', level: 1 },
        { name: 'Salvaging Mastery', level: 1 }
    ],
},
{
    name: 'Ichiku',
    gender: 'female',
    weapon: 'Ether Cannon',
    element: 'Earth',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Earth Mastery', level: 1 },
        { name: 'Production Mastery', level: 1 },
        { name: 'Entomology', level: 1 }
    ],
},
{
    name: 'Kanehira',
    gender: 'male',
    weapon: 'Megalance',
    element: 'Electric',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Electric Mastery', level: 1 }
    ],
},
{
    name: 'Hiden',
    gender: 'male',
    weapon: 'Megalance',
    element: 'Water',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Water Mastery', level: 1 },
        { name: 'Mineralogy', level: 1 }
    ],
},
{
    name: 'Tsurugi',
    gender: 'male',
    weapon: 'Megalance',
    element: 'Wind',
    species: 'humanoid',
    fieldSkills: [
        { name: 'Wind Mastery', level: 1 }
    ],
},
{
    name: 'Meikyo',
    gender: 'male',
    element: 'Electric',
    species: 'humanoid',
    weapon: 'Knuckle Claws',
    fieldSkills: [
        { name: 'Electric Mastery', level: 1 },
        { name: 'Expeditionist', level: 1 }
    ],
},
{
    name: 'Suzuran',
    gender: 'female',
    element: 'Fire',
    weapon: 'Knuckle Claws',
    fieldSkills: [
        { name: 'Fire Mastery', level: 1 }
    ],
    species: 'humanoid',
}
];

export default ExampleBlades;
