const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error('Error reading file: ${err.code}: ${err.path} does not exist.');
            } else {
                console.error('Error reading file: ${err}');
            }
            return;
        }
       // console.log('File Content:');
        console.log(data);
    });
}
readFileContent('textFile/chiku.txt');
readFileContent('textFile/chiku2.txt');
readFileContent('textFile/chiku3.txt');