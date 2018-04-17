import React from 'react';

const FinalPayment = (props) => {

const totalPrice = (monthlyPrice, monthsNum, addDiscount, discountPrice) => {
  
  const price = Number.parseInt (monthlyPrice, 10);
  const months = Number.parseInt (monthsNum, 10);
  const discountPr = Number.parseInt (discountPrice, 10);

  if (addDiscount) {
    return price * months + discountPr;
  } 
    return price * months;
};
  

  return (
    <div>
      <h4>Итоговая сумма к оплате</h4>
      <p className='bigText'><b>
        {totalPrice (
          props.subscription.monthlyPrice,
          props.subscription.months,
          props.addDiscount,
          props.discountPrice
        )} руб    
      </b></p>
    </div>
  );
};

export default FinalPayment;

