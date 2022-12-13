const fs = require("fs");
const FileScanner = require('node-recursive-directory');

module.exports = async (DiscordClient, RootPath) => {
    const ScannedFiles = await FileScanner(`${RootPath}/Src/Interactions/ButtonCommands`)
        ScannedFiles.forEach(File => {
            if (fs.statSync(File).isDirectory()) return;
            const Button = require(File)
            if (Button.ignore) return;
            else DiscordClient.buttonCommands.set(Button.name, Button)
        });
}