const yaml = require('js-yaml');
const fs = require('fs');
const { execSync } = require('child_process');

execSync('mkdir -p ./theme');

const doc = yaml.safeLoad(fs.readFileSync(__dirname + '/src/dracula.yml', 'utf8'));
const { scheme } = doc;

fs.writeFileSync(__dirname + '/theme/dracula.json', JSON.stringify(parseColors(doc), null, 4));

function parseColors(input) {
    if (Array.isArray(input)) {
        return input.map(i => {
            if (typeof i === 'object' && i !== null) {
                return parseColors(i);
            }
            return i;
        });
    }
    return Object.keys(input).reduce((prev, curr) => {
        if (typeof input[curr] === 'object' && input[curr] !== null) {
            return Object.assign({}, prev, { [curr]: parseColors(input[curr]) });
        }
        return Object.assign({}, prev, {
            [curr]: Object.keys(scheme).indexOf(input[curr]) > -1
                ? scheme[input[curr]]
                : input[curr],
        });
    }, {});
}
