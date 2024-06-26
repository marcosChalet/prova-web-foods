import express from "express";
import { FoodController } from "../controllers/foodController.js";

export const router = express.Router();
const foodController = new FoodController();

router.get("/api/foods", foodController.getAllFoods);
router.get("/api/foods/:id", foodController.getFoodById);
router.post("/api/foods", foodController.addFood);
router.put("/api/foods/:id", foodController.updateFood);
router.delete("/api/foods/:id", foodController.deleteFood);
