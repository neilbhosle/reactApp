import React from 'react';

const Address = ({ address }) => {
  const { country, state, city } = address;

  return (
    <div>
      <h2>Address</h2>
      <p>Country: {country}</p>
      <p>State: {state}</p>
      <p>City: {city}</p>
    </div>
  );
};


export default Address;
