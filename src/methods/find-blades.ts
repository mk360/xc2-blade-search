import Blade from "../interfaces/blade";
import SearchCriteria from "../types/search-criteria";
import MatchedBlade from "../interfaces/matched-blade";
import FieldSkillName from "../types/field-skill-name";

/**
 * Returns Blades that match search criteria and a maximum party size from the provided Blades collection.
 * @param blades Array of `Blade`. The example dataset or a user-defined collection can be passed.
 * @param searchCriteria A configuration object that defines the `Blade` criteria for a certain mission.
 * @param maxPartySize The size a team cannot exceed. Final size may be lower, but cannot be higher.
 * @returns An Array of `MatchedBlade`. A `MatchedBlade` contains a `Blade`'s data, plus a field to tell how many criteria
 * that blade matched.
 */
function findBlades(blades: Blade[], searchCriteria: SearchCriteria, maxPartySize: number): MatchedBlade[] {
    let candidates: MatchedBlade[] = [];
    const { fieldSkills, ...iterableCriteria } = searchCriteria;

    for (let blade of blades) {
        let matches = 0;

        for (let availableCriterion in iterableCriteria) {
            const castCriterion = availableCriterion as keyof typeof iterableCriteria;
            if (searchCriteria[castCriterion].searched === blade[castCriterion]) {
                matches++;
            }
        }

        if (fieldSkills) {
            for (let skillName in fieldSkills) {
                const castSkill = skillName as FieldSkillName;
                const requiredSkill = fieldSkills[castSkill];
                const matchingSkill = blade.fieldSkills.find(({ name }) => name === castSkill);

                if (matchingSkill?.level >= requiredSkill.level) {
                    matches++;
                }
            }
        }

        if (matches) {
            candidates.push({ ...blade, matches });
        }
    }

    candidates = candidates.sort((blade1, blade2) => blade2.matches - blade1.matches).splice(0, maxPartySize);

    const results: MatchedBlade[] = [];

    for (let candidate of candidates) {
        let isFinalChoice = false;

        if (searchCriteria.element?.searched === candidate.element && Math.floor(searchCriteria.element.number)) {
            searchCriteria.element.number--;
            isFinalChoice = true;
        }

        if (searchCriteria.gender?.searched === candidate.gender && Math.floor(searchCriteria.gender.number)) {
            searchCriteria.gender.number--;
            isFinalChoice = true;
        }

        if (searchCriteria.species?.searched === candidate.species && Math.floor(searchCriteria.species.number)) {
            searchCriteria.species.number--;
            isFinalChoice = true;
        }

        if (searchCriteria.weapon?.searched === candidate.weapon && Math.floor(searchCriteria.weapon.number)) {
            searchCriteria.weapon.number--;
            isFinalChoice = true;
        }

        if (fieldSkills) {
            for (let skillName in fieldSkills) {
                const castSkill = skillName as FieldSkillName;
                const requiredSkill = fieldSkills[castSkill];
                const matchingSkill = candidate.fieldSkills.find(({ name }) => name === castSkill);

                if (matchingSkill?.level >= requiredSkill.level && Math.floor(requiredSkill.number)) {
                    fieldSkills[castSkill].number--;
                    isFinalChoice = true;
                }
            }
        }

        if (isFinalChoice) {
            results.push(candidate);
        }
    }

    return results;
};

export default findBlades;
