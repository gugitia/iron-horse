const express = require("express");
const cors = require("cors");

const { connect } = require("./config/server");

const userRoutes = require("./routes/userRoutes");
const horseRoutes = require("./routes/horseRoutes");
const messageRoutes = require("./routes/msgRoutes");
const dealRoutes = require("./routes/dealRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use('/user', userRoutes);
app.use('/horse', horseRoutes);
app.use('/msg', messageRoutes);
app.use('/deal', dealRoutes);


app.listen(3400, () => {
  console.log("Servidor iniciado na porta 3400.");
});
