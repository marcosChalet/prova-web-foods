const {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
} = require("class-validator");

export class FoodDTO {
  @IsNotEmpty({ message: "ID is required" })
  id;

  @IsNotEmpty({ message: "Name is required" })
  @IsString({ message: "Name must be a string" })
  name;

  @IsNotEmpty({ message: "Category is required" })
  @IsString({ message: "Category must be a string" })
  category;

  @IsNotEmpty({ message: "Quantity is required" })
  @IsNumber({}, { message: "Quantity must be a number" })
  quantity;

  @IsNotEmpty({ message: "Expiration date is required" })
  @IsDateString({ message: "Expiration date must be a valid date string" })
  expirationDate;

  @IsNotEmpty({ message: "Price is required" })
  @IsNumber({}, { message: "Price must be a number" })
  price;

  constructor({ id, name, category, quantity, expirationDate, price }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.expirationDate = expirationDate;
    this.price = price;
  }
}
