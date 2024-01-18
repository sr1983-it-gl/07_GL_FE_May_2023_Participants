
import {CartController} from "../cart/cart-controller.js"
import { MCIntegrationView } from "./mc-integration-view.js";

class MCIntegrationController {

  constructor(cartController){

    this.cartController = cartController;
    this.mcIntegrationView = 
      new MCIntegrationView(this.cartController.cartModel);    
  }

	init(){

		this.addListener();
		this.addToCartListener();

	}

  addListener(){

		const cartElement = document.getElementById('cart-plus');
		cartElement.addEventListener('click', (event) => {

			if (this.cartController.cartModel.hasItems()){

				this.mcIntegrationView.displayToggleView();
			}else{
				alert("Currently no item in cart!");
			}
		});

  }


  addToCartListener(){

		const allItems = document.querySelectorAll(".add-to-cart");
		
		allItems.forEach( (item) => {
	
			item.addEventListener("click", (event) => {

				const target = event.target;
        
				const foodItemId = target.getAttribute("id");
				
				if (!this.cartController.cartModel.isItemPresent(foodItemId)){
						this.mcIntegrationView.enableToggleHeart(foodItemId);
				}else{
						alert("Item added to cart");
				}
		
				this.cartController.cartModel.add(foodItemId);        
				this.mcIntegrationView.updateTotalNoOfItemsText();    

				this.cartController.cartView.construct();
		})
		})

	}
}

export {MCIntegrationController}