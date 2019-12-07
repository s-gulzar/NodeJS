//setting debuging environment
//in command prompt 
//set DEBUG=app:startup or set DEBUG=app:* or set DEBUG= (to remove DEBUG environment)
//in Linux/mac os terminal 
//export DEBUG=app:* //we can use wild card
//
//
//To set environment and run application in same time use below command
//DEBUG=app:db nodemon  express15.js


const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const express = require('express');
const app = express();
const morgan = require('morgan');

if (app.get('env') === 'development'){
    app.use(morgan('short'));
    startupDebugger('Morgan enabled.....')
}


//db work 
dbDebugger('connected to DB......');
app.listen('3000', () => console.log('Now Listening in 3000'));