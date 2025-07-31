
// import express/*, { Request, Response }*/ from 'express'; // uncomm when uploading to a dB
import dotenv from 'dotenv';
import cors from 'cors';
// import multer from 'multer';
// import path from 'path';
// import { fileURLToPath } from 'url';
import submitOrderRoute from './api/submitOrder.js';
import resendConfirmationRoute from './api/resendConfirmation.js' //added .js for the dumb render stuff
import createCheckoutSessionRoute from './api/createCheckoutSession.js';

// Define __filename and __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url); // for uploading stuff, but i am not doing that yet
// const __dirname = path.dirname(__filename); // for uploading stuff, but i am not doing that yet

// // Load environment variables
dotenv.config();

// const express=require("express"); changed with import for stupid render
import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
// const path = require("path");

// const storage = multer.memoryStorage(); //-- for uploading stuff, but i am not doing that yet

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
// });


// Middleware
app.use(express.json());
app.use(cors());

// Define interface for request with file -- for uploading, not yet
// interface MulterRequest extends Request {
//   file?: Express.Multer.File;
// }

// Process 3D print orders

app.use('/api', submitOrderRoute);
app.use('/api',resendConfirmationRoute);
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use('/api', createCheckoutSessionRoute);

export default app;