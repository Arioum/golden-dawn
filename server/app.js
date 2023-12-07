require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const connectDB = require('./db/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

const PORT = process.env.PROD_URL || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
