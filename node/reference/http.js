const http = require ('http');
const { endianness } = require('os');

//Create server obj

http.createServer((req, res) => {
    //write response
    res.write('Hello hello');
    res.end();
}).listen(5000, () => console.log('Server is running on port 5000...'));