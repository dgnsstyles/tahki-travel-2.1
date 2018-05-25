import React, { Component } from 'react';
import {Segment, Container, Grid, Image, List, Header} from 'semantic-ui-react'

import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Routes from './Routes/Routes'




class App extends Component {
  render() {
    return (

        <Router>
            <div className="App">

                <Navbar/>

               <Routes />
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
