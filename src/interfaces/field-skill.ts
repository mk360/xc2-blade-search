import FieldSkillName from "../types/field-skill-name";

/**
 * A Field Skill a `Blade` can learn. Contains a `name` and an optional `level`.
 */
interface FieldSkill {
    /**
     * Field Skill level. An integer between 1 and 5 inclusive.
     */
    level?: 1 | 2 | 3 | 4 | 5;
    /**
     * Field Skill name. Values limited by the provided Field Skills constant.
     */
    name: FieldSkillName;
}

export default FieldSkill;
