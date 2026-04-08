### [Visual Studio Code](https://code.visualstudio.com/)

#### Install from VSIX

1. Download the `.vsix` file from [Releases](https://github.com/ZhangWillThink/dracula-variants/releases)
2. Go to `View -> Command Palette` or press `Ctrl+Shift+P`
3. Enter `Extensions: Install from VSIX...`
4. Select the downloaded `.vsix` file

#### Install using Git

```bash
git clone https://github.com/ZhangWillThink/dracula-variants.git ~/.vscode/extensions/dracula-variants
cd ~/.vscode/extensions/dracula-variants
npm install
npm run build
```

#### Activating theme

Run Visual Studio Code. The themes will be available from `File -> Preferences -> Color Theme` dropdown menu:

- **Dracula Theme** — Original dark theme
- **Dracula Theme Soft** — Softer dark variant
- **Dracula Theme Light** — Light variant
