// READING AND WRITING FILES 
// utf-8 encoding is important to get a string(english) instead of a buffer 

const fs = require('fs');
const https = require('https');
const url = require('url');

// ********************** FILES **********************

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');
 
// -----------------------------------------------------
// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     if (err) return console.log('Error! 💥');
   
//     fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2); 
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written 😁');
//             });
//         });
//     });
// });
// console.log('Will read file!');


// ********************** SERVER **********************
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data); 

const server = https.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    }
    else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } 
    else if(pathName === '/api') {
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data); 
            // console.log(productData);
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);
        });
        
    }
    else {
        // res.end('Page not found');
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
        });
   

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});