import React, { Component } from 'react';
import {Segment, Container, Grid, Image, List, Header} from 'semantic-ui-react'

import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import './App.css';
import Route from 'react-router-dom/Route'
import Navbar from './Components/Navbar'
import Inicio from './pages/Inicio/Inicio'
import Destinos from './pages/Destinos/Destinos'
import Nosotros from './pages/Nosotros/Nosotros'
import Contacto from "./pages/Contacto/Contacto";
import Paquetes from './pages/Paquetes/Paquetes'




class App extends Component {
  render() {
    return (

        <Router>
            <div className="App">

                <Navbar/>

                <Route path="/"  exact component={Inicio}></Route>
                <Route path="/Destinos" component={Destinos}></Route>
                <Route path="/Nosotros" component={Nosotros}></Route>
                <Route path="/Contacto" component={Contacto}></Route>
                <Route path="/Paquetes" component={Paquetes}></Route>
                <Segment inverted vertical style={{ padding: '3em 0em' }}>
                    <Container>
                        <Grid centered divided inverted stackable>
                            <Image src="../static/images/LogoFooter.png"/>
                        </Grid>
                    </Container>
                </Segment>
            </div>

        </Router>
    );
  }
}

export default App;
