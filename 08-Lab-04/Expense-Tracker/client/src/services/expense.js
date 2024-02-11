
import axios from "axios"

const getAllExpenseItems = async () => {

  const GET_EXPENSES_URL = "http://localhost:4000/expenses";

  const response = await axios.get(GET_EXPENSES_URL);
  return response.data;

}

const createNewExpenseItem = (newExpenseItem) => {

  const POST_EXPENSES_URL = "http://localhost:4000/expenses";

  axios.post(POST_EXPENSES_URL, newExpenseItem, {
    headers : {
      'Content-Type' : 'application/json'
    }
  })

}

export {getAllExpenseItems, createNewExpenseItem}