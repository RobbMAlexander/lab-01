import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornsSelected: this.props.hornsSelected
    }
  }

  render() {

    let beastArr = this.props.data.map((beast, idx) => (

      <HornedBeast
        key={idx}
        name={beast.title}
        imageUrl={beast.image_url}
        hornCount={beast.horns}
        description={beast.description}
        keyword={beast.keyword}
        title={beast.title}
        handleRenderModal={this.props.handleRenderModal}
        handleSelectForm={this.props.handleSelectForm}
        hornsSelectedState={this.props.hornsSelectedState}
      />

    ));
    let selectedBeastArr = beastArr;
    if (this.state.hornsSelectedState === 'all') {
      selectedBeastArr = beastArr
    }

    if (this.state.hornsSelectedState === '1') {
      selectedBeastArr = (beastArr.filter(beast => (beast.state.hornCount === '1') === true))
    }

    if (this.state.hornsSelectedState === '2') {
      selectedBeastArr = (beastArr.filter(beast => (beast.state.hornCount === '2') === true))
    }

    if (this.state.hornsSelectedState === '3') {
      selectedBeastArr = (beastArr.filter(beast => (beast.state.hornCount === '3') === true))
    }

    if (this.state.hornsSelectedState === 'many') {
      selectedBeastArr = (beastArr.filter(beast => (parseInt(beast.state.hornCount) >= 4) === true))
    }

    return (
      <>
        {selectedBeastArr}
      </>
    )
  }
}

export default Main;
