import React from 'react';

const Subscriptions = (props) => {
  
  const handleClick = e => props.handleClick (e);

  const totalPrice = (price, months) => {
    return Number.parseInt (price, 10) * Number.parseInt (months, 10);
  }; 

  /*
                <p>{subscription.name}</p>
              <p className='brownText'>
              {totalPrice (subscription.monthlyPrice, subscription.months)} руб
              </p>
              <p className='bigText'>
                <b>{subscription.monthlyPrice} руб / мес</b>
              </p>
  */

  return (
    <div>
      <h4>Выберите срок подписки</h4>
      <div id={props.divId}>
        {props.subscriptions.map (
          subscription => (
          <button key={subscription.id}
                  id={subscription.id}
                  onClick={e => handleClick(e)}
                  name={subscription.months}
                  >
          {subscription.name}&nbsp;
          {totalPrice (subscription.monthlyPrice, subscription.months)} руб&nbsp;
          {subscription.monthlyPrice} руб / мес
          </button>
          )
        )}
      </div>
  </div>
  );
};

export default Subscriptions;