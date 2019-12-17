const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

app.get('/', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    // res.send('root reached');
    const pathToFile = __dirname + '/index.html';
    res.sendFile(pathToFile);
});

app.post('/saveEntries', (req,res) => { //saveEntries
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    console.log("POST /saveEntries hit"); 
    console.log(req.query);
    res.send(req.query);
});

app.listen(port, ()=> {console.log(`local journal running on ${port}`);});