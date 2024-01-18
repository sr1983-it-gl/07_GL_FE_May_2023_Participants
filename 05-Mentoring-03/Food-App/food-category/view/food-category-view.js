
import {FoodCategory} from "../model/food-category-model.js";

class FoodCategoryView {

  constructor(foodCategory){

    this.foodCategory = foodCategory
  }

  construct(){

    const listCardElement = document.createElement("div");
    listCardElement.setAttribute("class", "list-card");

      const imageElement = document.createElement("img");
      imageElement.src = this.foodCategory.imagePath;

      const anchorElement = document.createElement("a");
      anchorElement.setAttribute("class", "list-name");
      anchorElement.setAttribute("href", `#${this.foodCategory.id}`);
      anchorElement.innerText = this.foodCategory.name

    listCardElement.appendChild(imageElement);
    listCardElement.appendChild(anchorElement);

    return listCardElement;
  }
}

export {FoodCategoryView}