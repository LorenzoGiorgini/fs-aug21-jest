import express from "express";
import productsRouter from "./products/index";


process.env.TS_NODE_DEV && require("dotenv").config();

const app = express();

app.use(express.json())

app.get('/test', (req, res) => {
    res.send({ message: "Test successful" });
})

app.use('/products', productsRouter)

export { app }