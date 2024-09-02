const firstfile = require("./hello")
const {ExtendedEventEmitter} = require("./hello")
const http = require("http")
// firstfile.hello();
// console.log(firstfile.hello());
// console.log(firstfile);


//firstfile.emmitters();


console.log(ExtendedEventEmitter)

const emitter = new ExtendedEventEmitter();

emitter.on('hello', (arg) => {
    console.log("hello from event listener argument is : " + arg)

})

emitter.log('hello from event listener');
console.log(firstfile)



const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hell0');
        res.end();
    }
})


server.listen(2000)

console.log("server listening on port" + 2000);