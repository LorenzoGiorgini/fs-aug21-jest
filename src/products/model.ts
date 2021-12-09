import { ProductSchema } from "./schema";
import mongoose from "mongoose";
const { model } = mongoose;

export const ProductModel = model("products", ProductSchema);
