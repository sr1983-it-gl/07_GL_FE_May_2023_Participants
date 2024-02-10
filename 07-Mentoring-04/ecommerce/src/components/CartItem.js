
import {Row, Col} from "react-bootstrap"

import {Button} from "react-bootstrap"

const CartItem = ({cartItemModel, addToCart, removeFromCart}) => {

  return (
    <Row>
      <Col>{cartItemModel.product.name}</Col>
      
      <Col xs={2}>
        <Button variant="primary" onClick={
          () => {
            removeFromCart(cartItemModel.product)
          }
        }>-</Button>
      </Col>

      <Col xs={2}>
        <Button variant="success" onClick={
          () => {
            addToCart(cartItemModel.product)
          }
        }>+</Button>
      </Col>

      <Col>
      {cartItemModel.quantity} * {cartItemModel.product.price}
      </Col>
    </Row>
  )
}

export {CartItem}