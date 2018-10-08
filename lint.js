"use strict";

const https = require("https");
const fs = require("fs");
const util = require("util");

const get = url =>
    new Promise((resolve, reject) => {
        https.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", err => {
                reject(err);
            });
        });
    });

const readFile = util.promisify(fs.readFile);

const THEME_COLOR_REFERENCE_URL =
    "https://code.visualstudio.com/docs/getstarted/theme-color-reference";

const NOT_THEME_KEYS = [
    "workbench.colorCustomizations",
    "editor.tokenColorCustomizations"
];

const fileToLint = process.argv[2];

if (!fileToLint) {
    throw new Error("You need to specifiy the path of the theme to lint");
}

async function scrapThemeAvailableKeys() {
    const data = await get(THEME_COLOR_REFERENCE_URL);

    const matches = data.match(new RegExp("<code>.+?</code>", "g"));

    const availableKeys = [...matches]
        .map(key => key.replace("<code>", "").replace("</code>", ""))
        .filter(key => !/ /.test(key)) // Remove if contains spaces
        .filter(key => !/#.../.test(key)) // Remove if is a hex color
        .filter(key => !/&quot;/.test(key)) // Remove if contains quotes
        .filter(key => key.length > 4) // Remove if it's very small
        .filter(key => !NOT_THEME_KEYS.includes(key)); // Remove if its in the blacklist

    return availableKeys;
}

async function getTheme() {
    const fileContent = await readFile(fileToLint, "utf8");
    const theme = JSON.parse(fileContent);
    return theme;
}

async function main() {
    const [availableKeys, theme] = await Promise.all([
        scrapThemeAvailableKeys(),
        getTheme()
    ]);

    Object.keys(theme.colors).forEach(key => {
        if (!availableKeys.includes(key)) {
            console.warn(`Unsupported key "${key}", probably deprecated?`);
        }
    });

    availableKeys.forEach(key => {
        if (!Object.keys(theme.colors).includes(key)) {
            console.warn(`Missing key "${key}" in theme`);
        }
    });
}

main().catch(err => console.error(err));
