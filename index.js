
const fs = require('fs');

fs.writeFileSync('notes.txt', 'I love California')



const lodash = require ('lodash');

const names =['david', 'wachira', 'kamau'];

const capitalize = lodash.map(names,lodash.capitalize );

console.log(capitalize)

