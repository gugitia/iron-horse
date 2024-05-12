const express = require("express");
const router = express.Router();
const MsgController = require("../controllers/msgController");

// Rotas para o recurso de usuário
router.get("/", MsgController.getAllMessages);
router.get("/:id", MsgController.getMessageById);
router.post("/", MsgController.createMessage);
router.delete("/:id", MsgController.deleteMessage);

module.exports = router;
