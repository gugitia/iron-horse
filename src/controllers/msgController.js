const express = require("express");
const router = express.Router();
const Message = require("../models/msg");

const MsgController = {
  async createMessage(req, res) {
    try {
      const { message, senderId, getterId } = req.body;
      const newMessage = new Message({ message, senderId, getterId });
      await newMessage.save();
      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Erro ao adicionar mensagem:", error);
      res.status(500).json({ message: "Erro ao criar mensagem." });
    }
  },

  async getAllMessages(req, res) {
    try {
      const message = await Message.find();
      res.json(message);
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
      res.status(500).json({ message: "Erro ao buscar mensagens." });
    }
  },

  async getMessageById(req, res) {
    try {
      const message = await Message.findById(req.params.id);
      if (!message) {
        return res.status(404).json({ message: "Mensagem não encontrado." });
      }
      res.json(message);
    } catch (error) {
      console.error("Erro ao buscar mensagem por ID:", error);
      res.status(500).json({ message: "Erro ao buscar mensagem por ID." });
    }
  },

  async deleteMessage(req, res) {
    try {
      const message = await Message.findByIdAndDelete(req.params.id);
      if (!message) {
        return res.status(404).json({ message: "Mensagem não encontrado." });
      }
      res.json({ message: "Mensagem excluído com sucesso." });
    } catch (error) {
      console.error("Erro ao excluir mensagem por ID:", error);
      res.status(500).json({ message: "Erro ao excluir mensagem por ID." });
    }
  },
};

module.exports = MsgController;
