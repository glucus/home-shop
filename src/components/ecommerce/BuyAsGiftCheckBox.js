import React from 'react';

const BuyAsGiftCheckBox = (props) => {

  const handleChange = (e) => {
    props.handleChange(e);
  };
  
  return (
    <div>
      <label className={props.hidden}>
        Покупаю подписку в подарок
      </label>
      <input type="checkbox"
          name="buyAsGift"
          checked={props.buyAsGift}
          className={props.hidden}
          disabled={props.usePromoCode}
          onChange={e => handleChange(e)}>
      </input>
  </div>
  );
};

export default BuyAsGiftCheckBox;