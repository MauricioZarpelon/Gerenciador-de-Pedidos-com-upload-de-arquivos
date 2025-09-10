const express = require("express");
const path = require("path");

const app = express();

// Configura a pasta "public" para servir os arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Rota principal (abre o index.html automaticamente)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Servidor rodando em http://localhost:" + PORT);
});
