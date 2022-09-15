const usersRoutes = require('express').Router();
const users = require('../controller/users.controller');
// const { validaToken } = require('../middlewares/auth');


usersRoutes.get("/all", users.findAll);
// usersRoutes.get("/show/:id",validaToken, users.findOne);
usersRoutes.post("/create", users.create);
usersRoutes.get("/recovery ", users.recovery);
usersRoutes.put("/update", users.update);
// usersRoutes.delete("/delete/:id",validaToken, users.delete);
usersRoutes.post("/login", users.login);


module.exports = usersRoutes;