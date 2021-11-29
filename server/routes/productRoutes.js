import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

/**
 * @description  Fetch all products
 * @route GET /api/products
 * @access Public
 * @returns {object} 200 - An array of products
 * @returns {Error} 500 - Server error
 * @returns {Error} 404 - No products found
 */
router.route("/").get(
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

/**
 * @description  Fetch a single product
 * @route GET /api/products/:id
 * @access Public
 * @returns {object} 200 - A single product
 * @returns {Error} 500 - Server error
 * @returns {Error} 404 - No product found
 */
router.route("/:id").get(
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
