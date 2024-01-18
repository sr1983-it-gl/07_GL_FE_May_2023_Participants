
import { FoodItem } from "./model/food-item-model.js";
import {FOOD_ITEMS_DATA_ARRAY} from "./model/food-items-data.js"

class FoodItemUtils {

  static getFoodItems(foodCategoryObj){

    const foodItemsResult = new Array();

    FOOD_ITEMS_DATA_ARRAY.forEach( (foodItemData) => {

      if (foodItemData.category == foodCategoryObj.id){

        const foodItemObj = FoodItemUtils.convert(foodItemData);
        foodItemsResult.push(foodItemObj);
      }
    })

    return foodItemsResult;

  }

  static getFoodItem(foodItemId){

    const foodItemDataObj = FOOD_ITEMS_DATA_ARRAY.find( (foodItemData) => {

      if (foodItemData.id == foodItemId){
        return foodItemData;
      }
    })

    const foodItemObj = FoodItemUtils.convert(foodItemDataObj);
    return foodItemObj;
  }


  static getImagePath(foodItemId){

    const foodItemDataObj = FOOD_ITEMS_DATA_ARRAY.find( (foodItemData) => {

      if (foodItemData.id == foodItemId){
        return foodItemData;
      }
    })

    return foodItemDataObj.img;
  }


  static convert(foodItemData){

        // TODO

    const foodItemObj = new FoodItem(
    foodItemData.id,
    foodItemData.name,
    foodItemData.price,
    foodItemData.rating,
    foodItemData.category,
    foodItemData.img);

    return foodItemObj;
  }

}

export {FoodItemUtils}