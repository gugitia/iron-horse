const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/user");

const UserController = {
  async createUser(req, res) {
    try {
      const { fullname, username, email, password, document, adress, profileImage } = req.body;

      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({ fullname, username, email, hashedPassword, document, adress, profileImage });

      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ message: "Erro ao criar usuário." });
    }
  },

  async loginUser(req, res) {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'E-mail incorreto ou não registrado.' });
  }
    const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'E-mail ou senha incorretos.' });
  }
    res.json({ message: 'Login bem-sucedido!' });
}
  catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login.' });
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

module.exports = UserController;
