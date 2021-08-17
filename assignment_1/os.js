const os = require('os');

console.log(os.arch())

const freeMemo = os.freemem();

console.log(` free memory => ${freeMemo} bytes`);

const totalMemo = os.totalmem();

console.log(`total memory ==> ${totalMemo} bytes`);


console.log(`Host name => ${os.hostname()}`)

console.log(`platform ==> ${os.platform()}`)

console.log(os.tmpdir());

console.log(os.type()
);