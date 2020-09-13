import React from 'react';
import logo from '../../logo.svg';
import Header from '../../common/header/Header'
import './Home.css';
import { Button,Container } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { saludo: 'mundo', contador: 0 };
    this.fxTest = this.fxTest.bind(this);
    this.cambiarSaludo = this.cambiarSaludo.bind(this);
  }

  cambiarSaludo() {
    this.setState({ saludo: 'React', contador: this.state.contador + 1 });
  }

  fxTest(text) {
    alert("FX parent - child var: " + text);
  }

  render() {
    const contador = this.state.contador > 0 ? <span>Contador: {this.state.contador}</span> : '';
    const textoBoton = this.state.contador > 0 ? 'Incrementar contador' : 'Cambiar saludo';
    return (
      <Container>
        <h1>Hola, {this.state.saludo}!</h1>
        <p>{contador}</p>
        <p>
          Esta es una app de ejemplo hecha en ReactJs con React Bootstrap.
          <img src={logo} className="App-logo" alt="logo" />
        </p>
        <p>
          <Button variant="primary" onClick={this.cambiarSaludo}>{textoBoton}</Button>
        </p>
      </Container>
    );
  }
}

export default Home;