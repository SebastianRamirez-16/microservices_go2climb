const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database'); 
const Tourist = require('./models/tourist'); 

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.get('/tourists', async (req, res) => {
  try {
    const tourists = await Tourist.findAll();
    res.json(tourists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/tourists', async (req, res) => {
  try {
    const tourist = await Tourist.create(req.body);
    res.status(201).json(tourist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});
