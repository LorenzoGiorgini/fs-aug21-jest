import express from "express";
import { ProductModel } from "./model";

const productsRouter = express.Router();

productsRouter
  .get("/", async (req, res) => {
    const products = await ProductModel.find({});
    res.status(200).send(products);
  })
  .post("/", async (req, res) => {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).send(product);
  });

productsRouter
  .get("/:id", async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  })
  .delete("/:id", async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (product) {
      res.status(204).send({});
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  })
  .put("/:id", async (req, res) => {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (product) {
      res.status(203).send(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  });

export default productsRouter;
