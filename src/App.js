import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { ExpenseIncome } from './components/ExpenseIncome';
import { History } from './components/History';
import { Transition } from './components/Transition';

function App() {

  const [Expense,setExpense]=React.useState(0);
  const [Income,setIncome]=React.useState(0);
  function balance(amount){
    if(amount>=0){
      setIncome(prevState=> prevState + amount)
    } else{
      setExpense(prevState=> prevState + amount)
    }
  return Expense + Income
  } 
  return (
    <div className='App'>
      <Header />
      <Transition />
    </div>
  );
}

export default App;
