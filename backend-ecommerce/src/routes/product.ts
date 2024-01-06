import express from "express";
const app = express.Router();

import { adminOnly } from "../middlewares/auth.js";
import { newProduct } from "../controllers/products.js";
import { singleUpload } from "../middlewares/multer.js";

app.post("/new",adminOnly,singleUpload,newProduct)


export default app;