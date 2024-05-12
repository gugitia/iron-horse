const express = require("express");
const cors = require("cors");

const { connect } = require("./config/server");

const userController = require("./controllers/userController");

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.get('/user:id', userController.getUserById);
app.get('/user', userController.getAllUsers);
app.post('/user', userController.createUser);
app.put("/user:id", userController.updateUser);
app.delete("/user:id", userController.deleteUser);

app.listen(3400, () => {
  console.log("Servidor iniciado na porta 3400.");
});
