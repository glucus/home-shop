import React from 'react';

const NumbersList = (props) => {

  const listItems = props.numbers.map (
    number => <li key={number.toString()}>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
};

export default NumbersList;