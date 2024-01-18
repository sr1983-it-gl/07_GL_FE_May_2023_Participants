

class MCIntegrationView {

  constructor(cartModel){

      this.cartModel = cartModel;
  }

	displayToggleView(){

		document.getElementById('food-items').classList.toggle('food-items');
		document.getElementById('category-list').classList.toggle('food-items');
		document.getElementById('category-header').classList.toggle('toggle-category');
		document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
		document.getElementById('cart-page').classList.toggle('cart-toggle');
		document.getElementById('checkout').classList.toggle('cart-toggle');    
	}
   
	enableToggleHeart(foodItemId){

		const foodItemObj = document.getElementById(foodItemId);
		foodItemObj.classList.add("toggle-heart");
	}

	updateTotalNoOfItemsText(){

		const noOfItemsElement = document.getElementById('cart-plus')
		const totalItems = this.cartModel.getTotalItems();
		console.log(`Total Items` + totalItems);
		noOfItemsElement.innerText = `${totalItems} Items`;
	}
	
}

export {MCIntegrationView}