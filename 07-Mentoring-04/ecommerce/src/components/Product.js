
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Col } from 'react-bootstrap';

const Product = ({ sample_product, addToCart }) => {

  function productCardComponent() {
    return (

      <Col className='my-2' key={sample_product.id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={sample_product.image} />

          <Card.Body>
            <Card.Title>{sample_product.name}</Card.Title>
            <Card.Text>{sample_product.price}</Card.Text>
            <Button variant="primary" onClick={

              () => {
                addToCart(sample_product)
              }
            
            }>Add to Cart</Button>
          </Card.Body>

        </Card>
      </Col>
    );
  }

  return (
    productCardComponent()
  )
}

export { Product }