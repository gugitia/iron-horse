const express = require("express");
const router = express.Router();
const DealController = require("../controllers/dealController");

// Rotas para o recurso de usuário
router.get("/deal", DealController.getAllDeals);
router.get("/deal/:id", DealController.getDealById);
router.post("/deal", DealController.createDeal);
router.put("/deal/:id", DealController.updateDeal);

module.exports = router;
