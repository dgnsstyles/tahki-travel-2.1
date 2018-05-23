import React, {Component} from 'react';
import { Divider} from 'semantic-ui-react';
import HeroPaquetes from './HeroComponents/HeroPaquetes'
import ToursPaquetes from './ToursPaquetes/ToursPaquetes'
import CardPaquetes from './CardPaquetes/CardPaquetes'
import PropTypes from 'prop-types';

class Paquetes extends Component {
    render() {
        return (
            <div>
                <HeroPaquetes/>
                <br/>
                <Divider horizontal><h2>Tours</h2></Divider>
                <br/>
                <ToursPaquetes/>
                <br/>
                <CardPaquetes/>
            </div>
        );
    }
}

Paquetes.propTypes = {};

export default Paquetes;
