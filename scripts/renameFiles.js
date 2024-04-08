const fs = require('fs');
const path = require('path');

// Retrieve the directory path, lookup value, and replacement value from the command line arguments
const [directoryPath, lookupValue, replacementValue] = process.argv.slice(2);

if (!directoryPath || !lookupValue || !replacementValue) {
    console.error('Usage: node renameFiles.js <directoryPath> <lookupValue> <replacementValue>');
    process.exit(1);
}

// Function to recursively rename files
const renameFiles = (dirPath, lookup, replacement) => {
    fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('Error reading the directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dirPath, file.name);
            if (file.isDirectory()) {
                // If the item is a directory, recurse into it
                renameFiles(filePath, lookup, replacement);
            } else {
                // If the item is a file, check if it needs to be renamed
                const newName = file.name.replace(lookup, replacement);
                if (file.name !== newName) {
                    const newFilePath = path.join(dirPath, newName);
                    fs.rename(filePath, newFilePath, (err) => {
                        if (err) {
                            console.error(`Error renaming file from ${file.name} to ${newName}:`, err);
                        } else {
                            console.log(`Renamed file from ${file.name} to ${newName}`);
                        }
                    });
                }
            }
        });
    });
};

// Call the function with the provided arguments
renameFiles(directoryPath, lookupValue, replacementValue);
