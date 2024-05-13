const express = require("express");
const router = express.Router();
const Horse = require("../models/horse");

const HorseController = {
  async createHorse(req, res) {
    try {
      const { horseName, description, service, characteristics, ownerId, homeCity, Images } = req.body;
      const newHorse = new Horse({ 
        horseName, 
        description, 
        service, 
        characteristics, 
        ownerId, 
        homeCity, 
        Images 
    });
      await newHorse.save();
      res.status(201).json(newHorse);
    } catch (error) {
      console.error("Erro ao adicionar cavalo:", error);
      res.status(500).json({ message: "Erro ao criar cavalo." });
    }
  },

  async getAllHorses(req, res) {
    try {
      const horses = await Horse.find();
      res.json(horses);
    } catch (error) {
      console.error("Erro ao buscar cavalos:", error);
      res.status(500).json({ message: "Erro ao buscar cavalos." });
    }
  },

  async getHorseById(req, res) {
    try {
      const horse = await Horse.findById(req.params.id);
      if (!horse) {
        return res.status(404).json({ message: "Cavalo não encontrado." });
      }
      res.json(horse);
    } catch (error) {
      console.error("Erro ao buscar cavalo por ID:", error);
      res.status(500).json({ message: "Erro ao buscar cavalo por ID." });
    }
  },

  async updateHorse(req, res) {
    try {
      const horse = await Horse.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!horse) {
        return res.status(404).json({ message: "Cavalo não encontrado." });
      }
      res.json(horse);
    } catch (error) {
      console.error("Erro ao atualizar Cavalo por ID:", error);
      res.status(500).json({ message: "Erro ao atualizar cavalo por ID." });
    }
  },

  async deleteHorse(req, res) {
    try {
      const horse = await Horse.findByIdAndDelete(req.params.id);
      if (!horse) {
        return res.status(404).json({ message: "Cavalo não encontrado." });
      }
      res.json({ message: "Cavalo excluído com sucesso." });
    } catch (error) {
      console.error("Erro ao excluir cavalo por ID:", error);
      res.status(500).json({ message: "Erro ao excluir cavalo por ID." });
    }
  },
};

module.exports = HorseController;
