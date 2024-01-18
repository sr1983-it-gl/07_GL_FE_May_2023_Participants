
import { CartModel } from "./cart-model.js";
import { CartView } from "./cart-view.js";

class CartController {

  constructor(){

    // this.cartModel = this.createTestCartModel();

    this.cartModel = new CartModel();
    this.cartView = new CartView(this.cartModel);
  }

  init(){

    // this.cartView.construct();
  }

  createTestCartModel(){

    const testCartModel = new CartModel();

    testCartModel.add(1);
    testCartModel.add(7);
    testCartModel.add(1);
    testCartModel.add(20);
    testCartModel.add(7);
    testCartModel.add(7);
    testCartModel.add(20);

    return testCartModel;
  }

}

export {CartController}