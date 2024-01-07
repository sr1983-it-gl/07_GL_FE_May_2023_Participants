
import {FoodItem} from "../model/food-item-model.js"

class FoodItemView {

  constructor(foodItemModel){

    this.foodItemModel = foodItemModel;
  }

  construct(){

    const itemCardDiv = document.createElement("div");

    itemCardDiv.setAttribute("id", "item-card");

    const cardTopDiv = document.createElement("div")
    cardTopDiv.setAttribute("id", "card-top");

      const ratingElement = document.createElement("i");
      ratingElement.setAttribute("class", "fa fa-star");
      ratingElement.setAttribute("id", "rating");
      ratingElement.innerText = this.foodItemModel.rating;

      const idElement = document.createElement("i");
      idElement.setAttribute("class", "fa fa-heart-o add-to-cart");
      idElement.setAttribute("id", this.foodItemModel.id);

    cardTopDiv.appendChild(ratingElement);
    cardTopDiv.appendChild(idElement);


    // Image

    const imageElement = document.createElement("img");
    // imageElement.setAttribute("src", this.foodItemModel.imagePath)
    imageElement.src = this.foodItemModel.imagePath;

    // Food item Namee

    const foodItemNameElement = document.createElement("p");
    foodItemNameElement.setAttribute("id", "item-name");
    foodItemNameElement.innerText = this.foodItemModel.name;

    // Price

    const priceElement = document.createElement("p");
    priceElement.setAttribute("id", "item-price");
    priceElement.innerText = `Price : $ ${this.foodItemModel.price}`;

    itemCardDiv.appendChild(cardTopDiv);
    itemCardDiv.appendChild(imageElement);
    itemCardDiv.appendChild(foodItemNameElement);
    itemCardDiv.appendChild(priceElement);

    return itemCardDiv;
  }

  placeFoodItemToFoodCategory(foodItemHtmlFragment, foodCategoryObj){

    const foodCategoryHtmlElement 
      = document.getElementById(foodCategoryObj.id)
  
    foodCategoryHtmlElement.appendChild(foodItemHtmlFragment);
  }


}

export {FoodItemView}