
import React from 'react';
import { Button, Card } from 'react-bootstrap';

export class Tarjeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      
      <div className="col-6 align-self-center" align="center">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="bandera" src={this.props.data.flag} />
          <Card.Body>
            <Card.Title>{this.props.data.name}</Card.Title>
            <Button variant="primary">Elegir</Button>
          </Card.Body>
        </Card>
      </div>
      
      
    );
  }
}

export default Tarjeta;