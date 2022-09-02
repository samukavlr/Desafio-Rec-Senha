const Sequelize =require('sequelize');

const sequelize =new Sequelize('senac','root','',{
    host:'localhost',
    dialect:'mysql'
});

  

sequelize.authenticate().then(()=>{
    console.log('Conexão como banco de dados realizada com sucesso!!');
}).catch((erro)=>{
    console.log(`Erro de conexão: ${erro}`);

})


module.exports =sequelize