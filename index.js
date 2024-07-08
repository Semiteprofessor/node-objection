require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("./knexfile");
const userRoutes = require("./routes/users.route");

const app = express();

const knex = Knex(knexConfig.development);
Model.knex(knex);

const PORT = 6000;

app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
