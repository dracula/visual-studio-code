# Dracula Variants — [Visual Studio Code](https://code.visualstudio.com) 主题

🌍 [English](./README.md) | [Español](./README.es.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md)

> 基于 [Dracula](https://draculatheme.com) 的 VS Code 深色 & 浅色主题。

## 主题

本扩展包含 **三个** 主题变体：

| 主题 | 类型 | 说明 |
|------|------|------|
| **Dracula Theme** | 深色 | 经典 Dracula 深色主题 |
| **Dracula Theme Soft** | 深色 | 降低饱和度的柔和变体，减轻视觉疲劳 |
| **Dracula Theme Light** | 浅色 | 保留 Dracula 标志性配色的浅色变体 |

### Dracula Light

浅色变体翻转了背景和前景色，同时加深所有语法颜色以在浅色画布上满足 WCAG AA 对比度标准。Dracula 的色彩基因 — 紫色、粉色、青色、绿色 — 完整保留。

**调色板：**

| 角色 | 深色版 | 浅色版 |
|------|--------|--------|
| 背景 | `#282A36` | `#F8F8F2` |
| 前景 | `#F8F8F2` | `#282A36` |
| 关键字 | `#FF79C6` | `#C0358B` |
| 函数 | `#50FA7B` | `#1B8A3A` |
| 字符串 | `#F1FA8C` | `#9B7E00` |
| 常量 | `#BD93F9` | `#7C3AED` |
| 类型 | `#8BE9FD` | `#0C7E8F` |
| 注释 | `#6272A4` | `#7E8CAD` |

## 安装

### 从源码安装

1. 克隆此仓库
2. 将文件夹复制到 VS Code 扩展目录
3. 重启 VS Code
4. 打开 **首选项：颜色主题** 并选择你喜欢的变体

### 开发

```bash
npm install
npm run build
```

在 VS Code 中按 `F5` 启动扩展开发宿主，预览主题效果。

## 贡献

欢迎贡献！请随时提交 Issue 或 Pull Request。

## 致谢

基于 [Zeno Rocha](https://github.com/zenorocha) 的 [Dracula Theme](https://draculatheme.com)。

## 许可证

[MIT License](./LICENSE)
