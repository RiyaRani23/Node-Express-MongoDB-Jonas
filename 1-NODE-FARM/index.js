// READING AND WRITING FILES 


const fs = require('fs');

// utf-8 encoding is important to get a string(english) instead of a buffer 
const textIn = fs.readFileSync('starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('starter/txt/output.txt', textOut);
console.log('File written!');

// READING AND WRITING FILES 