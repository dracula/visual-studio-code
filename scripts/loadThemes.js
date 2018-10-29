'use strict';

const tinycolor = require('tinycolor2');
const fsp = require('./fsp');
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

    return fileContent.replace(/#[0-9A-F]{6}/g, color => {
        if (brightColors.includes(color)) {
            return tinycolor(color)
                .desaturate(20)
                .toHexString();
        }
        return color;
    });
}

module.exports = loadTheme;
