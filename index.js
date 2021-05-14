const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const path = require('path');

const directory = argv._[0] || '.';
const padding = argv.p || 2;

const folders = fs.readdirSync(directory);
folders.forEach(folder => {
    const thisFolder = path.join(directory, folder);
    const thisFolderContents = fs.readdirSync(thisFolder);
    thisFolderContents.forEach((file, idx) => {
        const ext = path.extname(file);
        const newName = `${idx}`.padStart(padding, '0') + ext;
        const newPath = path.join(thisFolder, newName);
        const oldPath = path.join(thisFolder, file);
        // console.log({oldPath, newPath});
        fs.renameSync(oldPath, newPath);
    })
});
