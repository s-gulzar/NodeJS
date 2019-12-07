const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', (arg) =>
{
    console.log('Listener called with arguments ');
    console.log(arg);
});

emitter.emit('message', {id:1, url:'http://gulzar/api'});


