const Users = require('../models/User');
const bcrypt = require('bcryptjs');

exports.recovery =  async(req, res) =>{
  const email=req.body.email
  const user = await Users.findOne({where:{email}})
  if(!user){
    return res.status(400).json({
      erro:true,
      mensagem:'usuario não encontrado'
    })
  }
  else{
    const token = (Math.random()*10).toString().substring(0,6)
    await Users.update({
      verificationCode:token
    },{where:{id:user.id}})
  }
  
}

///////////////// crirar//////////////
exports.create =  async(req, res) =>{
  var dados = req.body;
  dados.password = await bcrypt.hash(dados.password, 8);


  await Users.create(dados)
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: 'Usuário cadastrado com sucesso!'
    });
    

  }).catch((err)=>{
    return res.status(400).json({
      erro:true,
      mensagem: `Erro: Usuário não encontrado... ${err}`
    })
  })
}
///////////////// Logar//////////////
exports.login =  async (req, res) => {
  const user = await Users.findOne({
      attributes: ['id', 'name', 'email', 'gender', 'password'],
      where: {
          email: req.body.email
      }
  })
  if(user === null){
      return res.status(400).json({
          erro: true,
          mensagem:"Erro: Email ou senha incorreta!!!"
      })
  }
  if(!(await bcrypt.compare(req.body.password, user.password))){
      return res.status(400).json({
          erro: true,
          mensagem: "Erro: Email ou senha incorreta!!!"
      })
  }
  var token = jwt.sign({id: user.id}, process.env.SECRET,{
    expiresIn: 600 // 1min, '7d' 7dias
  })
  return res.json({
    erro:false,
    mensagem: "Login realizado com sucesso!!!",
    token
    
  })
  
}
///////////////// Mostrar todos//////////////
exports.findAll = async(req,res)=>{
  await Users.findAll({
    attributes: ['id','name','email','password'],
    order: [['id', 'ASC']]

  })
  .then((user) => {
    return res.json({
      erro: false,
      user
    });
  }).catch((err) => {
    return res.status(400).json({
      erro : true,
      mensagem: `Erro ${err} ou nenhum usuário encontrado!!!`
    })
  })
}

exports.findOne = async (req, res) =>{
  const {id} = req.params;
  try{
   
    const users = await Users.findByPk(id);
    if(!users){
      return res.status(400).json({
        erro: true,
        mensagem: "Erro:Nenhum usuário encontrado!"
      })
    }
    res.status(200).json({
      erro: false,
      users
    })
  }catch(err){
    res.status(400).json({
      erro: true,
      mensagem: `Erro ${err}`
    })
  }
}
///////////////// Deletar//////////////
// exports.delete =  async(req,res)=>{
//   const {id} = req.params;
//   await Users.destroy({where: {id}})
//   .then(()=>{
//     return res.json({
//       erro: false,
//       mensagem: "Usuário apagado com sucesso!"
//     });
//   }).catch((err)=>{
//     return res.status(400).json({
//       erro: true,
//       mensagem: `Erro: ${err} Usuário não apagado...`
//     })
//   })
// }
exports.update = async(req,res)=>{
  const {id} = req.body;

  await Users.update(req.body, {where: {id}})
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: "Usuário alterado com sucesso!"
    })
  }).catch((err)=>{
    return res.status(400).json({
      erro: true,
      mensagem: `Erro: Usuário não encontrado ...${err}`
    })
  })
}
