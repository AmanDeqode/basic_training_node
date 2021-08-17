const path = require('path');


console.log(path.join('dir ',__dirname));

console.log(path.join(__filename));

console.log(path.extname(__filename));

console.log(path.basename(__filename));

//console.log(path.parse('/home/deq/node_training/module1/path.js'));

const info = path.parse(__filename);

const {root,dir,base,ext,name} = info;

console.log(`root = ${root} , filename = ${name}, basename = ${base}, extname = ${ext}, directory = ${dir}`);
