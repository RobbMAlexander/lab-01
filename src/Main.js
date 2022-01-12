import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render () {
    return (
      <>
        <HornedBeast name="HB1" imageUrl="srcurl"/>
        <HornedBeast name="HB2" imageUrl="srcurl"/>
      </>
    )
  }
}

export default Main;
