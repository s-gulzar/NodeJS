const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', function()
{
    console.log('listener called');
});

// or both are same

emitter.on('message', () =>
{
    console.log('listener called with out any parameters');
});

emitter.emit('message');
