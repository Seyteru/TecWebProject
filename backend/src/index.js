const express = require("express");
const sequelize = require("./config/dbconnection");
const User = require("./datamodels/User");
const Article = require("./datamodels/Article");
const app = express();
const PORT = "5432";

app.use(express.json());

sequelize.authenticate()
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log("Connection Failure", err));

sequelize.sync({ force: true })
    .then(() => console.log("Models Sync Successful"))
    .catch(err => console.log("Models Sync Failure", err));

app.get("/", (req, res) => {
    res.send("Welcome to PRESSPORTAL");
});

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});

Article.belongsTo(User);
User.hasMany(Article);