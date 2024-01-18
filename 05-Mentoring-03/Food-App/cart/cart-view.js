
import { FoodItemUtils } from "../food-item/food-item-utils.js";
import { CartModel } from "./cart-model.js";

class CartView {

  constructor(cartModel){

    this.cartModel = cartModel;
  }

  construct(){

    this.constructCartTableView();
    this.constructCartCheckoutView();
  }

  constructCartTableView(){

		const cartItemsTable = document.getElementById('table-body');
		cartItemsTable.innerHTML= '';
	
		const cartItems = this.cartModel.getItems();
		
    // [1, 7, 15]
		for (let foodItemId of cartItems.keys()){
	
		  const foodItemObj 
			= FoodItemUtils.getFoodItem(foodItemId);
	
		  const tableRow= document.createElement('tr');
	
		  // Create row data
	
			// For Image
			const imageElement = document.createElement('td');
			const imageObj = document.createElement('img');
			
			imageObj.src= foodItemObj.imagePath;
			imageElement.appendChild(imageObj);
	
			// For Item Name
			const nameElement = document.createElement('td');
			nameElement.innerText= foodItemObj.name;
		
			// For Quantity Increase / Decrease Buttons
		
			const quantityElement= document.createElement('td');
			
				const decreaseButton = document.createElement('button');
				decreaseButton.innerText= '-';
			
				const spanElement = document.createElement('span');
				const quantity = this.cartModel.getQuantity(foodItemId);
				spanElement.innerText = quantity;
			
				const increaseButton = document.createElement('button');
				increaseButton.innerText= '+';
		
			quantityElement.appendChild(decreaseButton);
			quantityElement.appendChild(spanElement);
			quantityElement.appendChild(increaseButton);
	
		  // For Price
		  const priceElement = document.createElement('td');
		  priceElement.innerText= foodItemObj.price;
	  
		  tableRow.appendChild(imageElement);
		  tableRow.appendChild(nameElement);
		  tableRow.appendChild(quantityElement);
		  tableRow.appendChild(priceElement);
	  
		  cartItemsTable.appendChild(tableRow);      
		}    


  }

  constructCartCheckoutView(){

		const totalItems = this.cartModel.getTotalItems();
		const totalItemsObj = document.getElementById("total-item");
		totalItemsObj.innerText = `Total Items : ${totalItems}`;

		const sum = this.cartModel.getSum();
		const totalPriceObj = document.getElementById("total-price");
		totalPriceObj.innerText = `Total Price : ${sum}`;        

  }
}

export {CartView}