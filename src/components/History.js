// import React,{useContext} from 'react'
// import { MyContext } from './Transition';
// export const History = () => {
//   const prix=useContext(MyContext); 
//   const historyArray=prix[3]
//   return (
//     <div id='history'>
//         <h2>History</h2>
//         <div className='line-hor'></div>
//         <div id='history-box'>
//           <div id='hy-Box'>
//           {historyArray.forEach((obj, index) => (
//           <div key={index} >
//             <li>{obj.item} <span>{obj.price}</span></li>
//           </div>
//          ))}
//           </div>    
//         </div>
        
//     </div>
//   )
// }
import React, { useContext } from 'react';
import { MyContext } from './Transition';

export const History = () => {
  const prix = useContext(MyContext); 
  const historyArray = prix[3];

  return (
    <div id='history'>
      <h2>History</h2>
      <div className='line-hor'></div>
      <div id='history-box'>
          {historyArray.map((obj, index) => (
            <div key={index} id='hy-Box'>
              <li>{obj.item} <span>{obj.price}</span></li>
            </div>
          ))}
      </div>
    </div>
  );
};
