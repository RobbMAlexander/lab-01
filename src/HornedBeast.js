import React from 'react';
import Card from 'react-bootstrap/Card';

import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
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
            onClick={this.handleVote} />
          <Card.Body className="p-3 mb-2 bg-info text-white">
            <h3>{this.props.title}</h3>
            Votes :{this.state.votes}
          </Card.Body>
        </Card>
      </article>
    )
  }
}

export default HornedBeast;
