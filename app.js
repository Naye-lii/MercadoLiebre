const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public/img'));


app.get ('/', (req, res) => {
     res.sendFile("/home.html", {root: "views"})
});

app.get ('/login', (req, res) => {
     res.sendFile("/login.html", {root: "views"})
});

app.get ('/registro', (req, res) => {
     res.sendFile("/registro.html", {root: "views"})
});

const port = process.env.PORT || 3000

app.listen (port, () => {console.log (`App listening at http://localhost:${port}`)});
