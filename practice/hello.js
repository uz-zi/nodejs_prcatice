const path = require('path');
const os = require('os');
const fs = require('fs');
const events = require('events');

var pathobj = path.parse(__filename)
// function hello(){
//     //console.log("hello world")
//     console.log(path)
//     console.log(pathobj)
//     console.log(os)
//     console.log(os.freemem())
//     console.log(os.totalmem())



//     //sync
//     const files = fs.readdirSync('../');
//     console.log(files)

//     //async
//     fs.readdir('../', (err, files) => {
//         if (err) throw err;
//         console.log("------from events", files);
//     });
// }

function emmitters(){
    const emitter = new events();
    emitter.on('event', (arg1, arg2) => {
        console.log(`Event: ${arg1}, ${arg2}`);
    });

    emitter.emit('event', 1 , 'arg2');
}


class ExtendedEventEmitter extends events.EventEmitter{
    log(message) { console.log(message); 
        this.emit("message", message);
    }
}




module.exports = {
    // hello,
    // emmitters
    ExtendedEventEmitter
    }


//----------------------modulewrapper
// (function(exports,require,module,__filename, __dirname){

//     function hello(){
//         console.log("hello world")
//     }
    
//     module.exports = {
//     hello
//         }
// }) // NODE DOES RUN OUT PROGRAM DIRECTLY IT RUN IN A WRAPPER