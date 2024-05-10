const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Rotas para o recurso de usuário
router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
