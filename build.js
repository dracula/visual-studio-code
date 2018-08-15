const fs = require('fs');
const path = require('path');
const tinycolor = require('tinycolor2');
const yaml = require('js-yaml');

const THEME_DIR = path.join(__dirname, 'theme');
const THEME_YAML_FILE = path.join(__dirname, 'src', 'dracula.yml');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

const withAlphaType = new yaml.Type('!alpha', {
    kind: 'sequence',
    construct: data => {
        return data[0] + data[1];
    },
    represent: data => {
        return [data[0], data[1]];
    },
});
const schema = yaml.Schema.create([withAlphaType]);
const standard = fs.readFileSync(THEME_YAML_FILE, 'utf8');

yamlObj = yaml.load(standard, { schema });

yamlObj.colors = Object.keys(yamlObj.colors).reduce((obj, key) => {
    if (yamlObj.colors[key] === null) {
        return obj;
    }
    return Object.assign({}, obj, { [key]: yamlObj.colors[key] });
}, {});

const brightColors = [...yamlObj.dracula.ansi, ...yamlObj.dracula.brightOther];

const soft = standard.replace(/'(#[0-9A-Z]{6})/g, (match, hex) => {
    if (brightColors.indexOf(hex) > -1) {
        return `'${tinycolor(hex)
            .desaturate(20)
            .toHexString()}`;
    }
    return `'${tinycolor(hex).toHexString()}`;
});

fs.writeFileSync(
    path.join(THEME_DIR, 'dracula.json'),
    JSON.stringify(yaml.load(standard, { schema }), null, 4)
);
fs.writeFileSync(
    path.join(THEME_DIR, 'dracula-soft.json'),
    JSON.stringify(yaml.load(soft, { schema }), null, 4)
);
