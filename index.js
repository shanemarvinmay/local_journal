const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

app.get('/', (req,res) => {
    // res.send('root reached');
    const pathToFile = __dirname + '/index.html';
    res.sendFile(pathToFile);
});

app.listen(port, ()=> {console.log(`local journal running on ${port}`);});