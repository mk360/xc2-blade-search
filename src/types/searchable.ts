import Blade from '../interfaces/blade';

/**
 * `Blade` properties with only one value, thus easily iterable and filterable
 */
type Searchable = Exclude<keyof Blade, 'name' | 'fieldSkills'>;

export default Searchable;
