const express = require("express");
const router = express.Router();
const DealController = require("../controllers/dealController");

// Rotas para o recurso de usuário
router.get("/deal", DealController.getAllUsers);
router.get("/deal/:id", DealController.getUserById);
router.post("/deal", DealController.createUser);
router.put("/deal/:id", DealController.updateUser);
router.delete("/deal/:id", DealController.deleteUser);

module.exports = router;
