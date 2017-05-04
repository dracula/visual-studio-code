# 1.13.1

## Patch
- Fix magic variable highlighting in python. (e.g. `__name__`)

# 1.13.0

## Minor
- Add highlighting for HTML entities. (HT: @ajitid)

# 1.12.0

## Minor
- Add highlighting for escape characters. (HT: @ajitid)

# 1.11.1

## Patch
- Adjust TextMate scopes for strings so that VSCode "Expand Select" function works properly. Closes #24 (HT: @ajitid)

# 1.11.0

## Minor
- Adjust tab colors to make active/inactive tabs more identifiable.
- Darken the status bar to match the tab bar.

Thanks @DanielRamosAcosta for the contribution!

# 1.10.0

## Patch
- Fix status bar background color when there's no folder selected. Closes #20 (HT: @23doors)

**Note:** Published as a minor bump by mistake. Should have been patch.

# 1.9.1

## Patch
- Fix peekview colorization.
- Fix debug panel background color. Closes #19 (HT: @23doors)
- Add contrast to the Activity Bar. (HT: @rajasimon)
- Adjust find match highlight to be differentiable from selection. Closes #18 (HT: @nguyenhuumy)
- Adjust active/inactive tab colors.
- Add requirement for VSCode engine `^1.11.0` in package.json

# 1.9.0

## Minor
- Early experimental support for custom UI theming. (Feedback appreciated).
- Add basic support for GraphQL. (Requires `GraphQL for VSCode` extension).

## Patch
- **PHP**: Fix double quoted variable highlighting for `${variablename}` and `{$variablename}` forms.
- **PHP**: Fix color of language constants.

**Note:** UI changes are very preliminary and partially incomplete. This will be improved when the API stabilizes and gets documented.

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