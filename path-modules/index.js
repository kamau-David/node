const path = require('path');

console.log('Directory name', path.dirname(__filename));

console.log('filename', path.basename(__filename));

console.log('File extension', path.extname(__filename));

const joinPath = path.join('/users','documents','node','project');
console.log('Joined path', joinPath)

const resolvePath = path.resolve('/users','documents','node','project');
console.log('resolved path', resolvePath)

const normalizePath = path.normalize('users','documents','node','project');
console.log('Normalized path', normalizePath)