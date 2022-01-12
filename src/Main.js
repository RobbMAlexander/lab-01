import React from 'react';
import { Card } from 'react-bootstrap';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Main extends React.Component {
  render () {

      let beastPaddock = this.props.data.map((beast, idx) => (
       
        <HornedBeast
        key={idx}
        name={beast.title}
        imageUrl={beast.image_url}
        hornCount={beast.horns}
        description={beast.description}
        keyword={beast.keyword}
        title={beast.title}
        />
     
      ));



    return (
      <>
        {beastPaddock}  
      </>
    )
  }
}

export default Main;
