const express = require("express");
const router = express.Router();
const MsgController = require("../controllers/msgController");

// Rotas para o recurso de usuário
router.get("/msg", MsgController.getAllUsers);
router.get("/msg/:id", MsgController.getUserById);
router.post("/msg", MsgController.createUser);
router.put("/msg/:id", MsgController.updateUser);
router.delete("/msg/:id", MsgController.deleteUser);

module.exports = router;
