import SearchCriteria from "../types/search-criteria";

/**
 * Example Criteria. Will look for `Blade`s that:
 * - Have a Greataxe (at least 2) as their `BladeWeapon`
 * - Have `Earth` as their `BladeElement` (at least 1, might not have a Greataxe)
 * - Have `Fire Mastery` as one of their `FieldSkill`s. Might not have a Greataxe, and will not have Earth as their Element.
 */
const ExampleCriteria: SearchCriteria = {
    weapon: {
        searched: 'Greataxe',
        number: 2,
    },
    element: {
        searched: 'Earth',
        number: 1,
    },
    fieldSkills: {
        'Fire Mastery': {
            level: 1,
            number: 1,
        },
    },
};

export default ExampleCriteria;
