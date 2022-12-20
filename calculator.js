const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

const myfun = (req, res) => {
  res.sendFile(__dirname + "/index.html");
    // console.log(__dirname)
}

const calculate = (req, res) => {
    console.log()
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let resp = num1 + num2;

    const text = "The result is " + resp;
    res.send(text)
}



app.get('/', myfun)

app.post('/calculate',calculate)

app.listen(port, (req, res) => {
    console.log("Server On" + " " + port)
})