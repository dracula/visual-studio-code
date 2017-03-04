const yaml = require('js-yaml');
const fs = require('fs');
const doc = yaml.safeLoad(fs.readFileSync(`${__dirname}/src/dracula.yml`, 'utf8'));
fs.writeFileSync(`${__dirname}/theme/dracula.json`, JSON.stringify(doc, null, 4));
