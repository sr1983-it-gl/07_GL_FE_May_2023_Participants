
import {useEffect} from "react"

import {getAllExpenseItems} from "../services/expense"

const ExpenseTrackerApp = () => {

  useEffect( () => {

      const getAllExpenseItemsInvoker = async () => {

        const response = await getAllExpenseItems();
        console.log("Expense Items");
        console.log(JSON.stringify(response))

      }

      getAllExpenseItemsInvoker();

  }, [])

  // Write down the useEffect hook
  // Write a new method within the useEffect
  // Within the new method impl, call the service method
  // Print the results

  return (
    <div>
      Expense Tracker App
    </div>
  )
}

export {ExpenseTrackerApp}