'use strict';

const fs = require('fs');
let file = process.argv.slice(2);
console.log('file is', file);


fs.readFile('./files/' + file[0], (err, data) => {
  if(err) { throw err; }
  console.log(data.toString());
  
  fs.writeFile('./files/'+ file[0], Math.random().toString(), err => {
    if(err) { throw err; }
    console.log('text changed');
    
    fs.readFile('./files/' + file[0], (err, data) => {
      if(err) { throw err; }
      console.log(data.toString());
    });
  });
});
