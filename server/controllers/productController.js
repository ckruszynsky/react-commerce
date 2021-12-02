import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

/**
 * @description  Fetch all products
 * @route GET /api/products
 * @access Public
 * @returns {object} 200 - An array of products
 * @returns {Error} 500 - Server error
 * @returns {Error} 404 - No products found
 */
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

/**
 * @description  Fetch a single product
 * @route GET /api/products/:id
 * @access Public
 * @returns {object} 200 - A single product
 * @returns {Error} 500 - Server error
 * @returns {Error} 404 - No product found
 */
const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json(product);
});

export { getProducts, getProductById };
