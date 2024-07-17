const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const SRC_DIR = path.join(__dirname, '..', 'src');
const THEME_DIR = path.join(__dirname, '..', 'theme');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
    const files = await fs.promises.readdir(SRC_DIR);
    const ymlFiles = files.filter((file) => file.endsWith('.yml'));

    const promises = ymlFiles.map(async (file) => {
        const themeName = path.basename(file, '.yml');
        const themeFileName = `${themeName}.json`;

        const { base } = await generate(themeName);

        return Promise.all([
            fs.promises.writeFile(
                path.join(THEME_DIR, themeFileName),
                JSON.stringify(base, null, 4)
            ),
        ]);
    });

    return Promise.all(promises);
};

if (require.main === module) {
    module.exports();
}
