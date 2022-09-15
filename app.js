const express= require('express');
const app= express();
var cors = require('cors');

require('dotenv').config()


const User = require ('./models/User');
app.use(express.json());
 
const router = require('./routes/index')
app.use( (req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  app.use(cors());
  next();
})

app.use(router)


app.listen(process.env.PORT, ()=>{
  console.log(`Servidor iniciado na porta ${process.env.PORT} http://localhost:${process.env.PORT}`);
});