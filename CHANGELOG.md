# 1.8.0

## Minor
- Remove italics from JSON keys.
- Colorize JSON key-value separators
- Complete overhaul of Yaml lang to better align with JSON highlighting.
- `this`, `var`, `const`, `let`, etc.. text formatting removed.
- Various reserved words (e.g. `class`, `interface`, `type`, etc..) color switched to be uniform with other reserved words.
- Add highlighting for import aliases in JS and friends.
- Improve background color for selected symbols.
    - Read access => cyan
    - Write access => green

## Patch
- Adjust `currentFindMatchHighlight` so that it doesn't completely mask comments. HT: @nguyenhuumy (#11)
- Fix highlighting for variable constants (i.e. variables in all caps in JS).
- Fix highlighting for JS string interpolation.
- Fix miscolor of quoted object literal keys in JS and friends.

## Chore
- Add test files for a handful of popular languages

## Notes

The goal of the next several upcoming updates is to improve the uniformity of semantic highlighting between languages. I find it personally disorienting when using one language that has cyan as the color for types and then switch to another where it is green. The experience should be seamless across all languages.

I've [opened an issue on github](https://github.com/dracula/visual-studio-code/issues/12) for this process. Your feedback is welcomed and encouraged!

# 1.7.0

## Minor 
- Remove italics from JS & friends arrow functions to play nicer with fonts using custom ligatures (e.g. FiraCode). HT: @joaoevangelista
- Improve syntax for object destructuring assignment with renaming in JS and friends.

## Patch
- Fix miscolored decorators.
- Fix template string syntax in JS (previously only applied to TS).

Feedback, suggestions, comments appreciated.

# 1.6.1

- Fix highlighting for numbers (`constant.numeric.decimal`).
- Fix hex color highlighting for CSS and friends.

# 1.6.0

- Change Maintainers
- Add Markdown Syntax.
- Add better support for TypeScript.
- Add base language fallbacks to better support esoteric languages.
- Fix version conflicts (had to bump 2 `minor` versions)

Please feel free to request changes or leave feedback.