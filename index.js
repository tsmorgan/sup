#! /usr/bin/env node

var exec    = require('child_process').exec,
    colors  = require('colors'),
    fs      = require('fs');

var all_files = fs.readdirSync(process.cwd());
for (var i = 0; i < all_files.length; i++) 
{
  var file = all_files[i]
  var m = file.match('sublime-project');
  if (m !== null)
  {      
    var command = 'subl '+file;
    console.log(command.green);
    exec(command);
    process.exit();
  }   
};

console.log('There is no sublime-project file in this directory.'.red);