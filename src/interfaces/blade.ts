import BladeElement from "../types/blade-element";
import BladeSpecies from "../types/blade-species";
import BladeGender from "../types/blade-gender";
import BladeWeapon from "../types/blade-weapon";
import FieldSkill from "./field-skill";

/**
 * A Blade's Data Model.
 */
interface Blade {
    /**
     * A `Blade`'s name. An arbitrary string can be passed.
     */
    name: string;
    /**
     * A `Blade`'s elemental type (Fire, Wind, Ice, etc.). Represented in the `BladeElement` union type.
     */
    element: BladeElement;
    /**
     * A `FieldSkill` Array. A `Blade` can learn many `FieldSkill`s.
     */
    fieldSkills: FieldSkill[];
    /**
     * A `Blade`'s gender. Represented in the `BladeGender` union type.
     */
    gender: BladeGender;
    /**
     * A `Blade`'s species. Represented in the `BladeSpecies` union type.
     */
    species: BladeSpecies;
    /**
     * A `Blade`'s equipped Weapon. Represented in the `BladeWeapon` union type.
     */
    weapon: BladeWeapon;
}

export default Blade;
