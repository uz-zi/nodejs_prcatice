const express = require('express');
const app = express();
app.use(express.json());
const testroute = require('./route.js');

app.use('/signin', testroute);

app.get('/' ,(req,res)=> res.send("hello"))
app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get("*", (req, res) => res.status(404).send('404 error: page not found'))
