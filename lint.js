'use strict';

const https = require('https');
const fs = require('fs');
const util = require('util');

const get = url =>
    new Promise((resolve, reject) => {
        https.get(url, res => {
            let body = '';
            res.setEncoding('utf8');
            res.on('data', data => (body += data));
            res.on('end', () => resolve(body));
            res.on('error', reject);
        });
    });

const readFile = util.promisify(fs.readFile);

const THEME_COLOR_REFERENCE_URL =
    'https://code.visualstudio.com/docs/getstarted/theme-color-reference';

const NOT_THEME_KEYS = [
    'workbench.colorCustomizations',
    'editor.tokenColorCustomizations',
];

async function scrapeThemeAvailableKeys() {
    const data = await get(THEME_COLOR_REFERENCE_URL);

    const matches = data.match(new RegExp('<code>.+?</code>', 'g'));

    if (!matches) {
        throw new Error(
            "Couldn't find any matches with <code>...</code>, maybe docs have chaged?"
        );
    }

    const availableKeys = [...matches]
        .map(key => key.replace('<code>', '').replace('</code>', ''))
        .filter(key => !/ /.test(key)) // Remove if contains spaces
        .filter(key => !/#.../.test(key)) // Remove if is a hex color
        .filter(key => !/&quot;/.test(key)) // Remove if contains quotes
        .filter(key => key.length > 4) // Remove if it's very small
        .filter(key => !NOT_THEME_KEYS.includes(key)); // Remove if its in the blacklist

    return availableKeys;
}

async function getTheme(fileToLint) {
    const fileContent = await readFile(fileToLint, 'utf8');
    const theme = JSON.parse(fileContent);
    return theme;
}

(async () => {
    const fileToLint = process.argv[2];

    if (!fileToLint) {
        throw new Error('You need to specify the path of the theme to lint');
    }

    const [availableKeys, theme] = await Promise.all([
        scrapeThemeAvailableKeys(),
        getTheme(fileToLint),
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
})().catch(err => console.error(err));
