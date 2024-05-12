const express = require("express");
const cors = require("cors");

const { connect } = require("./config/server");

const userRoutes = require("./routes/userRoutes")

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use('/user', userRoutes);


app.listen(3400, () => {
  console.log("Servidor iniciado na porta 3400.");
});
