const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { connect } = require("./src/config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

connect();

app.listen(3400, () => {
  console.log("Servidor iniciado na porta 3400.");
});
