const express = require("express");
const router = express.Router();
const Deal = require("../models/deal");

const DealController = {
  async createDeal(req, res) {
    try {
      const { place, date, sellerId, horseId, buyerId, service, value, status } = req.body;
      const newDeal = new Deal({ place, date, sellerId, horseId, buyerId, service, value, status });
      await newDeal.save();
      res.status(201).json(newDeal);
    } catch (error) {
      console.error("Erro ao adicionar acordo:", error);
      res.status(500).json({ message: "Erro ao criar acordo." });
    }
  },

  async getAllDeals(req, res) {
    try {
      const deals = await Deal.find();
      res.json(deals);
    } catch (error) {
      console.error("Erro ao buscar acordos:", error);
      res.status(500).json({ message: "Erro ao buscar acordos." });
    }
  },

  async getDealById(req, res) {
    try {
      const deal = await Deal.findById(req.params.id);
      if (!deal) {
        return res.status(404).json({ message: "Acordo não encontrado." });
      }
      res.json(deal);
    } catch (error) {
      console.error("Erro ao buscar acordos por ID:", error);
      res.status(500).json({ message: "Erro ao buscar acordos por ID." });
    }
  },

  async getDealByBuyer(req, res) {
    try {
      const deal = await Deal.find({buyerId: req.params.buyerId});
      if (!deal) {
        return res.status(404).json({ message: "não foi encontrado nenhum acordo para esse comprador"})
      }
      res.json(deal);
    } catch (error) {
      console.error("erro ao buscar acordos para esse comprador", error);
      res.status(500).json({ message: "erro ao buscar acordos para esse comprador"})
    }
  },

  async getDealBySeller(req, res) {
    try {
      const deal = await Deal.find({sellerId: req.params.sellerId});
      if (!deal) {
        return res.status(404).json({ message: "não foi encontrado nenhum acordo para esse vendedor"})
      }
      res.json(deal);
    } catch (error) {
      console.error("erro ao buscar acordos para esse vendedor", error);
      res.status(500).json({ message: "erro ao buscar acordos para esse vendedor"})
    }
  },

  async updateDeal(req, res) {
    try {
      const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!deal) {
        return res.status(404).json({ message: "Acordo não encontrado." });
      }
      res.json(deal);
    } catch (error) {
      console.error("Erro ao atualizar acordo por ID:", error);
      res.status(500).json({ message: "Erro ao atualizar acordo por ID." });
    }
  },
};

module.exports = DealController;
