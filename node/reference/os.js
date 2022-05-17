const os = require ('os');

//Platform
console.log(os.platform());
//CPU arch
console.log(os.arch());
//CPU info
console.log(os.cpus());

//Free/total memory
console.log(os.totalmem());
console.log(os.freemem());