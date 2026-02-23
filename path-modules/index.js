const path = require('path');

console.log('Directory name', path.dirname(__filename));

console.log('filename', path.basename(__filename));

console.log('File extension', path.extname(__filename))