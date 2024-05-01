import React, { createContext, useState } from 'react';
import { Balance } from "./Balance";

export const MyContext = createContext();

// Function to calculate balanc

export const Transition = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [income,setIncome]=React.useState(0);
  const [expense,setexpese]=React.useState(0);
  const [history,sethistory]=React.useState([{item:"",price:0}])
  
  const handleAddTransaction = () => {
    // Calculate new balance based on the current amount
    setBalance(prevstate => prevstate+ amount);
    if(amount>=0){
      setIncome(prestate=>prestate+amount)
    }else{
      setexpese(prestate=>prestate+amount)
    }
    sethistory(prestate =>([...prestate,{
      item:text,
      price:amount}]))
  }

  console.log(history)
  
  const contextValue=[balance,income,expense,history]
  return (
    <>
      <MyContext.Provider value={contextValue}>
        <Balance />
      </MyContext.Provider>
      <div id='transaction'>
        <h2>Add new transaction</h2> 
        <div className='line-hor'></div>
        <label>Text</label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
        <label>Amount (negative - expense, positive - income)</label>
        <input type='number' value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder='Enter amount...' />
        <button onClick={handleAddTransaction}>Add transaction</button>
      </div>
    </>
  );
}
