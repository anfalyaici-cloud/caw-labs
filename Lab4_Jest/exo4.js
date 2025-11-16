const fs = require('fs');

const fileName = process.argv[2];
const text = process.argv.slice(3).join(' ');

if (!fileName || !text) {
    console.log("Usage: node exo4.js <filename> <text>");
    process.exit(1);
}

fs.writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }
    console.log("The file has been saved!");

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        console.log(data);
    });
});
