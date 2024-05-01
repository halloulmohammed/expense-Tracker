import React, { useContext } from 'react'
import { ExpenseIncome } from './ExpenseIncome'
import { MyContext } from './Transition'
export const Balance = () => {
  const prix=useContext(MyContext);
  return (
    <div>
      <h4>YOUR BALANCE</h4>
      <h2>${prix[0]}</h2>
      <ExpenseIncome />
    </div>
  )
}
