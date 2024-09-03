// const firstfile = require("./applo")
// const {ExtendedEventEmitter} = require("./applo")
// const http = require("http")
// // firstfile.applo();
// // console.log(firstfile.applo());
// // console.log(firstfile);
const fs = require("fs");


// //firstfile.emmitters();


// console.log(ExtendedEventEmitter)

// const emitter = new ExtendedEventEmitter();

// emitter.on('applo', (arg) => {
//     console.log("applo from event listener argument is : " + arg)

// })

// emitter.log('applo from event listener');
// console.log(firstfile)



// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('appl0');
//         res.end();
//     }
// })


// server.listen(2000)

// console.log("server listening on port" + 2000);









//-------------------------------expressjs -------------------------------

const express = require('express');
const app = express();


// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
//   })


// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
//   })



//   const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   app.get('/example/d', [cb0, cb1], (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from D!')
//   })


//   app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   },
//   (req, res) => {
//     res.send('Hello from D-------------!')
//   }
// )



app.get('/user/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id !== '0') res.send('chiku')
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // send a regular response
    res.send('regular')
  })
  
  // handler for the /user/:id path, which sends a special response
//   app.get('/user/:id', (req, res, next) => {
//     res.send('special')
//   })

// app.get('/home', (req, res) => res.send('applo World! How are you-jghvsdbknx,--khfdgjbvs,n------'));
// app.get('/applo', (req, res) => res.send('boom boom! How are you---------'));


function getUserById(id)
{

}


//---------------------------error handling--------------------------
app.get('/user/:id', async (req, res, next) => {
    const user = await getUserById(req.params.id)
    res.send(user)
  })


  app.get('/', [
    function (req, res, next) {
      fs.writeFile('/inaccessible-path', 'data', next)
    },
    function (req, res) {
      res.send('OK')
    }
  ])


  function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
  }
  
//   app.get('/boom/:id', (req, res, next) => {
//     if (req.params.id !== '0') {
//       const err = new Error('Something went wrong!');
//       res.send(err) 
//     }
//     else next();
//   }, (req, res) => {
//     res.send('regular');
//   });
  

  app.use(errorHandler);



app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get("*", (req, res) => res.send("no route like this"))






