import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomed: false,
      image: 'placeholder',
      blurb: 'Lorem Ipsum',
      cardDisplayed: true,
      hornsSelectedState: 'all',
    }
  }

  handleRenderModal = (imageUrl, description) => {
    this.setState({
      zoomed: true,
      image: imageUrl,
      blurb: description,

    })
  }

  handleRemoveModal = () => {
    this.setState({
      zoomed: false
    })
  }

  handleSelectForm = e => {
    e.preventDefault();
    let hornsSelected = e.target.value;
    this.setState({
      hornsSelectedState: hornsSelected
    })
}

render() {
  return (
    <>
      <Header />
      <Container>
        <Form style={{ width: '15%', margin: 'auto' }}>
          <Form.Group controlId="selected">
            <Form.Label style={{ textAlign: "center" }}>
              Sort By Horn Count
            </Form.Label>
            <Form.Select name="hornsSelected" id="hornsSelected" onChange={this.handleSelectForm}>
              <option value="all">All</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="many">4+ Horns</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
      <Main
        data={data}
        handleRenderModal={this.handleRenderModal} />
      <Modal contentClassName="modal-content" size="lg" centered show={this.state.zoomed} onHide={this.handleRemoveModal}>
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="zoomed" align="center" width="100%" margin="auto"
            src={this.state.image}
            alt={this.state.description}
          />
          <p className="blurb">{this.state.blurb}</p>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}
}

export default App;
