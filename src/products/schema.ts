import mongoose from "mongoose"

const { Schema } = mongoose


export const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true })