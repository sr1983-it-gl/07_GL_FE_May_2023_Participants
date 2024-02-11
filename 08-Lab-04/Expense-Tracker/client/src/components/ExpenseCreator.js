
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import {getAllPayeeNames} from "../services/expense-utils"

const ExpenseCreator = ({expenseItems}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const payeeNames = getAllPayeeNames(expenseItems)

  function expenseForm() {
    return (
      <Form>

        <Form.Group className="mb-3" controlId="expenseDescription">
          <Form.Label>Expense Description</Form.Label>
          <Form.Control type="text" placeholder="Enter expense description" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>Payee Name</Form.Label>
          
          <Form.Select aria-label="Default select example">
            <option>SELECT A PAYEE</option>

            {
              payeeNames.map( (payeeName) => {

                return (
                  <option value={payeeName}>{payeeName}</option>
                )
              })
            }
          </Form.Select>

        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter expense price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="expenseDate">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>

        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  return (<div>

      <Button variant="primary" onClick={handleShow} className='float-end'>
        Add New Expense
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {expenseForm()}
        </Modal.Body>
      </Modal>

  </div>)
}

export {ExpenseCreator}