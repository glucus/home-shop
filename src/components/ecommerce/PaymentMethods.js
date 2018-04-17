import React from 'react';

const PaymentMethods = (props) => {

  const handleClick = e => props.handleClick(e);

  return (
    <div>
      <h4>Выберите способ оплаты</h4>
      <div id={props.divId}
           className='clearfix'>
        {props.paymentMethods.map (
          method => (
          <button key={method.id}
                  id={method.id}
                  onClick={e => handleClick(e)}
                  name={method.name}
                  disabled={method.name === 'Подарочный код' && props.buyAsGift}
                  className='listButton'>
                  {method.name}
          </button>)
        )}
      </div>
  </div>
  );
};

export default PaymentMethods;

