import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.routes.js'

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json()); // allows us to accept JSON Data in the req.body

app.use('/api/products', productRoutes)


app.listen(PORT, () => { 
  connectDB();
  console.log('Server Started at http://localhost:' + PORT)});
