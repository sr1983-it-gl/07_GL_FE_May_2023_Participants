

const getAllPayeeNames = (expenseItems) => {

  const payeeNames = [];

  expenseItems.forEach( (expenseItem) => {

    const payeeName = expenseItem.payeeName;

    if (!payeeNames.includes(payeeName)){
      payeeNames.push(payeeName);
    }
  })

  return payeeNames;
}

export {getAllPayeeNames}