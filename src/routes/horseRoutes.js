const express = require("express");
const router = express.Router();
const HorseController = require("../controllers/horseController");

// Rotas para o recurso de usuário
router.get("/", HorseController.getAllHorses);
router.get("/:id", HorseController.getHorseById);
router.get("/userHorses/:id", HorseController.getHorseByOwner);
router.post("/", HorseController.createHorse);
router.put("/:id", HorseController.updateHorse);
router.delete("/:id", HorseController.deleteHorse);

module.exports = router;
