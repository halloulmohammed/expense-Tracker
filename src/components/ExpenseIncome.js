import React ,{useContext}from 'react'
import { History } from './History'
import { MyContext } from './Transition'
export const ExpenseIncome = () => {
  const prix=useContext(MyContext)
  return (
    <>
      <div id='expenseIncome'>
        <div id='income'>
            <h4>INCOME</h4>
            <h4 id='amount-IN'>${prix[1]}</h4>
        </div>
        <div className="line"></div>
        <div id='expense'>
            <h4>EXPENSE</h4>
            <h4 id='amount-EX'>${prix[2]}</h4>
        </div>
      </div>
      <History />

    </>
    
  )
}
