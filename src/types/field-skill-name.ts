import FieldSkills from "../constants/field-skills";

/**
 * An individual Field Skill name, the `Array` of which is assembled in the importable `FieldSkills` constant.
 */
type FieldSkillName = (typeof FieldSkills)[number];

export default FieldSkillName;
