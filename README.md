# Dracula Variants for [Visual Studio Code](https://code.visualstudio.com)

🌍 [中文](./README.zh-CN.md) | [Español](./README.es.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md)

> Dark & Light themes for [Visual Studio Code](https://code.visualstudio.com), based on [Dracula](https://draculatheme.com).

## Themes

This extension includes **three** theme variants:

| Theme | Type | Description |
|-------|------|-------------|
| **Dracula Theme** | Dark | The classic Dracula dark theme |
| **Dracula Theme Soft** | Dark | A desaturated variant for reduced eye strain |
| **Dracula Theme Light** | Light | A light variant preserving Dracula's signature color palette |

### Dracula Light

The light variant flips the background/foreground while deepening all syntax colors to maintain WCAG AA contrast on a light canvas. The Dracula color DNA — purple, pink, cyan, green — is fully preserved.

**Color Palette:**

| Role | Dark | Light |
|------|------|-------|
| Background | `#282A36` | `#F8F8F2` |
| Foreground | `#F8F8F2` | `#282A36` |
| Keywords | `#FF79C6` | `#C0358B` |
| Functions | `#50FA7B` | `#1B8A3A` |
| Strings | `#F1FA8C` | `#9B7E00` |
| Constants | `#BD93F9` | `#7C3AED` |
| Types | `#8BE9FD` | `#0C7E8F` |
| Comments | `#6272A4` | `#7E8CAD` |

## Install

### From Source

1. Clone this repository
2. Copy the folder to your VS Code extensions directory
3. Restart VS Code
4. Open **Preferences: Color Theme** and select your preferred variant

### Development

```bash
npm install
npm run build
```

Press `F5` in VS Code to launch the Extension Development Host and preview the themes.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Credits

Based on the [Dracula Theme](https://draculatheme.com) by [Zeno Rocha](https://github.com/zenorocha).

## License

[MIT License](./LICENSE)
