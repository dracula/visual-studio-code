const path = require('path');
const os = require('os');
const fs = require('fs');

const symlinkType = os.platform() === 'win32' ? 'junction' : 'dir';

const repoPath = path.resolve(__dirname, '..');
const extensionspath = path.resolve(os.homedir(), '.vscode', 'extensions');
const disabledPath = path.join(extensionspath, 'disabled');
const bootstrapedDraculaPath = path.join(extensionspath, 'dracula');

const commands = {
    attach() {
        if (fs.existsSync(disabledPath)) {
            return;
        }
        const draculaDir = fs
            .readdirSync(extensionspath)
            .find(extension => extension.match(/^dracula/));
        const draculaPath = path.join(extensionspath, draculaDir);
        if (!fs.existsSync(disabledPath)) {
            fs.mkdirSync(disabledPath);
        }

        fs.renameSync(draculaPath, path.join(disabledPath, draculaDir));
        fs.symlinkSync(repoPath, bootstrapedDraculaPath, symlinkType);
    },
    eject() {
        if (fs.existsSync(bootstrapedDraculaPath)) {
            fs.unlinkSync(bootstrapedDraculaPath);
        }
        if (fs.existsSync(disabledPath)) {
            const draculaDir = fs
                .readdirSync(disabledPath)
                .find(extension => extension.match(/^dracula/));
            const draculaPath = path.join(disabledPath, draculaDir);

            fs.renameSync(draculaPath, path.join(extensionspath, draculaDir));
            fs.rmdirSync(disabledPath);
        }
    },
};

const [, , command] = process.argv;

commands[command]();
