import React, {Component} from 'react';
import { Divider} from 'semantic-ui-react';
import HeroPaquetes from './HeroComponents/HeroPaquetes'
import ToursPaquetes from './ToursPaquetes/ToursPaquetes'
import CardPaquetes from './CardPaquetes/CardPaquetes'
import PropTypes from 'prop-types';

class Paquetes extends Component {

    constructor(props){
        super(props);

        this.state = {
            tours: []
        }
    }

    async componentDidMount() {
        const res = await fetch('http://localhost:3001/v1/tours');
        const data = await res.json();
        this.setState({
            tours: data[0]
        })
    }

    render(props) {
        return (
            <div>
                <HeroPaquetes />
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
