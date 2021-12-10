#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
var fs = require('fs');

const LogLevel = Object.freeze({
  Error: 'error',
  Info: 'info',
  Debug: 'debug',
  Warn: 'warn'
})
const { input, output, level } = argv
if(!input) {
  console.log('Please insert the log file!')
  process.exit()
}
var text = fs.readFileSync(input, 'utf8')
let outputList = []
if(!level) level = LogLevel.Error
text.split('\n').forEach(line => {
  if (level === line.split(' - ')[1]) {
    const { transactionId, err } = JSON.parse(line.split(' - ')[2])
    outputList.push({
      timestamp: new Date(line.split(' - ')[0]).getTime(),
      loglevel: line.split(' - ')[1],
      transactionId,
      err
    })
    // what if we want to update the file
    fs.writeFile(output || './errors.json', JSON.stringify(outputList), function (err) {
      if (err) throw err;
      console.log('complete!');
    }
    );
  }
})

// Class and Domains:
// fetch and read from flags [dynamic flag support map() typescript]
// get and separate result
// prepare output data
// class I/O read() and  write() functions
// error handling
// base parser class and logger-parser 

// NOTES:
// cover completely with unit tests (per file )
// write some stress test (nice to have!)
// prepare typescript project on 4 version: 
//  - (js [], typescript one file [] , typescript project [] + readme.md + nest.js [])
// type-safe with separate interfaces and clean architecture 
// check code coverage with tools like istanbul maybe
// write documentation per function its really important
// R&D about  OOD principles (DRY, SLAP, SOLID, etc).

// ANALYSE:
// check time and space complexity and iterations for large size of log files
// prepare main class and flow of async await 


// FLOW OF IMPLEMENTATION: 
// 1. read input file [done]
// 2. transform A => middle class => with some terms(commands) input [done]
// 3. transform B => middle class => with some terms(commands) output  [done]
// 4. write output file  [done]
// interfaces : [ interface data middle , interface input (reflection), interface output , ..] [done]
// consider the most dynamic  scenario and change it to const parts [done]
// use create instance function [done]
// use reflection and validation [not for now]
// use generic types [done]


// use some kind of design patterns [not for now]
// use getter / setter [NFN (not for now)]

// SOLID DRY SLAP principles
// test with good coverage 