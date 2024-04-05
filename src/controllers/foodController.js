import { FoodModel } from "../models/foodModel.js";
// import { TaskDTO } from "../dtos/foodDTO.js";

export class FoodController {
  async getAllFoods(_, res) {
    try {
      const foods = await FoodModel.getAll();
      console.debug(foods);
      res.json(foods);
    } catch (error) {
      console.error("Error fetching foods:", error);
      res.status(500).json({ error: "Error fetching foods" });
    }
  }

  async getFoodById(req, res) {
    const { id } = req.params;
    const product = await FoodModel.getById(+id);
    console.debug(product);
    res.json(product);
  }

  async addFood(req, res) {
    try {
      // const taskDTO = new TaskDTO(req.body);
      // const errors = await validate(taskDTO);
      // if (errors.length > 0) {
      //   return res
      //     .status(400)
      //     .json({ errors: errors.map((error) => error.constraints) });
      // }
      // const food = await FoodModel.create(taskDTO);
      const food = await FoodModel.create(req.body);
      console.debug(food);
      res.status(201).json(food);
    } catch (error) {
      console.error("Error adding food:", error);
      res.status(500).json({ error: "Error adding food" });
    }
  }
}
