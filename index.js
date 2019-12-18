const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
// the next 4 are used for the local json database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// the next 3 are to declare the db json file and to init the db 
const adapter = new FileSync('journal_data.json')
const db = low(adapter)
// this sets up the objects that you will write to (like tables in relational database)
db.defaults({ entries: [], otherInfo: {} }).write();

// getting everything from db post 
let temp = db.get('entries').value();
console.log(temp);

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
    // writing the entry to the db 
    db.get('entries').push( 
        {
            id: new Date().getTime(), 
            entryText: req.query.entryText,
            latitude: req.query.latitude,
            longitude: req.query.longitude,
            accuracy: req.query.accuracy,
            timestamp: req.query.timestamp,
        }
        ).write();
    res.send(req.query);
});

app.listen(port, ()=> {console.log(`local journal running on ${port}`);});