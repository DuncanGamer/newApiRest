const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
//rutas
router.get ('/all', userController.getUsers);

router.get ('/create', userController.getcreateUser);

router.get ('/update', userController.getupdateUser);

router.get ('/delete', userController.getdeleteUser);

router.post ('/create', userController.createUser);

router.put ('/update/:id', userController.updateUser);

router.delete ('/delete/:id', userController.deleteUser);




module.exports = router;