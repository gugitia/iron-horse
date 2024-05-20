const express = require("express");
const cors = require("cors");

require('dotenv').config();

const { connect } = require("./config/server");

const userRoutes = require("./routes/userRoutes");
const horseRoutes = require("./routes/horseRoutes");
const messageRoutes = require("./routes/msgRoutes");
const dealRoutes = require("./routes/dealRoutes");

const app = express();

const PORT = process.env.PORT || 3400;

app.use(cors());
app.use(express.json());

connect();

app.use('/user', userRoutes);
app.use('/horse', horseRoutes);
app.use('/msg', messageRoutes);
app.use('/deal', dealRoutes);


app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`);
});
