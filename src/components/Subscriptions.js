import React from 'react';

const Subscriptions = (props) => {
  
  const handleClick = e => props.handleClick (e);

  const totalPrice = (price, months) => {
    return Number.parseInt (price, 10) * Number.parseInt (months, 10);
  }; 

  return (
    <div>
      <h4>На какой срок</h4>
      <div id={props.divId}
           className='clearfix'>
        {props.subscriptions.map (
          subscription => (
          <button key={subscription.id}
                  id={subscription.id}
                  onClick={e => handleClick(e)}
                  name={subscription.months}
                  className='listButton'>
            <p>{subscription.name}</p>
            <p className='brownText'>
              {totalPrice (subscription.monthlyPrice, subscription.months)} руб
            </p>
            <p className='bigText'>{subscription.monthlyPrice} руб / мес</p>
          </button>
          )
        )}
      </div>
  </div>
  );
};

export default Subscriptions;