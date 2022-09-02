const express= require('express');
const app= express();

require('dotenv').config()


const User = require ('./models/User');
app.use(express.json());


app.listen(process.env.PORT, ()=>{
  console.log(`Servidor iniciado na porta ${process.env.PORT} http://localhost:${process.env.PORT}`);
});