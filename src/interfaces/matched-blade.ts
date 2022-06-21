import Blade from "./blade";

/**
 * A `MatchedBlade` is simply a `Blade` with a number of `matches` property added to it.
 */
interface MatchedBlade extends Blade {
    /**
     * Number of search criterias this `Blade` matched.
     */
    matches: number;
}

export default MatchedBlade;
