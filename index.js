const lodash = require ('lodash');

const names =['david', 'wachira', 'kamau'];

const capitalize = lodash.map(names,lodash.capitalize );

console.log(capitalize)