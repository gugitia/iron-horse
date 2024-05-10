const express = require("express");
const router = express.Router();
const Message = require("../models/msg");

const MsgController = {
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const newHorse = new Message({ username, email, password });
      await newHorse.save();
      res.status(201).json(newHorse);
    } catch (error) {
      console.error("Erro ao adicionar cavalo:", error);
      res.status(500).json({ message: "Erro ao criar cavalo." });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).json({ message: "Erro ao buscar usuários." });
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
      res.json(user);
    } catch (error) {
      console.error("Erro ao buscar usuário por ID:", error);
      res.status(500).json({ message: "Erro ao buscar usuário por ID." });
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
      res.json(user);
    } catch (error) {
      console.error("Erro ao atualizar usuário por ID:", error);
      res.status(500).json({ message: "Erro ao atualizar usuário por ID." });
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
      res.json({ message: "Usuário excluído com sucesso." });
    } catch (error) {
      console.error("Erro ao excluir usuário por ID:", error);
      res.status(500).json({ message: "Erro ao excluir usuário por ID." });
    }
  },
};

module.exports = MsgController;
