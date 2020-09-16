
import React from 'react';
import './Paises.css';
import { Button, Container } from 'react-bootstrap';
import { Tarjeta } from './../../common/tarjeta/Tarjeta';

class Paises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPaises: 0,
      cargando: false,
      paisLocal: {},
      paisVisitante: {}
    };
    this.fxTest = this.fxTest.bind(this);
    this.hacerSorteo = this.hacerSorteo.bind(this);
  }

  hacerSorteo() {
    this.setState({ cargando: true });
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        //Cuento la cantidad de paises
        const cantidadDePaises = response.length;
        this.setState({ totalPaises: cantidadDePaises })
        //Elijo al azar 2 paises
        const posicionLocal = Math.floor(Math.random() * (cantidadDePaises - 0)) + 0;
        const posicionVisitante = Math.floor(Math.random() * (cantidadDePaises - 0)) + 0;;
        //Seteo los objetos pais
        this.setState({ paisLocal: response[posicionLocal] });
        this.setState({ paisVisitante: response[posicionVisitante] });
        console.log(this.state);
        return;
      })
      .then(() => {
        this.setState({ cargando: false });
      });
  }

  fxTest(text) {
    alert("FX parent - child var: " + text);
    this.setState({ texto: text });
  }

  traerCuadroDePaises() {
    if (!this.state.cargando && this.state.totalPaises > 0) {
      return (
        <div className="row">
          <div className="col-md-4" align="center">
            <Tarjeta data={this.state.paisLocal} />
          </div>
          <div className="col-md-4" align="center">
            <h1 className="vsText">VS.</h1>
          </div>
          <div className="col-md-4" align="center">
            <Tarjeta data={this.state.paisVisitante} />
          </div>
        </div>
      );
    } else {
      return (
        <p></p>
      );
    }
  }

  render() {
    const hacerSorteoBoton = this.state.cargando ? 'Cargando...' : <Button onClick={this.hacerSorteo}>Hacer Sorteo</Button>;
    const cuadroDePaises = this.traerCuadroDePaises();
    return (
      <Container>
        <div className="App">

          <div className="aboutContainer">
            {cuadroDePaises}
          </div>

          <div className="aboutContainer">
            {hacerSorteoBoton}
          </div>
        </div>
      </Container>
    );
  }
}

export default Paises;