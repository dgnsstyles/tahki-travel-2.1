import React, {Component} from 'react';
import HeroInicio from './InicioComponents/HeroInicio'
import Streched from './InicioComponents/Streched'
import Cards from './InicioComponents/Cards'
import Aliansas from './InicioComponents/Aliansas'
import { Divider } from 'semantic-ui-react';

import PropTypes from 'prop-types';

class Inicio extends Component {
    render() {
        return (
            <div>
                <HeroInicio/>
                <Divider horizontal style={{ paddingTop: '20px', paddingBottom:'50px'}} ><h3>Destinos</h3></Divider>
                <Streched/>
                <Divider horizontal style={{ paddingTop: '20px', paddingBottom:'50px'}} ><h3>Paquetes</h3></Divider>
                 <Cards/>
                <br/>
                <Divider horizontal style={{ paddingTop: '20px', paddingBottom: '50px'}}> <h3>Alianzas Estrategicas</h3></Divider>

                <Aliansas/>

            </div>
        );
    }
}

Inicio.propTypes = {};

export default Inicio;
