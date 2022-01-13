import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { CardImg, ModalBody } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      image: 'placeholder',
      blurb: 'Lorem Ipsum'
    }
  }


  handleRenderModal = (imageUrl, description) => {
    this.setState({
      selected: true,
      image: imageUrl,
      blurb: description,
    })
  }

  handleRemoveModal = () => {
    this.setState({
      selected: false
    })
  }

  render() {
    return (
      <>
        <Header />

        <Main 
        data={data} 
        handleRenderModal={this.handleRenderModal}
        />

        <Modal centered show={this.state.selected} onHide={this.handleRemoveModal}>
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img width="130%" className="zoomed"
              src={this.state.image}
              alt={this.state.description}
            />
            {/* <Button variant="primary" 
            onClick={this.handleVote}>
              Vote
            </Button> */}
            {this.state.blurb}
          </Modal.Body>
        </Modal>

        <Footer />
      </>
    );
  }
}

export default App;
