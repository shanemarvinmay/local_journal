const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => {res.send('root reached');});

app.listen(port, ()=> {console.log(`local journal running on ${port}`);});