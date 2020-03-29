import React from 'react';
import Header from '../../common/header/Header';
import Clock from './../../common/clock/Clock';
import './About.css';
import { Button } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { texto: '', mostrarReloj: false };
    this.fxTest = this.fxTest.bind(this);
    this.mostrarOcultarReloj = this.mostrarOcultarReloj.bind(this);
  }

  mostrarOcultarReloj() {
    this.setState({mostrarReloj: !this.state.mostrarReloj});
  }

  fxTest(text) {
    alert("FX parent - child var: " + text);
    this.setState({ texto: text });
  }

  render() {
    const headerElement = <Header text="Acerca de..." fx={this.fxTest}></Header>;
    const reloJelemento = this.state.mostrarReloj ? <Clock /> : '';
    const mostrarOcultarTexto = this.state.mostrarReloj ? 'Oculatar reloj' : 'Mostrar reloj';
    return (
      <div className="App">
        {headerElement}
        <div className="aboutContainer">
          <p>{this.state.texto}</p>
          <Button onClick={this.mostrarOcultarReloj}>{mostrarOcultarTexto}</Button>
          <div>{reloJelemento}</div>
        </div>
      </div>
    );
  }
}

export default About;