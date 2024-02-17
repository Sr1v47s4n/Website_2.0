const fs = require('fs');
const path = require('path');

const directoryPath = './events'; // Change this to the path of your directory
const outputFile = 'fileNames.txt'; // Output file where the names will be stored

// Read the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter out only files (not directories)
    const fileNames = files.filter(file => fs.statSync(path.join(directoryPath, file)).isFile());

    // Print file names
    console.log('File Names in the Directory:');
    fileNames.forEach(fileName => {
        console.log(`path("${fileName}", views.${fileName}, name="${fileName}"),`);
    });

    // Store file names in a text file
    fs.writeFile(outputFile, fileNames.join('\n'), (writeErr) => {
        if (writeErr) {
            console.error('Error writing to file:', writeErr);
        } else {
            console.log(`File names have been stored in ${outputFile}`);
        }
    });
});
