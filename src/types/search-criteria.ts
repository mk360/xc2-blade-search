import Blade from "../interfaces/blade";
import FieldSkillName from "./field-skill-name";
import Searchable from "./searchable";

/**
 * Search Criterias to pass to the `findBlades` method. Payload differs if searching for Field Skills or other properties.
 * - Accepts one of `Searchable`'s values as keys.
 * - `Searchable`s should in turn be objects containing a `value` property and a `number` property.
 */
type SearchCriteria = {
    [criterion in Searchable]?: {
        /**
         * Filter value (ex. 'Fire' if looking for a Fire-Element `Blade`)
         */
        searched: Blade[criterion];
        /**
         * Number of `Blade`s that should match the criterion provided in the `value` property. Will be turned into an integer (ex. 2 will look for 2 `Blade` matching the provided `value`).
         */
        number: number;
    };
} & {
    fieldSkills?: {
        [fieldSkill in FieldSkillName]?: {
            level: number;
            number: number;
        };
    };
};

export default SearchCriteria;
