

import {FoodCategory} from "./food-category-model.js"

import {FOOD_ITEM_URL, FoodItem
  /*, INTERNAL_PROPERTY_FOOD_ITEM */} from "../../food-item/model/food-item-model.js"

class FoodCategoryFactory {

  // constructor(){
  //   this.a = 'abc';
  // }

  // Static 
  static getCategories(){


    const foodCategories = new Array();

    // TODO - ImagePath for category

    const biryaniCategory = 
      new FoodCategory("biryani", "Biryani", "");

    // console.log(FoodCategory.getSomething());

    // console.log(biryaniCategory.getName());

    foodCategories.push(biryaniCategory)

    const chickenCategory = 
      new FoodCategory("chicken", "Chicken Delicious", "");
    foodCategories.push(chickenCategory)

    const paneerCategory = 
      new FoodCategory("paneer", "Paneer Mania", "");
    foodCategories.push(paneerCategory)

    const vegCategory = 
      new FoodCategory("vegetable", "Pure Veg Dishes", "");
    foodCategories.push(vegCategory)

    const chineseCategory = 
      new FoodCategory("chinese", "Chinese Corner", "");
    foodCategories.push(chineseCategory)

    const southIndianCategory = 
      new FoodCategory("south indian", "South Indian", "");
    foodCategories.push(southIndianCategory)

    // ///

    // console.log(FOOD_ITEM_URL);

    // const foodItem =new FoodItem();

    // // console.log(INTERNAL_PROPERTY_FOOD_ITEM);
    // ///

    return foodCategories;

  }
}

// const foodCategoryFactory = new FoodCategoryFactory();
// foodCategoryFactory.getCategories();

// FoodCategoryFactory.getCategories();


export {FoodCategoryFactory}

