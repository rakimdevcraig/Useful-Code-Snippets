// 4 child processes: exec, execFile, fork, spawn


//Documentation child_process.spawn(command[, args][, options]) we will typically just use command and args if needed
//Spawn gives you the ability to spawn child processes 
const { spawn } = require('child_process');
//this example we open up google chrome
// let openBrowser = spawn('open', ['https://www.google.com/'])

//this example we just create a test.js file
// let createFile = spawn('touch', ['test.js'])

// function open(urlToNavigateTo){
//     let openBrowser = spawn('open', [urlToNavigateTo])
// }
// how to call the function for any website, must be a string
// open('https://www.google.com/')


//Exec: Opens and instance of bash and lets us type in commands as if we were on the command line
//opens safari this is exactly how we would type it on the command line to open safari 
//but it can also execute anything we would type on the commmand line like git commit 
const { exec } = require('child_process');
// exec('open /Applications/Safari.app', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });


//execfile

// child_process.execFile(file[, args][, options][, callback])
// const { execFile } = require('child_process');
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });


// child_process.execFile(file[, args][, options][, callback])
const { execFile } = require('child_process');
const child = execFile('/Applications/Safari.app', ['open'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});


