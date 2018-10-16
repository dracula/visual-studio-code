'use strict';

const fsp = require('./fsp');
const tinycolor = require('tinycolor2');
const { loadYAML } = require('./yaml');

async function loadTheme(yamlFilePath) {
    const standardThemeYAML = await fsp.readFile(yamlFilePath, 'utf8');
    const standardTheme = await loadYAML(standardThemeYAML);

    const softThemeYAML = getSoftThemeYAML(standardThemeYAML, standardTheme);
    const softTheme = await loadYAML(softThemeYAML);

    return { standardTheme, softTheme };
}

function getSoftThemeYAML(fileContent, standardTheme) {
    const brightColors = [
        ...standardTheme.dracula.ansi,
        ...standardTheme.dracula.brightOther,
    ];

    const brightSoftColors = brightColors.map(brightColor => ({
        brightColorRegex: new RegExp(brightColor, 'g'),
        softColor: tinycolor(brightColor)
            .desaturate(20)
            .toHexString(),
    }));

    return brightSoftColors.reduce(
        (fileContent, { brightColorRegex, softColor }) => {
            return fileContent.replace(brightColorRegex, softColor);
        },
        fileContent
    );
}

module.exports = loadTheme;
