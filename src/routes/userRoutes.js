const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rotas para o recurso de usuário
router.get('/login', userController.loginUser)
router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);
router.post('/cad', userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
