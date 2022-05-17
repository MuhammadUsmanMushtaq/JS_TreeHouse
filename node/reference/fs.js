const fs = require ('fs');
const path = require ('path');

// Create folder

// fs.mkdir(path.join (__dirname, '/newfolder'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Write (create) file

// fs.writeFile(path.join (__dirname, '/newfolder', 'Hello.txt'), 'Hello world ', err => {
//     if (err) throw err;
//     console.log('File created...');

//     //Append file
//     fs.appendFile(path.join (__dirname, '/newfolder', 'Hello.txt'), 'Loving node JS world ..', err => {
//         if (err) throw err;
//         console.log('File append...');
//     });
// });


// Read file

// fs.readFile(path.join (__dirname, '/newfolder', 'Hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file

// fs.rename(
//     path.join (__dirname, '/newfolder', 'Hello.txt'),
//     path.join (__dirname, '/newfolder', 'HelloWorld.txt'),
//      err => {
//     if (err) throw err;
//     console.log('File rename');
// });