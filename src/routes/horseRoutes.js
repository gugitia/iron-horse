const express = require("express");
const router = express.Router();
const HorseController = require("../controllers/horseController");

// Rotas para o recurso de usuário
router.get("/horse", HorseController.getAllUsers);
router.get("/horse/:id", HorseController.getUserById);
router.post("/horse", HorseController.createUser);
router.put("/horse/:id", HorseController.updateUser);
router.delete("/horse/:id", HorseController.deleteUser);

module.exports = router;
