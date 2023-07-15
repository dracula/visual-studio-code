# Changelog

## 2.24.3

### Patch

- Fix highlight color for inline chat region for copilot. #238

## 2.24.2

### Patch

- Fix incorrect javascript destructuring colors in certain conditions. #203
- Correctly highlight PHP semicolons when php expression is inside string. #208
- Fix issue preventing folded regions from receiving any highlight colors. #210

## 2.24.1

### Patch

- Fix incorrect colors in `log` syntax. (#200)

## 2.24.0

### Minor

- add support for bracket pair highlighting. (#195)

## 2.23.1

### Fix

- [python]: Only apply function highlighting for functions that are actually defined. (#186)


## 2.23.0

### Feat

- Add secondary button styles. (closes #176)

### Fix

- Remove preset contrast borders. (closes #120, #147)
- Improve contrast of "open a remote window" button. (closes #146)

## 2.22.4

### Fix

- Address broken style property in html filetypes. #177

## 2.22.3

### Fix

- Fix another small issue impacting the build of the soft theme. #165

## 2.22.2

### Patch

- fix: address issue of black cursor in ipynb file for soft variant #124
- chore: add `$schema` property to theme's json output

## 2.22.1

### Patch

- Fix small bug that caused hover color to be black for directories in the terminal (#156).

## 2.22.0

### Minor

- enable semantic highlighting.
- update screenshot.

**NOTE:** This is probably going to be somewhat buggy in certain situations. We can address those bugs as they come up. Feel free to open issues for these.

Keep in mind, the source of truth for "correctness" should come from https://spec.draculatheme.com

## 2.21.0

### Minor

- make breadcrumb color match active tab color (#138)
- improve rendered whitespace color. (#135)

## 2.20.0

### Minor

- support new `editor.foldBackground` highlight group.

## 2.19.2

### Patch

- noop update to fix screenshot in readme.

## 2.19.1

### Patch

- noop update to fix screenshot in readme.

## 2.19.0

### Minor

- Add activitybar colors. #121

### Patch

- Fix cursor color in `ipynb` files. #124

## 2.18.1

### Patch

- Fix class keyword highlighting in babel syntax. #118

Thanks @black-black-cat for your contribution!

## 2.18.0

### Minor

- Add support for `statusBarItem.remoteBackground` (currently available in insiders) #105

## 2.17.0

### Minor

- Adjust JSDoc-style comments to align with specification.

### Patch

- Fix python docstring highlighting.

## 2.16.0

### Minor

- Implement colors for new `List Filter Widget` scopes. (#95).

## 2.15.0

### Minor

- Themeing for the following areas added/modified:
    - `sideBarSectionHeader`
    - `snippetTabStop`, `snippetFinalTabStop`

### Patch

- Fix incorrect highlighting for variable names in JavaScript (and friends) in the body of default-exported classes/functions/etc. (#88, #82)

## 2.14.1

### Patch

- Fix the incorrect syntax highlighting of "pseudo-constants" in `tsx` files. #84


## 2.14.0

### Minor

- Add theme support to 2 new UI scopes added in VSCode `v1.27`


## 2.13.0

### Minor

- Add basic styling to the new settings window.
- Add styling to the new breadcrumbs UI elements. #85

### Fix

- Fix the incorrect syntax highlighting of javascript/typescript "pseudo-constants" (a change that recently was added to the syntaxes). #84


## 2.12.1

### Patch

- Fix color of editor rulers to match indent guides. #79

Thanks @gabbes for your contribution!

## 2.12.0

### Minor

- Improve integrated terminal ANSI colors.

## 2.11.0

### Minor

- Change git modified color from `Orange` to `Cyan` (rationale: less jarring on the eyes).
- Change warning color from `Yellow` to `Orange` (rationale: more jarring on the eyes).

### Patch

- Fix warning color decorations in the explorer. #77

## 2.10.0

- Add support for new highlighted indent guides. #74

Thanks @smt923 for your contribution!

## 2.9.0

### Minor

- Implement improved ANSI colors for integrated terminal. #66

Thanks @teddybradford for your contribution!

## 2.8.1

### Patch

- Fix small syntax highlighting issues in PHP.

## 2.8.0

### Minor

- Fix missing syntax highlighting of markdown code block backticks.
- Fix missing syntax highlighting for decorator objects in JS & TS.
- Fix incorrect highlighting for braces/punctuation inside template strings in JS & TS.

### Patch

- Fix overpowering opaque orange color of `editor.findMatchBackground`.

## 2.7.0

### Minor

- Improve highlighting for `invalid` and `invalid.deprecated` scopes.
- Italicize html attribute names so that Operator Mono font users can have their fancy pseudo-cursive. #62

### Patch

- Fix incorrectly colored type annotation separators in Python.

## 2.6.1

### Patch

- Fix highlighting for pragma instructions in Haskell.

## 2.6.0

### Minor

- Add support for new git status colors in the file explorer.
- Change `editorGutter.modifiedBackground` from `cyan` to `orange` to match above.

As usual, feedback welcomed and encouraged.

## 2.5.2

### Patch

- Improve terminal white contrast. #59

### Credits

Thanks @nickcernis for your contribution!

## 2.5.1

### Patch

- Fix variable interpolation operators in `Make` language
- Change codelens from `orange` to `comment` color so it's less distracting. #57

### Credits

Thanks @smt923 for your contribution!

## 2.5.0

### Minor

- Add support for improved RegExp highlighting released in VSCode `v1.17.0` (JS and TS especially)

## 2.4.2

### Patch

- Fix SCSS attribute selector string highlighting.

In other words...

```scss
input[type='text'] {}
//          ^^^^ now highlighted correctly
```

## 2.4.1

### Patch

- Fix small upstream issue causing expand selection to quotes to not work properly in JSON keys
- Fix opacity in pane drag and drop

### Credits

Thanks @ajitid for your contribution!

## 2.4.0

### Minor

- Add support for elixir's underscored vars (#53)

## 2.3.0

### Minor

- Add theme support for a few newly implemented scopes (`tab.activeBorder`, `editorOverviewRuler`, etc.)
- Change current find match highlight to orange so it stands out a tad more

### Patch

- Fix small bug that caused notification button highlight color to be bright red

## 2.2.0

### Minor

- Improve colors of info, warning, and error dialogs.
- Switch terminal background color back to default editor background color in an attempt to make contrast better.

### Patch

- Fix red default colors from appearing on insiders edition.

## 2.1.3

### Patch

- Improve `dracula-soft` theme by heavily desaturating the bright/intense colors of the theme while leaving the darker/softer colors as-is.

**Notes:** Mac users should have a better experience with this one. Feel free to leave any critiques/comments on #30 on github and we'll go from there.

## 2.1.2

### Patch

- Fix broken `OCaml` type highlighting. #44

### Credits

Huge thanks to @hackwaly for his help on this!

---

## 2.1.1

### Patch

- Fix extension install/update button color. #43

---

## 2.1.0

### Minor

- Apply dracula theme to (nearly) all the newly released UI scopes that became available in VSCode 1.13.0.
- Add support for `Haskell` and (some) other Standard ML languages.

### Patch

- `[Make]`: Fix incorrect color for prerequisites.
- `[CSS]`: Fix incorrect comma colors.

### Notes

Because highlight color of bracket matches seems to be a taste that differs broadly from person-to-person, built-in support was not added for it.

If you'd prefer your bracket matches highlighted with a noticable color, add the following to your User Settings (adjusting the colors to your own taste):

```json
{
    "workbench.colorCustomizations": {
        "editorBracketMatch.background": "#ff79c680",
        "editorBracketMatch.border": "#ff00ff"
    }
}
```

---

## 2.0.1

### Patch

- Fix curly braces for embedded JS in `.jsx` and `.tsx` files.

---

## 2.0.0

The theme has been completely overhauled in accordance to the new [Dracula Theme Specification RFC](https://github.com/dracula/dracula-theme/issues/232) that I put together.

All languages provided by VSCode as well as `GraphQL` and `TOML` were scrutinized and have been confirmed to be spec compliant with a few exceptions (see [`known_issues.md`](https://github.com/dracula/visual-studio-code/blob/master/known_issues.md) in this repo for details). (#38)

Please leave your comments in the RFC issue thread if you have any suggestions.

### Minor

- Add UI color for `statusBarItem.prominentBackground` and `statusBarItem.prominentHoverBackground`. (#42)

---

## 1.17.1

### Patch

- Change variable-setting keywords (e.g. `var`, `const`, etc.) to pink color to match other reserved language words.
- Fix color of parameterless decorators.

---

## 1.17.0

### Minor

- Apply theme to notification panel. #35
- Apply theme to buttons.

### Patch

- Make colorization of python raw string literals more consistent. #36
- Switch from yellow to green for current highlight match to improve contrast over purple tokens. #33

### Chore

- Add contributing guidelines.

---

## 1.16.0

### Minor

- Add `Dracula Soft` theme variant (beta - comments/critiques welcomed). #30

### Patch

- Lighten ANSI `color0` and `color8` so that they're more legible in the terminal. #32

---

## 1.15.1

### Patch

- Fix dropdown colors.
- Revert button colors to system default.
- Small adjustements to `findMatchHighlight` and `findRangeHighlight` in an attempt to improve contrast. #31

---

## 1.15.0

### Minor

- Switch from highlighting the entire current line to coloring only the border.

### Patch

- General overhaul/improvement of new UI scopes.

**Note:** If you prefer to have the entire current line highlighted like it was previously, you can enable it by adding the following in your User Settings:

```json
{
    "workbench.colorCustomizations": {
        "editor.lineHighlightBackground": "#44475A"
    }
}
```

---

## 1.14.0

### Minor

- Upgrade from experimental UI theme scopes (requires VSCode `v1.12.0`). #28

Thanks @Eric-Jackson for your contribution!

---

## 1.13.1

### Patch

- Fix magic variable highlighting in python. (e.g. `__name__`)

---

## 1.13.0

### Minor

- Add highlighting for HTML entities. (HT: @ajitid)

---

## 1.12.0

### Minor

- Add highlighting for escape characters. (HT: @ajitid)

---

## 1.11.1

### Patch

- Adjust TextMate scopes for strings so that VSCode "Expand Select" function works properly. Closes #24 (HT: @ajitid)

---

## 1.11.0

### Minor

- Adjust tab colors to make active/inactive tabs more identifiable.
- Darken the status bar to match the tab bar.

Thanks @DanielRamosAcosta for the contribution!

---

## 1.10.0

### Patch

- Fix status bar background color when there's no folder selected. Closes #20 (HT: @23doors)

**Note:** Published as a minor bump by mistake. Should have been patch.

---

## 1.9.1

### Patch

- Fix peekview colorization.
- Fix debug panel background color. Closes #19 (HT: @23doors)
- Add contrast to the Activity Bar. (HT: @rajasimon)
- Adjust find match highlight to be differentiable from selection. Closes #18 (HT: @nguyenhuumy)
- Adjust active/inactive tab colors.
- Add requirement for VSCode engine `^1.11.0` in package.json

---

## 1.9.0

### Minor

- Early experimental support for custom UI theming. (Feedback appreciated).
- Add basic support for GraphQL. (Requires `GraphQL for VSCode` extension).

### Patch

- **PHP**: Fix double quoted variable highlighting for `${variablename}` and `{$variablename}` forms.
- **PHP**: Fix color of language constants.

**Note:** UI changes are very preliminary and partially incomplete. This will be improved when the API stabilizes and gets documented.

---

## 1.8.0

### Minor

- Remove italics from JSON keys.
- Colorize JSON key-value separators
- Complete overhaul of Yaml lang to better align with JSON highlighting.
- `this`, `var`, `const`, `let`, etc.. text formatting removed.
- Various reserved words (e.g. `class`, `interface`, `type`, etc..) color switched to be uniform with other reserved words.
- Add highlighting for import aliases in JS and friends.
- Improve background color for selected symbols.
    - Read access => cyan
    - Write access => green

### Patch

- Adjust `currentFindMatchHighlight` so that it doesn't completely mask comments. HT: @nguyenhuumy (#11)
- Fix highlighting for variable constants (i.e. variables in all caps in JS).
- Fix highlighting for JS string interpolation.
- Fix miscolor of quoted object literal keys in JS and friends.

### Chore

- Add test files for a handful of popular languages

### Notes

The goal of the next several upcoming updates is to improve the uniformity of semantic highlighting between languages. I find it personally disorienting when using one language that has cyan as the color for types and then switch to another where it is green. The experience should be seamless across all languages.

I've [opened an issue on github](https://github.com/dracula/visual-studio-code/issues/12) for this process. Your feedback is welcomed and encouraged!

---

## 1.7.0

### Minor

- Remove italics from JS & friends arrow functions to play nicer with fonts using custom ligatures (e.g. FiraCode). HT: @joaoevangelista
- Improve syntax for object destructuring assignment with renaming in JS and friends.

### Patch

- Fix miscolored decorators.
- Fix template string syntax in JS (previously only applied to TS).

Feedback, suggestions, comments appreciated.

---

## 1.6.1

- Fix highlighting for numbers (`constant.numeric.decimal`).
- Fix hex color highlighting for CSS and friends.

---

## 1.6.0

- Change Maintainers
- Add Markdown Syntax.
- Add better support for TypeScript.
- Add base language fallbacks to better support esoteric languages.
- Fix version conflicts (had to bump 2 `minor` versions)

Please feel free to request changes or leave feedback.
