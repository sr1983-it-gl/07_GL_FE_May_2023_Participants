
import {CartItem} from "./CartItem"

const CartItems = ({cartModel, addToCart, removeFromCart}) => {

  return (
    <div>
      {
        cartModel.cartItemsModel.map( (cartItemModel) => {

          return (
            <CartItem cartItemModel={cartItemModel} addToCart={addToCart}
            removeFromCart={removeFromCart}></CartItem>
          )
        })
      }
    </div>
  )
}

export {CartItems}