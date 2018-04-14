import React from 'react';

const PaymentMethods = (props) => {
  
  const handleClick = (e) => {
    props.handleClick(e);
  };

  return (
    <div>
      <h4>Выберите способ оплаты</h4>
      {props.paymentMethods.map (
        method => <button key={method.id}
                          onClick={e => handleClick(e)}
                          name={method.name}>
                    {method.name}
                  </button>
      )}
      <br/>
    {props.buyAsGift ? (
    <button disabled>Подарочный код</button>) : (
    <button onClick = {e => handleClick(e)}>
      Подарочный код
    </button>
    )}
  </div>
  );

};

export default PaymentMethods;