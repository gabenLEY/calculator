const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

const myfun = (req, res) => {
  res.sendFile(__dirname + "/index.html");
    // console.log(__dirname)
}

const myfun2 = (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
      // console.log(__dirname)
}

const myfun3 = (req, res) => {
     let w = parseFloat(req.body.w);
     let h = parseFloat(req.body.h);

     let re = w / (h * h)
      console.log(req.body)
      res.send("Result is " + re)
    //   res.redirect("/");
}

const calculate = (req, res) => {
    console.log()
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let resp = num1 + num2;

    const text = "The result is " + resp;
    res.send(text)
}

const home = (req, res) => {
    let name = "Gabenley";
    // res.sendFile(__dirname + "/view/home.pug", {name:name});
    res.render('home.pug', { name: 'John Doe', age: 21 });
}



app.get('/', myfun)
app.get('/bmi', myfun2)
app.get('/home', home)
app.post('/bmi', myfun3)
app.post('/calculate',calculate)

app.listen(port, (req, res) => {
    console.log("Server On" + " " + port)
})