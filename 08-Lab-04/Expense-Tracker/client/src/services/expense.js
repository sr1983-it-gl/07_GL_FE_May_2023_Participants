
import axios from "axios"

const getAllExpenseItems = async () => {

  const GET_EXPENSES_URL = "http://localhost:4000/expenses";

  const response = await axios.get(GET_EXPENSES_URL);
  return response.data;

}

export {getAllExpenseItems}