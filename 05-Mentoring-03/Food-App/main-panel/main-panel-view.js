
import {FoodItemUtils} from "../food-item/food-item-utils.js"

import {FoodItemView} from "../food-item/view/food-item-view.js"

class MainPanelView {

  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  construct(){


    this.foodCategories.forEach ( (foodCategoryObj) => {

      const foodItems = FoodItemUtils.getFoodItems(foodCategoryObj);

      foodItems.forEach( (foodItemModelObj) => {

        const foodItemView = new FoodItemView(foodItemModelObj);

        const foodItemHtmlFragment = foodItemView.construct();

        foodItemView.placeFoodItemToFoodCategory(
          foodItemHtmlFragment, foodCategoryObj);
          
      })

    })

  }

}

export {MainPanelView}