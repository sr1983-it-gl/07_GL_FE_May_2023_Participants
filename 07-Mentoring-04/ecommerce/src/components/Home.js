
import {ProductsLister} from "./ProductsLister" 
import {CartManager} from "./CartManager"

import {Row, Col, Container} from "react-bootstrap"
import { Header } from "./Header"

import sample_products from "../product"
import { useState } from "react"

const Home = () => {

  const sampleCartModel = () => {

    const testCartModel = {
      cartItemsModel : [

        {
          product : sample_products[0],
          quantity: 1  
        },

        {
          product : sample_products[1],
          quantity: 2  
        },

        {
          product : sample_products[2],
          quantity: 3
        },
      ]
    }

    return testCartModel;
  }

  const[cart, setCart] = useState(sampleCartModel());

  const addToCart = (productItem) => {

    
    const matchingCartItem 
      = cart.cartItemsModel.find( (cartItemModel) => (

      cartItemModel.product.id === productItem.id

    ))

    if (matchingCartItem){

      const updatedCartItems = cart.cartItemsModel.map( (cartItemModel) => {

        if (cartItemModel.product.id === productItem.id){

          const updatedCartItem = {
            product : cartItemModel.product,
            quantity : cartItemModel.quantity + 1
          }

          return updatedCartItem;

        }else{

          const newCartItem = {
            product: cartItemModel.product,
            quantity : cartItemModel.quantity
          }

          return newCartItem;
        }

      })

      const updatedCart = {
        cartItemsModel : updatedCartItems
      }

      setCart(updatedCart);

    }else{

        const newCartItem = {
          product : productItem,
          quantity : 1
        }

        const updatedCartItemsModel = [
          ...cart.cartItemsModel, newCartItem
        ]

        const updatedCart = {
          cartItemsModel : updatedCartItemsModel
        }

        // updateCart -> 4
        setCart(updatedCart);
    }

  }

  const removeFromCart = (productItem) => {

    // scenario-1
      // cartItems -> 3
        // Prod1, 3, 10000
        // Prod2, 4, 20000
        // Prod3, 5, 30000

    // updatedCartItems
        // Prod1, 3, 10000
        // Prod2, 3, 20000
        // Prod3, 5, 30000

  // sccenario-2
    // cartItems -> 3
      // Prod1, 3, 10000
      // Prod2, 1, 20000
      // Prod3, 5, 30000

  // updatedCartItems
      // Prod1, 3, 10000
      // Prod3, 5, 30000

    const updatedCartItems = [];

    cart.cartItemsModel.forEach( (cartItemModel) => {

      if (cartItemModel.product.id == productItem.id){

        if (cartItemModel.quantity == 1){

          // TODO

          // Dont do anything
        }else{

          const updatedCartItemModel = {
            product: cartItemModel.product,
            quantity: cartItemModel.quantity - 1
          }

          updatedCartItems.push(updatedCartItemModel);
        }
      }else{
        updatedCartItems.push(cartItemModel);
      }
    })

    const updatedCart = {
      cartItemsModel : updatedCartItems
    }

    setCart(updatedCart);

  }

  return (
    <Container>

      <Row>
        <Col lg={12}>{<Header></Header>}</Col>
      </Row>

      <Row>
        <Col lg={9}>{<ProductsLister addToCart={addToCart}></ProductsLister>}</Col>
        <Col lg={3}>{<CartManager cartModel={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartManager>}</Col>
      </Row>
      
    </Container>
  )
}

export {Home}