const fs = require('fs');
const tinycolor = require('tinycolor2');
const yaml = require('js-yaml');

const standard = fs.readFileSync(`${__dirname}/src/dracula.yml`, 'utf8');

const soft = standard.replace(/'(#[0-9A-Z]{6})/g, (match, hex) => {
    return `'${tinycolor(hex).brighten(8).desaturate(2).darken(5).toHexString()}`;
});

fs.writeFileSync(`${__dirname}/theme/dracula.json`, JSON.stringify(yaml.safeLoad(standard), null, 4));
fs.writeFileSync(`${__dirname}/theme/dracula-soft.json`, JSON.stringify(yaml.safeLoad(soft), null, 4));
