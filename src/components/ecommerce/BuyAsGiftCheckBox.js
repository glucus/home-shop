import React from 'react';

const BuyAsGiftCheckBox = (props) => {

  const handleChange = (e) => {
    props.handleChange(e);
  };
  // className={props.hidden}
  return (
    <div>
      <label htmlFor="buyAsGift">
        Покупаю подписку в подарок
      </label>
      <input type="checkbox"
          name="buyAsGift"
          id="buyAsGift"
          checked={props.buyAsGift}
          onChange={e => handleChange(e)}>
      </input>
  </div>
  );
};

export default BuyAsGiftCheckBox;