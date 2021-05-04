require("dotenv").config();

const cors = require("cors");
const express = require("express");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(process.env.PORT, () => {
    console.log(`SERVICE RUNING AT PORT:${process.env.PORT}`);
});

module.exports = app;
