const express = require('express');
const { query, validationResult, matchedData } = require('express-validator');
const app = express();

app.use(express.json());
// app.get('/hello', query('person').notEmpty(), (req, res) => {
//   res.send(`Hello, ${req.query.person}!`);
// });


// app.get('/hello', query('person').notEmpty(), (req, res) => {
//     const result = validationResult(req);
//     if (result.isEmpty()) {
//       return res.send(`Hello, ${req.query.person}!`);
//     }
  
//     res.send({ errors: result.array() });
//   });



  //Sanitizing to prevent the xss while attack can send the name in html tags try this  http://localhost:3000/hello?person=<b>John</b>
  // to avoid this you can use senitizors espacially .escape()
  app.get('/hello', [
    query('person').notEmpty().escape(),
    (req, res) => {
      res.send(`Hello, ${req.query.person}!`);
      console.log(req.query);
    },
  ], (req, res) => {
    res.status(400).send({ errors: req.validationErrors() });
  });


//match data
//   app.get('/hello', query('person').notEmpty().escape(), query('age').notEmpty().escape(), (req, res) => {
//     const result = validationResult(req);
//     if (result.isEmpty()) {
//       const data = matchedData(req);
//       console.log(data);
//       return res.send(`Hello, ${data.person} and age is ${data.age}!`);
//     }
  
//     res.send({ errors: result.array() });
//   });




app.listen(3000);


