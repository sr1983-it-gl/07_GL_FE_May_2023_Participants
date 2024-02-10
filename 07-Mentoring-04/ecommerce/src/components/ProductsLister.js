
import sample_products from "../product"

import { Row } from "react-bootstrap"

import { Product } from "./Product"

const ProductsLister = ({addToCart}) => {

  return (
    <>
      <h2>Products</h2>
      <hr />

      <Row>
        {
          sample_products.map((sample_product_instance) => {

            return (
              <Product sample_product={sample_product_instance} addToCart={addToCart}></Product>
            )

          })
        }
      </Row>

    </>
  )
}

export { ProductsLister }