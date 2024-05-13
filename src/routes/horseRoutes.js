const express = require("express");
const router = express.Router();
const HorseController = require("../controllers/horseController");

// Rotas para o recurso de usuário
router.get("/horse", HorseController.getAllHorses);
router.get("/horse/:id", HorseController.getHorseById);
router.post("/horse", HorseController.createHorse);
router.put("/horse/:id", HorseController.updateHorse);
router.delete("/horse/:id", HorseController.deleteHorse);

module.exports = router;
