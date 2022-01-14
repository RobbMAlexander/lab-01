import React from 'react';
import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleVote = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }


  render() {
    return (
      <article>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top"
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            onClick={() => this.props.handleRenderModal(this.props.imageUrl, this.props.description)}
            />
          <Card.Body className="p-3 mb-2 bg-info text-white">
            <h3>{this.props.title}</h3>
            <Button className='button' variant="primary" 
            onClick={this.state.handleVote}>
              Vote
            </Button>
            <p>❤️'s :{this.state.votes}</p>
          </Card.Body>
        </Card>
      </article>
    )
  }
}

export default HornedBeast;
