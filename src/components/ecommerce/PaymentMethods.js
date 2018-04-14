import React from 'react';

const PaymentMethods = (props) => {

  return (
    <div>
      <h4>Выберите способ оплаты</h4>
      {props.paymentMethods.map (
        method => <button key={method.id}>{method.name}</button>
      )}
    {props.buyAsGift ? (
    <button disabled>Подарочный сертификат</button>) : (
    <button>Подарочный сертификат</button>
    )}
  </div>
  );

};

export default PaymentMethods;