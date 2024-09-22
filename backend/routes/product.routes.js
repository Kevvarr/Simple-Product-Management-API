
// import express (for counter) and controller for CRUD operations
import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

// router initialization
const router = express.Router();

// GET operation
router.get("/", getProducts);
// POST operation
router.post("/", createProduct);
// PUT operation
router.put("/:id", updateProduct);
// DELETE operation
router.delete("/:id", deleteProduct);

// export for main app use
export default router;