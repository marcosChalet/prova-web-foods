import { prisma } from "../../prisma/client.js";

export class FoodModel {
  static async getAll() {
    return await prisma.food.findMany();
  }

  static async getById(id) {
    return await prisma.food.findUnique({
      where: { id },
    });
  }

  static async create(food) {
    return await prisma.food.create({
      data: food,
    });
  }

  static async update(id, data) {
    return await prisma.food.update({
      where: { id },
      data,
    });
  }

  static async delete(id) {
    return await prisma.food.delete({
      where: { id },
    });
  }
}
