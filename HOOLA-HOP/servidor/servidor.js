const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());


listaUsuarios  = [
  {"id": 0, "nombre" : "Alex", "apellido": "fandino", "ciudad": "bilbao", "correo": "alex@gmail.com", "password": "123abc"},
  {"id": 1, "nombre" : "Alvaro", "apellido": "Monge", "ciudad": "bilbao", "correo": "Alvaro@gmail.com", "password": "123abc"},
]


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get("/listaUsuarios", (req, res) => {

  console.log(listaUsuarios);
  
  res.send(listaUsuarios);

});

app.post("/crearUsuario", (req, res) =>{

  listaUsuarios.push(req.body);
  res.send(listaUsuarios);
  
});


