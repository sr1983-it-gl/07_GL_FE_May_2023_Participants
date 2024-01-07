
import {MainPanelView} from "./main-panel-view.js"

import {FoodCategoryFactory} from "../food-category/model/food-category-factory.js"

class MainPanelController {

  init(){

    const foodCategories = FoodCategoryFactory.getCategories();

    const mainPanelView = new MainPanelView(foodCategories);
    mainPanelView.construct();

  }
}


export {MainPanelController}