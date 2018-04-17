import React from 'react';

const FinalPayment = (props) => {

const totalPrice = (monthlyPrice, monthsNum, addDiscount, discountValue) => {
  
  const price = Number.parseInt (monthlyPrice, 10);
  const months = Number.parseInt (monthsNum, 10);
  const discount = Number.parseInt (discountValue, 10);

  if (addDiscount) {
    return (1 + discount / 100) * (price * months);
  } 
    return (price * months);
};
  

  return (
    <div>
      <h4>Итоговая сумма к оплате</h4>
      <p className='bigText'><b>
        {totalPrice (
          props.subscription.monthlyPrice,
          props.subscription.months,
          props.addDiscount,
          props.discountValue
        )} руб    
      </b></p>
    </div>
  );
};

export default FinalPayment;

