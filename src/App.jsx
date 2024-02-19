import React from 'react';
import Hello from './components/Hello';
import Food from './components/Food';
import Address from './components/Address';
import Fruits from './components/Fruits';

function App() {
  const addressData = {
    country: "India",
    state: "Maharashtra",
    city: "Mumbai"
  };

  return (
    <div className="App">
      {/* <Hello name="Eena" message="Wazzaaaa" />
      <Hello name="Meena" message="chal futt" />
      <Hello name="Dika" message="kya dikau?" />

      <Address address={addressData} />
      
      <Food dish="Biryani" rating="5" />
      <Food dish="Pav Bhaji" rating="5.1" />
      <Food dish="Pani Puri" rating="5.2" />
      <Food dish="Dosa" rating="5" />
      <Food dish="Bhole chature" rating="5" />

      <p>Hello World!!</p> */}
      <Fruits />
    </div>
  );
}

export default App;
