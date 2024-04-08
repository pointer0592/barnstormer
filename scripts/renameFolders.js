const fs = require('fs');
const path = require('path');

// Retrieve the directory path, lookup value, and replacement value from the command line arguments
const [directoryPath, lookupValue, replacementValue] = process.argv.slice(2);

if (!directoryPath || !lookupValue || !replacementValue) {
    console.error('Usage: node renameFolders.js <directoryPath> <lookupValue> <replacementValue>');
    process.exit(1);
}

// Function to rename folders
const renameFolders = (dirPath, lookup, replacement) => {
    fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('Error reading the directory:', err);
            return;
        }

        files.forEach(file => {
            if (file.isDirectory()) {
                const oldName = file.name;
                const newName = oldName.replace(lookup, replacement);

                if (oldName !== newName) {
                    const oldPath = path.join(dirPath, oldName);
                    const newPath = path.join(dirPath, newName);

                    fs.rename(oldPath, newPath, (err) => {
                        if (err) {
                            console.error(`Error renaming directory from ${oldName} to ${newName}:`, err);
                        } else {
                            console.log(`Renamed directory from ${oldName} to ${newName}`);
                        }
                    });
                }
            }
        });
    });
};

// Call the function with the provided arguments
renameFolders(directoryPath, lookupValue, replacementValue);
