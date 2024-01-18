

import {FoodCategory} from "./food-category-model.js"

import {FOOD_ITEM_URL, FoodItem
  /*, INTERNAL_PROPERTY_FOOD_ITEM */} from "../../food-item/model/food-item-model.js"
import { FoodItemUtils } from "../../food-item/food-item-utils.js";

class FoodCategoryFactory {

  // constructor(){
  //   this.a = 'abc';
  // }

  // Static 
  static getCategories(){


    const foodCategories = new Array();

    // TODO - ImagePath for category

    const biryaniCategory = 
      new FoodCategory("biryani", "Biryani", 
        FoodItemUtils.getImagePath(1));

    // console.log(FoodCategory.getSomething());

    // console.log(biryaniCategory.getName());

    foodCategories.push(biryaniCategory)

    const chickenCategory = 
      new FoodCategory("chicken", "Chicken Delicious", 
      FoodItemUtils.getImagePath(10));
    foodCategories.push(chickenCategory)

    const paneerCategory = 
      new FoodCategory("paneer", "Paneer Mania", 
      FoodItemUtils.getImagePath(16));
    foodCategories.push(paneerCategory)

    const vegCategory = 
      new FoodCategory("vegetable", "Pure Veg Dishes", 
      FoodItemUtils.getImagePath(23));
    foodCategories.push(vegCategory)

    const chineseCategory = 
      new FoodCategory("chinese", "Chinese Corner", 
      FoodItemUtils.getImagePath(30));
    foodCategories.push(chineseCategory)

    const southIndianCategory = 
      new FoodCategory("south indian", "South Indian", 
      FoodItemUtils.getImagePath(37));
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

