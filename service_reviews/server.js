const express = require('express');
const bodyParser = require('body-parser');
const serviceReviewsRoutes = require('./routes/service_reviews_routes');

const app = express();

// Middleware para analizar solicitudes JSON entrantes
app.use(bodyParser.json());

// Aquí puedes agregar tus rutas
app.use('/service-reviews', serviceReviewsRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
