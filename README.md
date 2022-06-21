# Xenoblade 2 Merc Missions Blades Search

## Overview

This is a tool to find the lowest number of Blades needed to accomplish a provided Merc Mission given a set of defined criteria. Each Merc Mission has a specific set of preferred criteria (Blade Element, gender, certain Field Skills at a certain level) which help your chosen Blades accomplish their missions.

## Criteria

You can search for Blades that have:
- A specific Element (Water, Fire, Electric, etc.).
- A specific Gender (male / female).
- A specific Weapon Type (Greataxe, Ether Cannon, Chroma Katana).
- A specific Species (animal / humanoid).
- One or many Field Skills.
- Any combination of the above.

For each Criterion, you can define a number. That number will be the number of Blades matching that criterion that need to be featured in the team: if you give the Fire Element a number of 2, that means you need 2 Fire Blades in your team, alongside other combinations.

## Usage

For quick launch, a preset Array of Blades and a Criteria configuration have been provided. Simply import them as follows:

```ts
import * as Xenoblade from 'xc2-blade-search';
// or, if you've enabled the "esModuleInterop" option in your tsconfig
import Xenoblade from 'xc2-blade-search';

const results = Xenoblade.findBlades(Xenoblade.ExampleBlades, Xenoblade.ExampleCriteria, 6);
```

And you're good.

## Package Definitions

The package contains the following methods:
- `findBlades`

The package contains the following data constants:
- `ExampleBlades` (`Blade[]`)
- `ExampleCriteria` (`SearchCriteria`)

The package contains the following types:
- `BladeSpecies`
- `BladeGender`
- `BladeWeapon`
- `BladeElement`
- `FieldSkillName`
- `SearchCriteria`

The package contains the following interfaces:
- `Blade`
- `FieldSkill`
- `MatchedBlade`

## Changelog
- v1.0.0: initial version.