const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    pw: ""
});

con.connect((err) => {
    if(err){
        console.log("Connection failed: ", err);
    } else {
        console.log("Connected!");
    }
})

app.use(express.static(__dirname + '/'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/add", (req, res) => {
    
});

app.listen(port, () => console.log("Port: " + port));