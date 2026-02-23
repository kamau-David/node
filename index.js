
const fs = require('fs');

fs.writeFileSync('notes.txt', 'I love California')

// --- lodash section ---
const lodash = require('lodash');

const names = ['david', 'wachira', 'kamau'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize)

console.log('hello world')

// --- path section ---
const path = require('path');

console.log('Directory name', path.dirname(__filename));
console.log('Filename', path.basename(__filename));
console.log('File extension', path.extname(__filename));

const joinPath = path.join('/users', 'documents', 'node', 'project');
console.log('Joined path', joinPath);

const resolvePath = path.resolve('/users', 'documents', 'node', 'project');
console.log('Resolved path', resolvePath);

const normalizePath = path.normalize('/users/documents/node/project');
console.log('Normalized path', normalizePath);