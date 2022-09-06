const usersRoutes = require('express').Router();
const users = require('../controllers/users.controller');
const { validaToken } = require('../middlewares/auth');

usersRoutes.get("/all",validaToken, users.findAll);
usersRoutes.get("/show/:id",validaToken, users.findOne);
usersRoutes.post("/create", validaToken, users.create);
usersRoutes.get("/recovery ", validaToken, users.recovery);
// usersRoutes.put("/update",validaToken, users.update);
// usersRoutes.delete("/delete/:id",validaToken, users.delete);
usersRoutes.post("/login", users.login);


module.exports = usersRoutes;