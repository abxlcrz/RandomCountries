import React from 'react';
import './Header.css';
import Clock from './../clock/Clock';
import {Button, ButtonToolbar} from 'react-bootstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.accionLocal = this.accionLocal.bind(this);
    this.accionDelParent = this.accionDelParent.bind(this);
  }

  accionLocal() {
    alert('Metodo del componente Header');
  }

  accionDelParent(){
    this.props.fx('Texto');
  }

  render() {
    return (
      <div className="header">
        <Clock />
        <p>{this.props.text}</p>
        <ButtonToolbar>
          <Button className="button" variant="success" onClick={this.accionLocal}>
            Accion local
          </Button>
          <Button className="button" onClick={this.accionDelParent}>
            Acción del PARENT
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Header;
