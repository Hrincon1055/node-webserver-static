const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;
const hbs = require("hbs");
// Handelbars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Henry Rincon",
    titulo: "Curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Henry Rincon",
    titulo: "Curso de node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Henry Rincon",
    titulo: "Curso de node",
  });
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(port, () => {
  console.log(`ejemplo app listening at http://localhost:${port}`);
});
