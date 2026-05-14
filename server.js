const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sert tous les fichiers du dossier (index.html par défaut)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Site en ligne sur le port ${PORT}`);
});
