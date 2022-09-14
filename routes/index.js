const router = require('express').Router();

// Routas de usuarios
const usersRoutes = require('./users.routes');
router.use('/user',usersRoutes);

module.exports = router;

