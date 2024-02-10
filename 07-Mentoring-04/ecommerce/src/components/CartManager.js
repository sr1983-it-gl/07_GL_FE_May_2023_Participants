

import {CartItems} from "./CartItems"
import { CartPricing } from "./CartPricing"

const CartManager = ({cartModel, addToCart, removeFromCart}) => {

  return (
    <div style={{backgroundColor : 'lightblue'}}>

      <h2>Cart Items</h2>
      <hr/>

      {
        <CartItems cartModel={cartModel} addToCart={addToCart} removeFromCart={removeFromCart}></CartItems>
      }

      {
        <CartPricing cartModel={cartModel}></CartPricing>
      }

      {/* PricingCOmponent  */}
    </div>
  )
}

export {CartManager}