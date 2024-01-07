
const FOOD_ITEM_URL = 'http://localhost:8080/food-item';

const INTERNAL_PROPERTY_FOOD_ITEM = 20;

class FoodItem {

  constructor(id, name, price, rating, foodCategory, imagePath){

    this.id = id;
    this.name = name;
    this.price = price;

    this.rating = rating;

    // TODO - ?
    this.foodCategory = foodCategory;
    this.imagePath = imagePath;
  }

}

export {FoodItem, FOOD_ITEM_URL}