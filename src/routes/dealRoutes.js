const express = require("express");
const router = express.Router();
const DealController = require("../controllers/dealController");

// Rotas para o recurso de usuário
router.get("/", DealController.getAllDeals);
router.get("/:id", DealController.getDealById);
router.get("/buyer/:id", DealController.getDealByBuyer);
router.get("/seller/:id", DealController.getDealBySeller);
router.post("/", DealController.createDeal);
router.put("/:id", DealController.updateDeal);

module.exports = router;
