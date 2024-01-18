
import {FoodItemUtils} from "../food-item/food-item-utils.js"

import {FoodItemView} from "../food-item/view/food-item-view.js"
import {FoodCategoryView} from "../food-category/view/food-category-view.js";

class MainPanelView {

  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  construct(){

    // Food-Item
    this.foodCategories.forEach ( (foodCategoryObj) => {

      const foodItems = FoodItemUtils.getFoodItems(foodCategoryObj);

      foodItems.forEach( (foodItemModelObj) => {

        const foodItemView = new FoodItemView(foodItemModelObj);

        const foodItemHtmlFragment = foodItemView.construct();

        foodItemView.placeFoodItemToFoodCategory(
          foodItemHtmlFragment, foodCategoryObj);
          
      })

    })

    // Food-Category
    this.foodCategories.forEach((foodCategory) => {


      const foodCategoryView = new FoodCategoryView(foodCategory);
      const foodCategoryHtmlFragment = foodCategoryView.construct();

      const categoryListHtmlElement 
        = document.getElementById("category-list");

      categoryListHtmlElement.appendChild(foodCategoryHtmlFragment);
    })
  
  }

}

export {MainPanelView}